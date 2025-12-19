import React, { useState, useEffect, useRef } from 'react';
import { 
  ShieldCheck, Mail, Lock, ArrowLeft, Ban, LogOut, ShoppingCart, 
  X, LayoutDashboard, Globe, Download, Key, Copy, Trash2, 
  Sun, Moon, CheckCircle, AlertCircle, Loader2
} from 'lucide-react';

// ==========================================
// Constants & Helpers
// ==========================================
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzzphGByU8izIrzux7cGsvq3BVBA6sE7s6ehHIwhaNOQe_qfXe3Pupql99feo3vncsf/exec";

const fetchBloggerInfoJSONP = (id) => {
  return new Promise((resolve, reject) => {
    const callbackName = 'bloggerCallback_' + Math.floor(Math.random() * 1000000);
    window[callbackName] = (data) => {
      delete window[callbackName];
      const s = document.getElementById(callbackName);
      if (s) s.remove();
      if (data && data.feed) resolve(data);
      else reject('Data Error');
    };
    const script = document.createElement('script');
    script.id = callbackName;
    script.src = `https://www.blogger.com/feeds/${id}/posts/default?alt=json-in-script&callback=${callbackName}`;
    script.onerror = () => {
      delete window[callbackName];
      reject('Network Error');
    };
    document.body.appendChild(script);
  });
};

