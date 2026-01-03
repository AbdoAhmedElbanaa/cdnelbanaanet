//<![CDATA[
/* ================================================================
   FILE NAME: plugo-core.js
   DESCRIPTION: الكود الأساسي لتشغيل القالب (يتم تحميله بعد التحقق)
   HOSTING: GitHub / Private CDN
   ================================================================
*/

(function($) {
    "use strict";

    console.log("%c✅ Plugo AI Security: License Verified Successfully.", "color:green; font-weight:bold; font-size:12px;");

    // ==========================================
    // Main Template Object | كائن القالب الرئيسي
    // ==========================================
    const PlugoTheme = {
        // دالة التهيئة (التشغيل)
        init: function() {
            this.removeSecurityLoader();
            this.initUI();
            this.initSliders();
            this.initDarkMode();
            console.log("🚀 Theme Core Activated.");
        },

        // إزالة أي عناصر حماية أو تحميل زائدة
        removeSecurityLoader: function() {
            // في حالة وجود شاشة تحميل من نظام الحماية، نتأكد من إزالتها
            const secLoader = document.getElementById('security-overlay');
            if(secLoader) secLoader.remove();
            document.body.style.overflow = 'auto'; // إعادة تفعيل التمرير
        },

        // تهيئة واجهة المستخدم
        initUI: function() {
            // مثال: إضافة كلاس للـ Body عند التحميل
            document.body.classList.add('plugo-loaded');
            
            // مثال: تفعيل القوائم المنسدلة
            const dropdowns = document.querySelectorAll('.dropdown-toggle');
            dropdowns.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    btn.nextElementSibling.classList.toggle('show');
                });
            });
        },

        // تهيئة السلايدر (مثال)
        initSliders: function() {
            console.log("📷 Sliders Initialized");
            // أكواد السلايدر هنا
        },

        // تهيئة الوضع الليلي (مثال)
        initDarkMode: function() {
            if(localStorage.getItem('theme') === 'dark') {
                document.documentElement.setAttribute('data-theme', 'dark');
            }
        }
    };

    // ==========================================
    // Execution | التنفيذ
    // ==========================================
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => PlugoTheme.init());
    } else {
        PlugoTheme.init();
    }

})(window.jQuery || window.Zepto || window); // دعم jQuery إذا كانت موجودة

//]]>