// ==========================================
// Main Component
// ==========================================
export default function PlugoApp() {
  const [view, setView] = useState('login'); // login, dashboard, banned, no-products
  const [user, setUser] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const [theme, setTheme] = useState('dark');
  const [loading, setLoading] = useState(false);
  const [toasts, setToasts] = useState([]);

  // Load session on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    const sessionData = localStorage.getItem('plugo_user_session');
    if (sessionData) {
      const session = JSON.parse(sessionData);
      refreshUserData(session.email, session.password);
    }
  }, []);

  // Update theme
  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  const addToast = (msg, type = 'success') => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, msg, type }]);
    if (type !== 'loading') {
      setTimeout(() => removeToast(id), 4000);
    }
    return id;
  };

  const removeToast = (id) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  const refreshUserData = async (email, password) => {
    setLoading(true);
    try {
      const res = await fetch(`${GOOGLE_SCRIPT_URL}?action=login&email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`);
      const result = await res.json();
      
      if (result.status === 'banned') {
        setView('banned');
        return;
      }

      if (result.status === 'success') {
        setUser(result.meta);
        setBlogs(result.blogs || []);
        
        const uniqueProds = getUniqueProducts(result.meta, result.blogs || []);
        if (uniqueProds.length > 0) setView('dashboard');
        else setView('no-products');
      } else {
        logout();
      }
    } catch (e) {
      addToast("❌ تعذر المزامنة، يرجى تسجيل الدخول مجدداً", "error");
      logout();
    } finally {
      setLoading(false);
    }
  };

  const handleManualLogin = async (email, password) => {
    if (!email || !password) return addToast("⚠️ يرجى تعبئة كافة الحقول", "error");
    
    setLoading(true);
    try {
      const res = await fetch(`${GOOGLE_SCRIPT_URL}?action=login&email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`);
      const result = await res.json();

      if (result.status === 'banned') {
        setView('banned');
        addToast("⛔ هذا الحساب محظور", "error");
        return;
      }

      if (result.status === 'success') {
        setUser(result.meta);
        setBlogs(result.blogs || []);
        localStorage.setItem('plugo_user_session', JSON.stringify({ email, password }));

        const uniqueProds = getUniqueProducts(result.meta, result.blogs || []);
        if (uniqueProds.length > 0) setView('dashboard');
        else setView('no-products');

        addToast("✅ أهلاً بك، تم تسجيل دخولك بنجاح");
      } else {
        addToast("❌ بريد إلكتروني أو كلمة مرور غير صحيحة", "error");
      }
    } catch (e) {
      addToast("❌ خطأ في الاتصال بالخادم", "error");
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('plugo_user_session');
    setUser(null);
    setBlogs([]);
    setView('login');
  };

  const getUniqueProducts = (userData, blogsData) => {
    if (!userData) return [];
    const uniqueProducts = [];
    const userProds = Array.isArray(userData.products) ? userData.products : [userData.products];
    if (userProds) userProds.forEach(p => { 
      if (p && p.name && !uniqueProducts.find(up => up.name === p.name)) uniqueProducts.push(p); 
    });
    blogsData.forEach(b => { 
      if (b.productData && b.productData.name && !uniqueProducts.find(up => up.name === b.productData.name)) uniqueProducts.push(b.productData); 
    });
    return uniqueProducts;
  };

  // Wrapper styles
  const appStyles = {
    fontFamily: "'Tajawal', sans-serif",
    '--bg-primary': theme === 'dark' ? '#0f172a' : '#f8fafc',
    '--bg-secondary': theme === 'dark' ? '#1e293b' : '#ffffff',
    '--text-main': theme === 'dark' ? '#f1f5f9' : '#0f172a',
    '--text-dim': theme === 'dark' ? '#94a3b8' : '#64748b',
    '--accent': theme === 'dark' ? '#38bdf8' : '#0ea5e9',
    '--accent-glow': theme === 'dark' ? 'rgba(56, 189, 248, 0.5)' : 'rgba(14, 165, 233, 0.3)',
    '--border': theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : '#e2e8f0',
    '--toast-bg': theme === 'dark' ? 'rgba(15, 23, 42, 0.95)' : 'rgba(255, 255, 255, 0.95)',
  };

  return (
    <div style={appStyles} className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-main)] transition-colors duration-300" dir="rtl">
      {/* Global CSS Injection */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;700;900&display=swap');
        .glass-card { background-color: var(--bg-secondary); border: 1px solid var(--border); box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); }
        .active-nav { background: linear-gradient(135deg, var(--accent), #6366f1); color: white !important; box-shadow: 0 4px 15px var(--accent-glow); }
        .code-badge { font-family: 'Courier New', monospace; background: rgba(56, 189, 248, 0.1); color: var(--accent); padding: 4px 10px; border-radius: 6px; cursor: pointer; border: 1px solid rgba(56, 189, 248, 0.2); }
        .code-badge:hover { background: rgba(56, 189, 248, 0.2); }
        .animate-fade-up { animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        .icon-gradient-blue { background: linear-gradient(135deg, #38bdf8, #2563eb); }
        .icon-gradient-purple { background: linear-gradient(135deg, #a855f7, #7c3aed); }
        .icon-gradient-emerald { background: linear-gradient(135deg, #34d399, #059669); }
        .icon-gradient-rose { background: linear-gradient(135deg, #fb7185, #e11d48); }
        .icon-gradient-red { background: linear-gradient(135deg, #ef4444, #b91c1c); }
      `}</style>

      {/* Main Content Router */}
      {view === 'login' && <LoginView onLogin={handleManualLogin} />}
      {view === 'banned' && <BannedView onLogout={logout} />}
      {view === 'no-products' && <NoProductsView user={user} onLogout={logout} />}
      {view === 'dashboard' && (
        <DashboardView 
          user={user} 
          blogs={blogs} 
          theme={theme}
          setTheme={setTheme}
          onLogout={logout}
          refreshData={() => {
             const session = JSON.parse(localStorage.getItem('plugo_user_session') || '{}');
             if(session.email) refreshUserData(session.email, session.password);
          }}
          addToast={addToast}
          removeToast={removeToast}
        />
      )}

      {/* Global Loader */}
      {loading && (
        <div className="fixed inset-0 bg-[var(--bg-primary)]/80 backdrop-blur-sm z-[1000] flex flex-col items-center justify-center">
            <Loader2 className="w-12 h-12 text-[var(--accent)] animate-spin mb-4" />
            <p className="font-bold text-sm tracking-wide">Plugo AI Dashboard</p>
        </div>
      )}

      {/* Toasts */}
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[2000] flex flex-col gap-3 pointer-events-none">
        {toasts.map(t => (
           <div key={t.id} className="pointer-events-auto min-w-[320px] bg-[var(--toast-bg)] backdrop-blur-md border border-[var(--border)] p-4 rounded-2xl shadow-2xl flex items-center gap-3 animate-fade-up">
              {t.type === 'success' && <CheckCircle className="text-emerald-400 w-5 h-5" />}
              {t.type === 'error' && <AlertCircle className="text-red-400 w-5 h-5" />}
              {t.type === 'loading' && <Loader2 className="w-5 h-5 text-sky-400 animate-spin" />}
              <span className="font-bold text-sm text-[var(--text-main)]">{t.msg}</span>
           </div>
        ))}
      </div>
    </div>
  );
}

// ==========================================
// Sub Components
// ==========================================

function LoginView({ onLogin }) {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  return (
    <div className="flex items-center justify-center min-h-screen relative overflow-hidden bg-[radial-gradient(circle_at_top_left,#0f172a,#020617)]">
      {/* Background Shapes */}
      <div className="absolute -top-[10%] -right-[10%] w-[500px] h-[500px] bg-[radial-gradient(circle,#38bdf8_0%,transparent_70%)] blur-[80px] opacity-60 animate-pulse"></div>
      <div className="absolute -bottom-[10%] -left-[10%] w-[400px] h-[400px] bg-[radial-gradient(circle,#818cf8_0%,transparent_70%)] blur-[80px] opacity-60"></div>

      <div className="bg-[rgba(15,23,42,0.6)] backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-10 md:p-16 max-w-md w-full mx-4 shadow-2xl animate-fade-up z-10">
        <div className="text-center mb-12">
           <div className="w-24 h-24 mx-auto bg-slate-900/50 border border-slate-700/50 rounded-3xl flex items-center justify-center mb-6 shadow-xl relative overflow-hidden">
              <div className="absolute inset-0 bg-sky-500/20 blur-xl"></div>
              <ShieldCheck className="w-12 h-12 text-sky-400 relative z-10" />
           </div>
           <h1 className="text-5xl font-black mb-3 text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 tracking-tight">Plugo AI</h1>
           <p className="text-slate-400 font-medium text-sm">بوابة إدارة التراخيص والعملاء</p>
        </div>

        <div className="space-y-6">
           <div>
             <label className="block text-xs font-bold text-slate-400 mb-2 mr-1">البريد الإلكتروني</label>
             <div className="relative group">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-4 pr-12 text-white placeholder-slate-500 outline-none focus:border-sky-500 focus:bg-white/10 transition-all text-left"
                  dir="ltr"
                />
                <Mail className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-sky-400 transition-colors w-5 h-5" />
             </div>
           </div>
           <div>
             <label className="block text-xs font-bold text-slate-400 mb-2 mr-1">كلمة المرور</label>
             <div className="relative group">
                <input 
                  type="password" 
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-4 pr-12 text-white placeholder-slate-500 outline-none focus:border-sky-500 focus:bg-white/10 transition-all text-left"
                  dir="ltr"
                />
                <Lock className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-sky-400 transition-colors w-5 h-5" />
             </div>
           </div>
           <button 
             onClick={() => onLogin(email, pass)}
             className="w-full bg-gradient-to-br from-sky-400 to-blue-600 hover:from-sky-300 hover:to-blue-500 text-white py-5 rounded-2xl font-bold shadow-lg shadow-sky-500/20 flex items-center justify-center gap-3 mt-4 text-lg group transition-all transform hover:-translate-y-1"
           >
             <span>تسجيل الدخول</span>
             <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
           </button>
        </div>

        <div className="mt-8 text-center border-t border-white/5 pt-6">
           <p className="text-slate-500 text-xs font-medium">محمي بواسطة أنظمة Plugo AI الأمنية &copy; 2025</p>
        </div>
      </div>
    </div>
  );
}

function BannedView({ onLogout }) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-950 p-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#450a0a_0%,#0f172a_70%)] opacity-50"></div>
      <div className="glass-card rounded-[3rem] p-10 md:p-14 max-w-md w-full animate-fade-up text-center relative border-red-500/30 backdrop-blur-xl">
        <div className="w-24 h-24 icon-gradient-red rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_50px_rgba(239,68,68,0.4)] animate-pulse">
            <Ban className="w-12 h-12 text-white" />
        </div>
        <h2 className="text-3xl font-black mb-4 text-red-100">حساب محظور</h2>
        <p className="text-red-200/70 font-bold leading-relaxed mb-8 text-sm">
            تم تعليق الوصول إلى حسابك حالياً لمخالفة الشروط. يرجى مراجعة الدعم الفني.
        </p>
        <button onClick={onLogout} className="w-full py-4 rounded-2xl font-black bg-red-500/20 hover:bg-red-500/30 text-red-200 border border-red-500/20 transition-all flex items-center justify-center gap-3">
            <LogOut size={18} /> تسجيل الخروج
        </button>
      </div>
    </div>
  );
}

function NoProductsView({ user, onLogout }) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-950 p-6">
        <div className="glass-card rounded-[3rem] p-10 md:p-14 max-w-md w-full animate-fade-up text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-rose-500 to-orange-500"></div>
            <div className="w-24 h-24 icon-gradient-rose rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-rose-500/30">
                <ShoppingCart className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-black mb-4">نعتذر منك <span className="text-rose-400">{user ? user.name.split(' ')[0] : ''}</span></h2>
            <p className="text-slate-400 font-bold leading-relaxed mb-8">
                لا توجد أي منتجات أو قوالب مرتبطة بحسابك حالياً.
            </p>
            <button onClick={onLogout} className="w-full py-4 rounded-2xl font-black bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-all flex items-center justify-center gap-3">
                <LogOut size={18} /> تسجيل الخروج
            </button>
        </div>
    </div>
  );
}

function DashboardView({ user, blogs, theme, setTheme, onLogout, refreshData, addToast, removeToast }) {
  const [activeSection, setActiveSection] = useState('overview'); // overview, blogs, products
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Derive unique products for display
  const getUniqueProducts = () => {
    if (!user) return [];
    const uniqueProducts = [];
    const userProds = Array.isArray(user.products) ? user.products : [user.products];
    if (userProds) userProds.forEach(p => { 
        if (p && p.name && !uniqueProducts.find(up => up.name === p.name)) uniqueProducts.push(p); 
    });
    blogs.forEach(b => { 
        if (b.productData && b.productData.name && !uniqueProducts.find(up => up.name === b.productData.name)) uniqueProducts.push(b.productData); 
    });
    return uniqueProducts;
  };

  const uniqueProds = getUniqueProducts();
  const avatar = user.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name || 'User')}&background=38bdf8&color=fff`;

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Sidebar */}
      <aside className={`fixed md:relative top-0 right-0 h-full w-80 bg-[var(--bg-secondary)] border-l border-[var(--border)] p-8 flex flex-col z-50 transition-transform duration-300 md:translate-x-0 ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex items-center justify-between mb-16">
              <div className="flex items-center gap-4">
                  <div className="w-10 h-10 icon-gradient-blue rounded-xl flex items-center justify-center text-white font-black shadow-lg shadow-sky-500/20">P</div>
                  <h2 className="text-2xl font-black">Plugo AI</h2>
              </div>
              <button className="md:hidden" onClick={() => setSidebarOpen(false)}><X /></button>
          </div>
          <nav className="flex-grow space-y-3">
              <NavBtn active={activeSection === 'overview'} onClick={() => { setActiveSection('overview'); setSidebarOpen(false); }} icon={<LayoutDashboard />} label="نظرة عامة" />
              <NavBtn active={activeSection === 'blogs'} onClick={() => { setActiveSection('blogs'); setSidebarOpen(false); }} icon={<Globe />} label="التفعيلات" />
              <NavBtn active={activeSection === 'products'} onClick={() => { setActiveSection('products'); setSidebarOpen(false); }} icon={<Download />} label="التحميلات" />
          </nav>
          <div className="mt-auto pt-8 border-t border-[var(--border)]">
              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-[2rem] mb-6 overflow-hidden text-right">
                  <img src={avatar} className="w-10 h-10 rounded-full border-2 border-sky-500" alt="avatar" />
                  <div className="overflow-hidden">
                      <p className="text-sm font-black truncate">{user.name}</p>
                      <p className="text-[10px] opacity-70 truncate" dir="ltr">{user.email}</p>
                  </div>
              </div>
              <button onClick={onLogout} className="w-full flex items-center gap-3 p-4 text-red-400 font-black text-sm hover:bg-red-500/10 rounded-2xl transition-colors">
                  <LogOut size={18} /> خروج
              </button>
          </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-6 md:p-12 overflow-y-auto w-full">
          <header className="flex justify-between items-center mb-12">
              <div className="text-right">
                  <h3 className="text-3xl font-black">لوحة التحكم</h3>
                  <p className="text-slate-500 font-bold">مرحباً بك، {user.name.split(' ')[0]} 👋</p>
              </div>
              <div className="flex gap-3">
                 <button onClick={() => setSidebarOpen(true)} className="md:hidden p-4 rounded-2xl border border-[var(--border)] glass-card">
                    <LayoutDashboard className="text-sky-400" />
                 </button>
                 <button onClick={() => setTheme(prev => prev === 'dark' ? 'light' : 'dark')} className="p-4 rounded-2xl border border-[var(--border)] glass-card hover:bg-[var(--accent)]/10 transition-colors">
                    {theme === 'dark' ? <Sun className="text-sky-400" /> : <Moon className="text-sky-400" />}
                 </button>
              </div>
          </header>

          {activeSection === 'overview' && (
             <OverviewSection user={user} blogs={blogs} uniqueProds={uniqueProds} addToast={addToast} />
          )}
          {activeSection === 'blogs' && (
             <BlogsSection user={user} blogs={blogs} addToast={addToast} removeToast={removeToast} refreshData={refreshData} />
          )}
          {activeSection === 'products' && (
             <ProductsSection uniqueProds={uniqueProds} addToast={addToast} />
          )}
      </main>

      {/* Overlay for mobile sidebar */}
      {sidebarOpen && <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={() => setSidebarOpen(false)}></div>}
    </div>
  );
}

const NavBtn = ({ active, onClick, icon, label }) => (
  <button 
    onClick={onClick} 
    className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl font-bold transition-all ${active ? 'active-nav' : 'hover:bg-white/5'}`}
  >
    {React.cloneElement(icon, { size: 20 })} {label}
  </button>
);

// ==========================================
// Sections
// ==========================================

function OverviewSection({ user, blogs, uniqueProds, addToast }) {
    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
        addToast("📋 تم نسخ كود الترخيص!");
    };

    return (
        <section className="animate-fade-up">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <StatCard 
                    icon={<ShieldCheck size={28} />} 
                    gradient="icon-gradient-blue" 
                    shadow="shadow-sky-500/20"
                    label="التراخيص المستخدمة" 
                    value={`${blogs.length} / ${user.maxActivations}`} 
                />
                <StatCard 
                    icon={<div className="w-7 h-7 bg-white/20 rounded-md"></div>} 
                    customIcon={<ShoppingCart size={28} />}
                    gradient="icon-gradient-purple" 
                    shadow="shadow-purple-500/20"
                    label="قوالبك المتاحة" 
                    value={uniqueProds.length} 
                />
                <StatCard 
                    icon={<Globe size={28} />} 
                    gradient="icon-gradient-emerald" 
                    shadow="shadow-emerald-500/20"
                    label="إجمالي المدونات" 
                    value={blogs.length} 
                />
            </div>
            <h4 className="text-xl font-black mb-6 text-right">الأنشطة الأخيرة</h4>
            <div className="glass-card rounded-[2.5rem] overflow-hidden">
                {blogs.length === 0 ? (
                    <div className="p-20 text-center opacity-50 italic">لا توجد أنشطة مسجلة حالياً.</div>
                ) : (
                    [...blogs].reverse().map((b, i) => (
                        <div key={i} className="p-6 flex flex-col md:flex-row items-center justify-between border-b border-[var(--border)] last:border-0 hover:bg-white/[0.02] transition-colors">
                            <div className="flex items-center gap-4 mb-4 md:mb-0 w-full md:w-auto">
                                <div className="w-12 h-12 bg-sky-500/10 rounded-xl flex items-center justify-center text-sky-400 shrink-0">
                                    <Key />
                                </div>
                                <div className="text-right overflow-hidden">
                                    <p className="font-black truncate">{b.blogname}</p>
                                    <p className="text-[10px] text-emerald-400 font-bold">تفعيل نشط</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 w-full md:w-auto justify-end">
                                <p className="font-black text-sky-400 font-mono text-sm sm:text-base" dir="ltr">{b.licenseCode}</p>
                                <button onClick={() => copyToClipboard(b.licenseCode)} className="p-3 bg-sky-500 text-white rounded-xl shadow-lg hover:scale-105 transition-transform">
                                    <Copy size={18} />
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </section>
    );
}

function StatCard({ icon, customIcon, gradient, shadow, label, value }) {
    return (
        <div className="glass-card p-8 rounded-[2.5rem] flex items-center gap-6 group hover:-translate-y-1 transition-transform">
            <div className={`w-16 h-16 ${gradient} rounded-2xl flex items-center justify-center text-white shadow-xl ${shadow}`}>
                {customIcon || icon}
            </div>
            <div className="text-right">
                <p className="text-[var(--text-dim)] text-xs font-black mb-1">{label}</p>
                <h5 className="text-3xl font-black">{value}</h5>
            </div>
        </div>
    );
}

function BlogsSection({ user, blogs, addToast, removeToast, refreshData }) {
    const [blogIdInput, setBlogIdInput] = useState('');
    const [searchResult, setSearchResult] = useState(null);

    const handleSearchBlog = async () => {
        if (!blogIdInput) return addToast("⚠️ أدخل معرف المدونة أولاً", "error");
        
        const isExists = blogs.some(b => b.blogid.toString() === blogIdInput);
        if (isExists) return addToast("🚫 هذه المدونة مسجلة مسبقاً في حسابك.", "error");

        const toastId = addToast("🔍 جاري التحقق من هوية المدونة...", "loading");
        
        try {
            const data = await fetchBloggerInfoJSONP(blogIdInput);
            const name = data.feed.title.$t;
            const url = data.feed.link.find(l => l.rel === 'alternate')?.href;
            
            setSearchResult({ blogid: blogIdInput, blogname: name, blogurl: url });
            removeToast(toastId);
            addToast("✅ تم العثور على المدونة");
        } catch (e) {
            removeToast(toastId);
            addToast("❌ لم يتم العثور على المدونة، تأكد من المعرف", "error");
            setSearchResult(null);
        }
    };

    const handleRegisterBlog = async () => {
        if (!searchResult) return;
        if (blogs.length >= user.maxActivations) return addToast("⚠️ عذراً، لقد تجاوزت الحد الأقصى للتراخيص المسموحة.", "error");
        
        const toastId = addToast("🚀 جاري التحقق والتفعيل...", "loading");
        const license = `PLUGO-${Math.random().toString(36).substr(2, 4).toUpperCase()}-${Math.random().toString(36).substr(2, 4).toUpperCase()}`;
        const session = JSON.parse(localStorage.getItem('plugo_user_session'));

        const payload = { 
            action: 'add', 
            ...searchResult, 
            licenseCode: license, 
            userName: user.name, 
            userEmail: session.email 
        };

        try {
            const response = await fetch(GOOGLE_SCRIPT_URL, { method: 'POST', body: JSON.stringify(payload) });
            const result = await response.json();
            removeToast(toastId);

            if (result.result === 'success') {
                addToast("🎉 تم التفعيل بنجاح!");
                setSearchResult(null);
                setBlogIdInput('');
                setTimeout(refreshData, 1000);
            } else {
                addToast(result.message || "❌ فشل التفعيل", "error");
            }
        } catch (e) {
            removeToast(toastId);
            addToast("❌ فشل الاتصال بالخادم", "error");
        }
    };

    const handleDeleteBlog = async (blogid) => {
        if (!window.confirm("هل أنت متأكد من رغبتك في إلغاء تفعيل هذه المدونة؟")) return;
        
        const session = JSON.parse(localStorage.getItem('plugo_user_session'));
        const toastId = addToast("🗑️ جاري معالجة طلب الإلغاء...", "loading");
        
        try {
            const response = await fetch(GOOGLE_SCRIPT_URL, { method: 'POST', body: JSON.stringify({ action: 'delete', blogid: blogid, userEmail: session.email }) });
            const result = await response.json();
            removeToast(toastId);
            
            if (result.result === 'success') {
                addToast("✅ تم إلغاء التفعيل بنجاح");
                setTimeout(refreshData, 1000);
            } else {
                addToast("❌ حدث خطأ أثناء الحذف", "error");
            }
        } catch (e) {
            removeToast(toastId);
            addToast("❌ حدث خطأ أثناء محاولة الحذف", "error");
        }
    };

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
        addToast("📋 تم نسخ كود الترخيص!");
    };

    return (
        <section className="animate-fade-up text-right">
            <div className="glass-card rounded-[3rem] p-8 md:p-10 mb-8">
                <h4 className="text-2xl font-black mb-8">تفعيل قالب جديد</h4>
                <div className="flex flex-col lg:flex-row gap-5">
                    <input 
                        value={blogIdInput}
                        onChange={(e) => setBlogIdInput(e.target.value)}
                        type="text" 
                        placeholder="Blog ID (مثال: 14393793...)" 
                        className="flex-grow p-5 rounded-2xl font-bold text-right bg-white/5 border border-[var(--border)] text-[var(--text-main)] outline-none focus:border-[var(--accent)]" 
                        dir="ltr"
                    />
                    <button onClick={handleSearchBlog} className="bg-sky-500 text-white px-10 py-5 rounded-2xl font-black hover:bg-sky-600 transition-colors shadow-lg shadow-sky-500/20 whitespace-nowrap">
                        تحقق من المدونة
                    </button>
                </div>

                {searchResult && (
                    <div className="mt-10 p-8 border-2 border-dashed border-sky-400/30 rounded-[2.5rem] bg-sky-400/5 animate-fade-up">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                            <div className="text-right">
                                <h5 className="text-2xl md:text-3xl font-black">{searchResult.blogname}</h5>
                                <p className="text-sky-400 font-bold mt-2 truncate max-w-xs" dir="ltr">{searchResult.blogurl}</p>
                            </div>
                            <button onClick={handleRegisterBlog} className="bg-[var(--text-main)] text-[var(--bg-primary)] px-12 py-5 rounded-2xl font-black shadow-xl hover:scale-105 transition-all whitespace-nowrap">
                                تفعيل الترخيص الآن
                            </button>
                        </div>
                    </div>
                )}
            </div>

            <div className="glass-card rounded-[3rem] p-8 md:p-10">
                <h4 className="text-xl font-black mb-8">مدوناتك المسجلة</h4>
                <div className="space-y-4">
                    {blogs.length === 0 ? (
                        <p className="text-center opacity-30 py-10">لا توجد تفعيلات مسجلة.</p>
                    ) : (
                        blogs.map(b => (
                            <div key={b.blogid} className="flex flex-col md:flex-row items-center justify-between p-4 bg-white/5 rounded-2xl border border-[var(--border)] animate-fade-up gap-4">
                                <div className="truncate text-right w-full md:w-auto">
                                    <p className="text-sm font-black">{b.blogname}</p>
                                    <p className="text-[10px] text-sky-400 font-mono mt-1" dir="ltr">{b.blogid}</p>
                                </div>
                                <div className="flex items-center gap-3 w-full md:w-auto justify-end">
                                    <div onClick={() => copyToClipboard(b.licenseCode)} className="code-badge text-[10px] sm:text-xs select-all">
                                        {b.licenseCode}
                                    </div>
                                    <button onClick={() => handleDeleteBlog(b.blogid)} className="p-2 text-red-400 hover:bg-red-400/10 rounded-lg transition-colors">
                                        <Trash2 size={16} />
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </section>
    );
}

function ProductsSection({ uniqueProds, addToast }) {
    const handleDownload = (link, version) => {
        if (!link || link === '#') return addToast("⚠️ عذراً، لا يوجد رابط تحميل حالياً.", "error");
        addToast(`📥 جاري فتح رابط تحميل الإصدار ${version}...`);
        setTimeout(() => window.open(link, '_blank'), 1000);
    };

    return (
        <section className="animate-fade-up">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {uniqueProds.length === 0 ? (
                    <p className="text-center opacity-30 py-20 col-span-full font-bold">لا توجد منتجات متاحة للتحميل حالياً.</p>
                ) : (
                    uniqueProds.map((p, idx) => (
                        <div key={idx} className="glass-card rounded-[2.5rem] overflow-hidden animate-fade-up flex flex-col">
                            <div className="relative h-48 overflow-hidden bg-slate-800">
                                {p.image && <img src={p.image} className="w-full h-full object-cover opacity-60 hover:opacity-80 transition-opacity duration-500" alt={p.name} />}
                                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-secondary)] to-transparent"></div>
                                <div className="absolute bottom-6 right-6 left-6 flex justify-between items-end">
                                    <h4 className="text-2xl font-black text-white drop-shadow-lg">{p.name}</h4>
                                    <span className="bg-emerald-500 text-white font-black px-3 py-1 rounded-lg text-[10px] shadow-lg">مفعّل</span>
                                </div>
                            </div>
                            <div className="p-8 text-right flex-grow flex flex-col">
                                <p className="text-[var(--text-dim)] mb-6 font-bold text-sm leading-relaxed flex-grow">
                                    {p.desc || 'لا يوجد وصف متاح.'}
                                </p>
                                <div className="flex flex-wrap gap-3 justify-end mt-auto">
                                    {(p.versions || ["V1.0.0"]).map(v => (
                                        <button key={v} onClick={() => handleDownload(p.link || '#', v)} className="bg-sky-500 hover:bg-sky-600 text-white px-5 py-3 rounded-xl transition-all font-black text-[11px] flex items-center gap-2 shadow-lg shadow-sky-500/20">
                                            <Download size={14} /> تحميل الإصدار {v}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </section>
    );
}