//<![CDATA[
document.addEventListener('DOMContentLoaded', function() {
  buildDropdownMenu();

  // 2. القائمة الجانبية للهاتف (Mobile Menu + زر الإغلاق الداخلي)
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const mainNav = document.querySelector('.site-header .main-nav');
  
  if (mobileMenuToggle && mainNav) {
    const overlay = document.createElement('div');
    overlay.className = 'menu-overlay';
    document.body.appendChild(overlay);
    
    // ★★★ إنشاء زر الإغلاق الداخلي وإضافته ★★★
    const closeBtnInternal = document.createElement('button');
    closeBtnInternal.className = 'mobile-internal-close';
    closeBtnInternal.innerHTML = '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg>';
    mainNav.insertBefore(closeBtnInternal, mainNav.firstChild); // يضعه في أول القائمة
    
    const toggleMenu = () => {
      mobileMenuToggle.classList.toggle('is-open');
      document.body.classList.toggle('mobile-menu-open');
    };
    
    mobileMenuToggle.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', toggleMenu);
    
    // تشغيل زر الإغلاق الجديد
    closeBtnInternal.addEventListener('click', toggleMenu);
  }

  const htmlEl = document.documentElement;
  const themeToggle = document.getElementById('theme-toggle');
if(themeToggle){
    const savedTheme = localStorage.getItem('theme') || 'light';
    htmlEl.setAttribute('data-theme', savedTheme);
    themeToggle.addEventListener('click', () => { const newTheme = htmlEl.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'; htmlEl.setAttribute('data-theme', newTheme); localStorage.setItem('theme', newTheme); });
}
  
  const aiForm = document.getElementById('ai-form');
  
        // --- START: Code to integrate top bar into mobile menu (Transparent Version) ---
function integrateTopBarIntoMobileMenu() {
    const mobileNavList = document.querySelector('.main-nav .LinkList ul');
    const topBarPagesList = document.querySelector('.top-bar-pages .PageList ul');
    const topBarSocialList = document.querySelector('.top-bar-social .LinkList ul');

    if (!mobileNavList) return;

    // 1. الفاصل
    if (topBarPagesList || topBarSocialList) {
        const separator = document.createElement('li');
        separator.classList.add('cloned-for-mobile');
        separator.innerHTML = '<hr style="width: 90%; margin: 20px auto; border: 0; border-top: 1px solid var(--border-color); opacity: 0.6;">';
        mobileNavList.appendChild(separator);
    }

    // 2. الصفحات
    if (topBarPagesList) {
        const pageItems = topBarPagesList.querySelectorAll('li');
        pageItems.forEach(item => {
            const clonedItem = item.cloneNode(true);
            clonedItem.classList.add('cloned-for-mobile');
            clonedItem.style.width = '100%';
            mobileNavList.appendChild(clonedItem);
        });
    }

    // 3. أيقونات التواصل (تعديل الخلفية لتكون شفافة)
    if (topBarSocialList) {
        const socialContainer = document.createElement('li');
        socialContainer.className = 'mobile-social-links cloned-for-mobile';
        
        // تنسيق الحاوية
        socialContainer.style.cssText = 'display: flex; flex-wrap: wrap; gap: 15px; padding: 15px 10px; justify-content: center;';

        const socialLinks = topBarSocialList.querySelectorAll('a');
        socialLinks.forEach(link => {
            const clonedLink = link.cloneNode(true);
            
            // ★★★ هنا التعديل: background-color: transparent ★★★
            clonedLink.style.cssText = 'display: inline-flex; align-items: center; justify-content: center; width: 40px; height: 40px; border-radius: 50%; background-color: transparent; color: var(--text-secondary); transition: all 0.2s;';
            
            socialContainer.appendChild(clonedLink);
        });
        
        mobileNavList.appendChild(socialContainer);
    }
}
integrateTopBarIntoMobileMenu();
// --- END ---
  // --- START: Search Overlay Logic ---
  const searchToggleBtn = document.getElementById('search-toggle-btn');
  const searchCloseBtn = document.getElementById('search-close-btn');
  const searchOverlay = document.getElementById('search-overlay');
  const searchInput = searchOverlay.querySelector('input');

  if (searchToggleBtn && searchOverlay) {
    searchToggleBtn.addEventListener('click', () => {
      searchOverlay.classList.add('is-open');
      setTimeout(() => searchInput.focus(), 150);
    });

    searchCloseBtn.addEventListener('click', () => {
      searchOverlay.classList.remove('is-open');
    });

    searchOverlay.addEventListener('click', (e) => {
      if (e.target === searchOverlay) {
        searchOverlay.classList.remove('is-open');
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && searchOverlay.classList.contains('is-open')) {
        searchOverlay.classList.remove('is-open');
      }
    });
  }
  // --- END: Search Overlay Logic ---
// --- START: Circular Progress Back to Top Logic ---
      const scrollTopBtn = document.getElementById('progress-top');
      if (scrollTopBtn) {
        const progressCircle = document.querySelector('.progress-ring__circle');
        const radius = progressCircle.r.baseVal.value;
        const circumference = 2 * Math.PI * radius;

        progressCircle.style.strokeDasharray = `${circumference} ${circumference}`;
        progressCircle.style.strokeDashoffset = circumference;

        const setProgress = (percent) => {
            const offset = circumference - (percent / 100) * circumference;
            progressCircle.style.strokeDashoffset = offset;
        }

        const handleScroll = () => {
            if (window.scrollY > 300) {
                scrollTopBtn.classList.add('show');
            } else {
                scrollTopBtn.classList.remove('show');
            }

            const docHeight = document.documentElement.scrollHeight;
            const clientHeight = document.documentElement.clientHeight;
            const scrollableHeight = docHeight - clientHeight;
            const scrollPercent = (window.scrollY / scrollableHeight) * 100;
            
            setProgress(scrollPercent);
        };

        const scrollToTop = () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        };

        window.addEventListener('scroll', handleScroll);
        scrollTopBtn.addEventListener('click', scrollToTop);
      }
  // --- END: Circular Progress Back to Top Logic ---
// --- START: Frosted Glass Colored Labels Logic ---
  const colorizeLabels = () => {
    const labels = document.querySelectorAll('.post-card-label[data-label], .list-view-label');
    if (labels.length === 0) return;

    const colorPalette = [
        { rgb: '225, 29, 72', text: '#fff' }, { rgb: '219, 39, 119', text: '#fff' }, { rgb: '147, 51, 234', text: '#fff' },
        { rgb: '109, 40, 217', text: '#fff' }, { rgb: '79, 70, 229', text: '#fff' }, { rgb: '37, 99, 235', text: '#fff' },
        { rgb: '14, 165, 233', text: '#f0f9ff' }, { rgb: '8, 145, 178', text: '#fff' }, { rgb: '13, 148, 136', text: '#fff' },
        { rgb: '5, 150, 105', text: '#fff' }, { rgb: '22, 163, 74', text: '#fff' }, { rgb: '101, 163, 13', text: '#fff' },
        { rgb: '202, 138, 4', text: '#fff' }, { rgb: '217, 119, 6', text: '#fff' }, { rgb: '234, 88, 12', text: '#fff' }
    ];

    labels.forEach(label => {
        const randomIndex = Math.floor(Math.random() * colorPalette.length);
        const randomColor = colorPalette[randomIndex];
        label.style.setProperty('--label-bg-rgb', randomColor.rgb);
        label.style.color = randomColor.text;
    });
  };
  
  colorizeLabels();
  // --- END: Frosted Glass Colored Labels Logic ---
// --- Footer Back to Top Button Logic ---
const footerScrollBtn = document.getElementById('footer-back-to-top');
if (footerScrollBtn) {
    footerScrollBtn.addEventListener('click', () => { window.scrollTo({ top: 0, behavior: 'smooth' }); });
}
// --- Smart Copyright Logic ---
const customCopyrightSource = document.getElementById('custom-copyright-source');
const copyrightDisplayTarget = document.getElementById('copyright-display-target');
if (customCopyrightSource && copyrightDisplayTarget) {
  const customText = customCopyrightSource.innerHTML.trim();
  if (customText) {
    copyrightDisplayTarget.innerHTML = customText;
  }
}
// --- END ---
});

// --- فاصل للكود المدمج ---
;
// Extreme Lazy Load - v3.3 (Updated for Top Footer)
const lazyLoader = () => {
    // 1. Load Main Stylesheet
    const mainStylesheet = document.getElementById('main-stylesheet');
    if (mainStylesheet) {
        mainStylesheet.media = 'all';
    }

    // 2. Load Google Fonts
    const googleFonts = document.getElementById('google-fonts-lazy');
    if (googleFonts && googleFonts.dataset.href) {
        googleFonts.href = googleFonts.dataset.href;
    }

    // 3. Show Main Content & Sidebar
    const mainContent = document.getElementById('lazy-load-content');
    if (mainContent) mainContent.style.visibility = 'visible';
    
    const sidebarContent = document.getElementById('the-one-sidebar');
    if (sidebarContent) sidebarContent.style.visibility = 'visible';

    // 4. Show Footer Areas (Main & Intro) - ★★★ التعديل هنا ★★★
    const introContent = document.getElementById('lazy-load-intro'); // الفوتر العلوي
    if (introContent) introContent.style.visibility = 'visible';

    const footerContent = document.getElementById('lazy-load-footer'); // الفوتر السفلي
    if (footerContent) footerContent.style.visibility = 'visible';
    
    // 5. Show Real Logo
    const logoDataSource = document.getElementById('logo-data-source');
    const logoContainer = document.getElementById('logo-container');
    const headerWidget = document.getElementById('Header1');
    if (logoDataSource && logoContainer && headerWidget) {
        const imgSrc = logoDataSource.getAttribute('data-img-src');
        if (imgSrc) {
            const imgWidth = logoDataSource.getAttribute('data-img-width');
            const imgHeight = logoDataSource.getAttribute('data-img-height');
            const imgAlt = logoDataSource.getAttribute('data-img-alt');
            const logoImageHTML = `<a href="${logoContainer.querySelector('a').href}"><img src="${imgSrc}" width="${imgWidth}" height="${imgHeight}" alt="${imgAlt}" style="display:block; max-width:100%; height:auto;"/></a>`;
            logoContainer.innerHTML = logoImageHTML;
            headerWidget.style.backgroundColor = 'transparent';
        }
    }
    
    // 6. Load AdSense Script
    const sourceContainer = document.getElementById('lazy-adsense-source');
    if (sourceContainer) {
        const userScript = sourceContainer.querySelector('script[src*="adsbygoogle.js"]');
        if (userScript) {
            const newScript = document.createElement('script');
            newScript.src = userScript.src;
            if (userScript.getAttribute('data-ad-client')) {
              newScript.setAttribute('data-ad-client', userScript.getAttribute('data-ad-client'));
            }
            newScript.async = true;
            if (userScript.getAttribute('crossorigin')) {
              newScript.setAttribute('crossorigin', userScript.getAttribute('crossorigin'));
            }
            document.head.appendChild(newScript);
        }
    }

    // 7. Sticky Sidebar (Keep inside Lazy Load)
    if (typeof initStickySidebar === 'function') {
        initStickySidebar();
    }

    // 8. Remove Listeners
    ['scroll', 'mousemove', 'mousedown', 'touchstart', 'keydown'].forEach(evt => 
        window.removeEventListener(evt, lazyLoader, { passive: true })
    );
};

// Check for bots
const isBot = /bot|google|baidu|bing|msn|duckduckgo|teoma|slurp|yandex/i.test(navigator.userAgent);

if (isBot) {
    lazyLoader();
} else {
    ['scroll', 'mousemove', 'mousedown', 'touchstart', 'keydown'].forEach(evt => 
        window.addEventListener(evt, lazyLoader, { passive: true, once: true })
    );
}

// --- فاصل للكود المدمج ---
;
(function() {
        // انتظر ثانية واحدة للتأكد من تحميل كل شيء
        setTimeout(function() {
            // 1. ابحث عن المصدر
            var source = document.getElementById('in-article-ad-source-data');
            if (!source || !source.innerHTML.trim()) return;

            // 2. ابحث عن الهدف
            var target = document.querySelector('.single-post-body');
            if (!target) return;

            // 3. ابحث عن الفقرات
            var paragraphs = target.getElementsByTagName('p');
            if (paragraphs.length < 3) return;

            // 4. قم بالزرع
            var adWrapper = document.createElement('div');
            adWrapper.className = 'post-ad post-middle-ad';
            adWrapper.innerHTML = source.innerHTML;
            paragraphs[1].insertAdjacentElement('afterend', adWrapper);

        }, 1000);
    })();

// --- فاصل للكود المدمج ---
;
(function() {
    // انتظر ثانية واحدة للتأكد من تحميل كل شيء
    setTimeout(function() {
        // 1. ابحث عن المصدر
        var source = document.getElementById('below-post-ad-source-data');
        if (!source || !source.innerHTML.trim()) return;

        // 2. ابحث عن الهدف (حاوية أزرار المشاركة)
        var target = document.querySelector('.post-share-container');
        if (!target) return;

        // 3. قم بالزرع (قبل أزرار المشاركة)
        var adWrapper = document.createElement('div');
        adWrapper.className = 'post-ad post-bottom-ad';
        adWrapper.innerHTML = source.innerHTML;
        target.parentNode.insertBefore(adWrapper, target);

    }, 1000);
})();

// --- فاصل للكود المدمج ---
;
(function() {
    setTimeout(function() {
        // 1. ابحث عن المصدر، وتوقف إذا كان فارغًا
        var source = document.getElementById('in-feed-ad-source-data');
        if (!source || !source.innerHTML.trim()) {
            return; // إذا لا يوجد إعلان، لا تفعل أي شيء على الإطلاق
        }
        var adHTML = source.innerHTML;

        // 2. ابحث عن كل كروت المقالات في الصفحة
        var postCards = document.querySelectorAll('.blog-posts-container .post-card');
        
        // 3. قم بالمرور على المقالات واحقن الإعلان في المكان الصحيح
        // سنبدأ العد من 1
        for (var i = 1; i <= postCards.length; i++) {
            // إذا كان رقم المقال يقبل القسمة على 3
            if (i % 3 === 0) {
                // ابحث عن المقال الذي سنضيف الإعلان بعده
                var targetPost = postCards[i - 1]; // (لأن العد يبدأ من 0 في البرمجة)
                
                if (targetPost) {
                    // أنشئ حاوية الإعلان
                    var adContainer = document.createElement('div');
                    adContainer.className = 'post-card';
                    adContainer.innerHTML = adHTML;
                    
                    // احقن حاوية الإعلان بعد المقال المستهدف
                    targetPost.insertAdjacentElement('afterend', adContainer);
                }
            }
        }

    }, 500);
})();

// --- فاصل للكود المدمج ---
;
(function() {
  if (document.querySelector("#HTML126")) {
    setTimeout(function() {
        var tocContainer = document.getElementById('post-toc-container');
        var postBody = document.querySelector('.single-post-body');
        if (!tocContainer || !postBody) return;

        // التعديل هنا: البحث عن h1, h2, h3, h4 لضمان تغطية كل المستويات
        var headings = postBody.querySelectorAll('h1, h2, h3, h4');
        if (headings.length < 2) return;
        
        var tocHTML = `
            <div class="toc-container">
                <div class="toc-title-container">
                    <svg viewBox="0 0 20 20" style="width:20px;height:20px;fill:var(--text-secondary);"><path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464v3.464a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path></svg>
                    <h3 class="toc-title">في هذه المقالة</h3>
                </div>
                <div class="toc-list-wrapper">
                    <ul class="toc-list"></ul>
                </div>
            </div>
        `;
        tocContainer.innerHTML = tocHTML;
        var listElement = tocContainer.querySelector(".toc-list");
        
        var headingCount = 0;
        headings.forEach(function(heading) {
            // استخراج مستوى العنوان (1، 2، 3، 4)
            var levelChar = heading.tagName.charAt(1);
            
            var id = heading.id || 'toc-heading-' + headingCount;
            heading.id = id;
            
            var listItem = document.createElement('li');
            
            // إضافة الكلاس المناسب ليتم تطبيق CSS السلم عليه
            listItem.className = 'toc-level-' + levelChar;
            
            // وضع الرابط
            listItem.innerHTML = '<a href="#' + id + '">' + heading.textContent + '</a>';
            listElement.appendChild(listItem);
            headingCount++;
        });

        // تشغيل زر الفتح والإغلاق
        var titleContainer = tocContainer.querySelector('.toc-title-container');
        var listWrapper = tocContainer.querySelector('.toc-list-wrapper');
        const fullHeight = listWrapper.scrollHeight;
        listWrapper.style.maxHeight = fullHeight + "px"; // مفتوح افتراضياً

        titleContainer.addEventListener('click', function() {
            titleContainer.classList.toggle('collapsed');
            if (listWrapper.style.maxHeight !== '0px') {
                listWrapper.style.maxHeight = '0px';
            } else {
                listWrapper.style.maxHeight = fullHeight + "px";
            }
        });
    }, 500);
  }
})();

// --- فاصل للكود المدمج ---
;
(function() {
    // انتظر قليلاً لضمان تحميل كل محتوى المقال
    setTimeout(function() {
        var postBody = document.querySelector('.single-post-body');
        var readingTimeTarget = document.getElementById('reading-time-meta');

        if (!postBody || !readingTimeTarget) {
            return;
        }

        // إزالة أي أكواد برمجية لتجنب حسابها
        var cleanText = postBody.innerText || postBody.textContent || "";
        
        // حساب عدد الكلمات
        var wordCount = cleanText.trim().split(/\s+/).length;
        
        // متوسط سرعة القراءة (كلمة في الدقيقة)
        var wordsPerMinute = 200;
        
        // حساب وقت القراءة بالدقائق
        var readingTime = Math.ceil(wordCount / wordsPerMinute);

        // لا تظهر العداد إذا كان الوقت أقل من دقيقة
        if (readingTime < 1) {
            return;
        }

        // تجهيز النص النهائي مع أيقونة SVG
        var iconSVG = '<svg fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.414-1.415L11 9.586V6z" clip-rule="evenodd"></path></svg>';
        var resultText = '| ' + iconSVG + '<span>' + readingTime + ' دقائق قراءة' + '</span>';
        
        readingTimeTarget.innerHTML = resultText;

    }, 500);
})();

// --- فاصل للكود المدمج ---
;
// <![CDATA[
(function() {
    const toggleWidget = document.getElementById('HTML127');
    if (!toggleWidget) return;

    const postBody = document.querySelector('.single-post-body');
    const postLabels = document.querySelectorAll('.post-labels a');

    if (!postBody || postLabels.length === 0) return;

    const numberOfPosts = 3;
    const injectionPointParagraph = 4;
    const currentPostId = '<data:post.id/>';
    const firstLabel = encodeURIComponent(postLabels[0].textContent.trim());
    const feedUrl = `/feeds/posts/default/-/${firstLabel}?alt=json-in-script&max-results=${numberOfPosts + 1}`;
    
    function timeAgo(isoDate) {
        const date = new Date(isoDate);
        const seconds = Math.floor((new Date() - date) / 1000);
        let interval = seconds / 31536000;
        if (interval > 1) return "منذ " + Math.floor(interval) + (Math.floor(interval) > 2 ? " سنوات" : " سنة");
        interval = seconds / 2592000;
        if (interval > 1) return "منذ " + Math.floor(interval) + (Math.floor(interval) > 2 ? " أشهر" : " شهر");
        interval = seconds / 86400;
        if (interval > 1) return "منذ " + Math.floor(interval) + (Math.floor(interval) > 2 ? " أيام" : " يوم");
        interval = seconds / 3600;
        if (interval > 1) return "منذ " + Math.floor(interval) + (Math.floor(interval) > 2 ? " ساعات" : " ساعة");
        interval = seconds / 60;
        if (interval > 1) return "منذ " + Math.floor(interval) + (Math.floor(interval) > 2 ? " دقائق" : " دقيقة");
        return "منذ لحظات";
    }

    window.injectMidPostRelated = function(json) {
        let postsHtml = '';
        let postsAdded = 0;
        const clockIcon = '<svg viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.414-1.415L11 9.586V6z" clip-rule="evenodd"></path></svg>';

        if (json.feed && json.feed.entry) {
            for (const entry of json.feed.entry) {
                if (postsAdded >= numberOfPosts) break;
                
                const entryId = entry.id.$t.split('.post-')[1];
                if (entryId === currentPostId) continue;

                let postUrl = '';
                for (const link of entry.link) {
                    if (link.rel === 'alternate') {
                        postUrl = link.href;
                        break;
                    }
                }

                const postTitle = entry.title.$t;
                const postDate = timeAgo(entry.published.$t);

                postsHtml += `
                    <li class="mpr-item">
                        <a class="mpr-link" href="${postUrl}" title="${postTitle}">
                            <div class="mpr-meta">${clockIcon} ${postDate}</div>
                            <div class="mpr-post-title">${postTitle}</div>
                        </a>
                    </li>
                `;
                postsAdded++;
            }
        }

        if (postsAdded > 0) {
    const wrapper = document.createElement('div');
    wrapper.className = 'mid-post-related-wrapper';
    
    // الهيكل الجديد (زر نصي)
    wrapper.innerHTML = `
        <div class="mpr-header">
            <span class="mpr-title-text">قد يعجبك أيضاً</span>
            <button class="mpr-toggle-text-btn">إخفاء</button>
        </div>
        <ul class="mpr-list">${postsHtml}</ul>
    `;

    // تشغيل الزر وتغيير الكلمة
    const toggleBtn = wrapper.querySelector('.mpr-toggle-text-btn');
    toggleBtn.addEventListener('click', function() {
        wrapper.classList.toggle('mpr-wrapper-closed');
        if (wrapper.classList.contains('mpr-wrapper-closed')) {
            this.textContent = 'إظهار';
        } else {
            this.textContent = 'إخفاء';
        }
    });

    const paragraphs = postBody.querySelectorAll('p, div.separator, blockquote, h2, h3, h4');
    if (paragraphs.length > injectionPointParagraph) {
        paragraphs[injectionPointParagraph].insertAdjacentElement('afterend', wrapper);
    }
}
    };

    const script = document.createElement('script');
    script.src = `${feedUrl}&callback=injectMidPostRelated`;
    document.body.appendChild(script);

})();
//

// --- فاصل للكود المدمج ---
;
document.addEventListener("DOMContentLoaded", function() {
    // نبحث عن كل المقالات الموجودة داخل أداة المشاركات الشائعة
    const popularPostsItems = document.querySelectorAll('#PopularPosts1 .item-content');

    if (popularPostsItems.length === 0) {
        return; // إذا لم نجد الأداة، نتوقف
    }

    // أيقونة الساعة التي سنضيفها بجانب التاريخ
    const clockIconSVG = '<svg viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.414-1.415L11 9.586V6z" clip-rule="evenodd"></path></svg>';

    // نقوم بالمرور على كل مقال على حدة
    popularPostsItems.forEach(item => {
        const linkElement = item.querySelector('a');
        if (!linkElement) return;

        // نستخرج مسار المقال من الرابط الخاص به
        const postPath = new URL(linkElement.href).pathname;
        
        // نطلب من بلوجر بيانات هذا المقال تحديداً
        fetch(`/feeds/posts/default?alt=json&path=${postPath}`)
            .then(response => response.json())
            .then(data => {
                // نتأكد أن بلوجر أرسل لنا بيانات المقال
                if (data.feed && data.feed.entry && data.feed.entry[0]) {
                    const postEntry = data.feed.entry[0];
                    
                    // نستخرج تاريخ النشر من البيانات
                    const publishedDateISO = postEntry.published.$t;
                    
                    // نقوم بتحويل التاريخ إلى صيغة عربية جميلة (مثال: ٣١ أكتوبر ٢٠٢٢)
                    const date = new Date(publishedDateISO);
                    const formattedDate = date.toLocaleDateString('ar-EG', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric'
                    });

                    // ننشئ عنصر التاريخ الجديد
                    const dateElement = document.createElement('div');
                    dateElement.className = 'pp-post-date';
                    dateElement.innerHTML = clockIconSVG + formattedDate;

                    // نضع عنصر التاريخ الجديد قبل عنوان المقال مباشرة
                    item.prepend(dateElement);
                }
            })
            .catch(error => console.error('Error fetching post date:', error));
    });
});

// --- فاصل للكود المدمج ---
;
// ★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★
// ★★★★★★★★★★★ الكود الكامل والنهائي لكل الأقسام - انسخ كل ده ★★★★★★★★★★★
// ★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★

// --------------------------------------------------
// -- دوال مساعدة (Helper Functions)
// --------------------------------------------------

// دالة لبناء كارت مقال كبير في أقسام المجلة (Layout 1)
function buildPostCard(postData, label) {
    return `
        <a href="${postData.url}">
            <img src="${postData.imageUrl}" alt="${postData.title}" loading="lazy"/>
            <div class="magazine-post-content">
                <span class="magazine-post-label">${label}</span>
                <h3 class="magazine-post-title">${postData.title}</h3>
                <div class="magazine-post-meta">بواسطة ${postData.author}</div>
            </div>
        </a>`;
}

// دالة مساعدة جديدة لبناء مقال في شكل الشبكة (Magazine 3)
function buildGridPostItem(postData) {
    const clockIcon = '<svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.414-1.415L11 9.586V6z" clip-rule="evenodd"></path></svg>';
    return `
        <a href="${postData.url}" class="grid-post-item">
          <div class="grid-post-text">
            <div class="grid-post-meta">${clockIcon} ${postData.date}</div>
            <h3 class="grid-post-title">${postData.title}</h3>
          </div>
          <img class="grid-post-image" src="${postData.imageUrl}" alt="${postData.title}" loading="lazy"/>
        </a>
    `;
}


// --------------------------------------------------
// -- دوال بناء الأقسام (Section Builder Functions)
// --------------------------------------------------

// الدالة الخاصة بأقسام المجلة (Layout 1 و Grid)
async function buildMagazineSection(sectionId, layout) {
    const section = document.querySelector(`#${sectionId}`);
    if (!section) return;
    const widget = section.querySelector('.widget.HTML');
    if (!widget) return;
    const widgetTitleElement = widget.querySelector('.widget-title, .title');
    if (!widgetTitleElement) return;
    const categoryName = widgetTitleElement.textContent.trim();
    if (!categoryName) return;

    // إعادة بناء العنوان بالشكل الاحترافي
    widgetTitleElement.innerHTML = `<h2 class="hs-title-text">${categoryName}</h2><span class="hs-title-line"></span><a href="/search/label/${encodeURIComponent(categoryName)}" class="hs-title-more-btn">عرض المزيد</a>`;
    widgetTitleElement.className = '';
    widgetTitleElement.classList.add('widget-title', 'hs-title-wrapper');

    const widgetContent = widget.querySelector('.widget-content');
    widgetContent.innerHTML = '<p>جاري تحميل المقالات...</p>';

    try {
        const response = await fetch(`/feeds/posts/default/-/${encodeURIComponent(categoryName)}?alt=json&max-results=9`); // زاد العدد ليناسب الشبكة
        const data = await response.json();
        if (!data.feed || !data.feed.entry || data.feed.entry.length === 0) {
            widgetContent.innerHTML = `<p>لم يتم العثور على مقالات في هذا التصنيف.</p>`;
            return;
        }

        const posts = data.feed.entry;
        let html = '';
        
        // بناء التصميم حسب النوع المطلوب
        if (layout === 'layout-1') {
            if (posts.length < 5) {
                widgetContent.innerHTML = `<p>يتطلب هذا الشكل 5 مقالات على الأقل.</p>`;
                return;
            }
            const getPostData = (post) => {
                const title = post.title.$t;
                const url = post.link.find(link => link.rel === 'alternate').href;
                const author = post.author[0].name.$t;
                let imageUrl = 'https://i.imgur.com/R9J34z6.png';
                if (post.media$thumbnail && post.media$thumbnail.url) {
                    imageUrl = post.media$thumbnail.url.replace(/\/(s\d+|w\d+-h\d+-c|s\d+-w\d+-h\d+-c)\//, '/w720-h450-c/');
                } else if (post.content && post.content.$t) {
                    const match = post.content.$t.match(/<img[^>]+src="([^">]+)"/);
                    if (match && match[1]) { imageUrl = match[1]; }
                }
                return { title, url, imageUrl, author };
            };
            const postDataArray = posts.slice(0, 5).map(getPostData);
            html = `<div class="magazine-grid magazine-layout-1-grid"><div class="magazine-post large">${buildPostCard(postDataArray[0], categoryName)}</div><div class="magazine-post">${buildPostCard(postDataArray[1], categoryName)}</div><div class="magazine-post">${buildPostCard(postDataArray[2], categoryName)}</div><div class="magazine-post">${buildPostCard(postDataArray[3], categoryName)}</div><div class="magazine-post">${buildPostCard(postDataArray[4], categoryName)}</div></div>`;
        
        } else if (layout === 'layout-grid') {
             // الكود الجديد (الصح) مع الخطة البديلة
const getGridPostData = (post) => {
    const title = post.title.$t;
    const url = post.link.find(link => link.rel === 'alternate').href;
    let imageUrl = 'https://i.imgur.com/R9J34z6.png'; // الصورة الافتراضية

    // ★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★
    // ★★★★★★★★★★★ هذا هو الكود المنسوخ من الدوال اللي شغالة ★★★★★★★★★★★
    // ★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★
    // الطريقة الأولى: جرب الصورة المصغرة الرسمية
    if (post.media$thumbnail && post.media$thumbnail.url) {
        imageUrl = post.media$thumbnail.url.replace(/\/(s\d+|w\d+-h\d+-c|s\d+-w\d+-h\d+-c)\//, '/s200-c/');
    } 
    // الخطة البديلة: لو الأولى فشلت، دور على أول صورة جوه المقال نفسه
    else if (post.content && post.content.$t) {
        const match = post.content.$t.match(/<img[^>]+src="([^">]+)"/);
        if (match && match[1]) {
            imageUrl = match[1];
        }
    }
    // ★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★

    const timeAgo = (isoDate) => {
        const seconds = Math.floor((new Date() - new Date(isoDate)) / 1000);
        let interval = seconds / 31536000; if (interval > 1) return `منذ ${Math.floor(interval)} سنوات`;
        interval = seconds / 2592000; if (interval > 1) return `منذ ${Math.floor(interval)} أشهر`;
        interval = seconds / 86400; if (interval > 1) return `منذ ${Math.floor(interval)} أيام`;
        return 'اليوم';
    };
    const date = timeAgo(post.published.$t);
    return { title, url, imageUrl, date };
};
            html = '<div class="magazine-grid-layout">';
            for (const post of posts) {
                html += buildGridPostItem(getGridPostData(post));
            }
            html += '</div>';
        }
        
        widgetContent.innerHTML = html;
    } catch (error) {
        widgetContent.innerHTML = '<p>حدث خطأ أثناء تحميل المقالات.</p>';
        console.error('Error fetching magazine section:', error);
    }
}

// الدالة الجديدة الخاصة بالأعمدة الثلاثة
async function buildMagazineColumn(sectionId) {
    const section = document.querySelector(`#${sectionId}`);
    if (!section) return;
    const widget = section.querySelector('.widget.HTML');
    if (!widget) return;
    const widgetTitleElement = widget.querySelector('.widget-title, .title');
    if (!widgetTitleElement) return;
    const categoryName = widgetTitleElement.textContent.trim();
    if (!categoryName) {
        if (widget.parentElement) widget.parentElement.style.display = 'none';
        return;
    }
    
    widgetTitleElement.innerHTML = `<h2 class="hs-title-text">${categoryName}</h2><span class="hs-title-line"></span><a href="/search/label/${encodeURIComponent(categoryName)}" class="hs-title-more-btn">عرض المزيد</a>`;
    widgetTitleElement.className = '';
    widgetTitleElement.classList.add('widget-title', 'hs-title-wrapper');

    const widgetContent = widget.querySelector('.widget-content');
    widgetContent.innerHTML = '<p>جاري التحميل...</p>';

    try {
        const response = await fetch(`/feeds/posts/default/-/${encodeURIComponent(categoryName)}?alt=json&max-results=4`);
        const data = await response.json();

        if (!data.feed || !data.feed.entry || data.feed.entry.length < 4) {
            widgetContent.innerHTML = `<p style="font-size:14px; color:var(--text-secondary);">يجب وجود 4 مقالات على الأقل في تصنيف "${categoryName}".</p>`;
            return;
        }

        const posts = data.feed.entry;
        const clockIcon = '<svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.414-1.415L11 9.586V6z" clip-rule="evenodd"></path></svg>';
        
        const getPostData = (post) => {
            const title = post.title.$t;
            const url = post.link.find(link => link.rel === 'alternate').href;
            let imageUrl = 'https://i.imgur.com/R9J34z6.png';
            
            if (post.media$thumbnail && post.media$thumbnail.url) {
                imageUrl = post.media$thumbnail.url.replace(/\/(s\d+|w\d+-h\d+-c|s\d+-w\d+-h\d+-c)\//, '/w720-h450-c/');
            } else if (post.content && post.content.$t) {
                const match = post.content.$t.match(/<img[^>]+src="([^">]+)"/);
                if (match && match[1]) {
                    imageUrl = match[1];
                }
            }
            
            const timeAgo = (isoDate) => {
                const seconds = Math.floor((new Date() - new Date(isoDate)) / 1000);
                let interval = seconds / 31536000; if (interval > 1) return `منذ ${Math.floor(interval)} سنوات`;
                interval = seconds / 2592000; if (interval > 1) return `منذ ${Math.floor(interval)} أشهر`;
                interval = seconds / 86400; if (interval > 1) return `منذ ${Math.floor(interval)} أيام`;
                return 'اليوم';
            };
            const date = timeAgo(post.published.$t);
            return { title, url, imageUrl, date };
        };

        const largePostData = getPostData(posts[0]);
        const smallPostsData = posts.slice(1, 4).map(getPostData);

        let smallPostsHTML = smallPostsData.map(p => `
          <a href="${p.url}" class="col-small-post">
            <img src="${p.imageUrl.replace(/\/w\d+-h\d+-c\//, '/s100-c/')}" alt="${p.title}" loading="lazy"/>
            <div class="col-small-post-title-wrapper">
               <h4 class="col-small-post-title">${p.title}</h4>
               <div class="col-post-meta">${clockIcon} ${p.date}</div>
            </div>
          </a>`).join('');

        const finalHTML = `
          <a href="${largePostData.url}" class="col-large-post">
            <img src="${largePostData.imageUrl}" alt="${largePostData.title}" loading="lazy"/>
            <div class="col-large-post-content">
              <h3 class="col-large-post-title">${largePostData.title}</h3>
              <div class="col-post-meta">${clockIcon} ${largePostData.date}</div>
            </div>
          </a>
          <div class="col-small-post-list">${smallPostsHTML}</div>`;
        widgetContent.innerHTML = finalHTML;

    } catch (error) {
        widgetContent.innerHTML = '<p>حدث خطأ.</p>';
        console.error(`خطأ في جلب بيانات القسم ${sectionId}:`, error);
    }
}


// --------------------------------------------------
// -- نقطة انطلاق الكود (Entry Point)
// --------------------------------------------------

document.addEventListener('DOMContentLoaded', () => {
    // نستخدم تأخير بسيط لضمان أن بلوجر جهز كل الأدوات
    setTimeout(() => {
        // بناء أقسام المجلة
        buildMagazineSection('homepage-magazine-1', 'layout-1');
        buildMagazineSection('homepage-magazine-3', 'layout-grid'); // <-- تم التعديل هنا
        
        // بناء الأقسام الجديدة (الثلاث أعمدة)
        buildMagazineColumn('homepage-magazine-2-col1');
        buildMagazineColumn('homepage-magazine-2-col2');
        buildMagazineColumn('homepage-magazine-2-col3');
    }, 100); 
});

// --- فاصل للكود المدمج ---
;
async function buildRandomPostsGrid() {
    const section = document.querySelector('#homepage-random-posts');
    if (!section || !section.querySelector('.widget')) {
        return; // إذا كانت الأداة محذوفة أو مخفية، أوقف كل شيء
    }

    // إنشاء حاوية العرض وإضافتها للقسم
    const container = document.createElement('div');
    container.id = 'random-posts-container';
    section.appendChild(container);
    container.innerHTML = '<p>جاري تحميل المقالات العشوائية...</p>';
    
    // إنشاء عنوان احترافي للقسم (بالشكل الجديد)
const titleHTML = `
  <div class="hs-title-wrapper">
    <h2 class="hs-title-text">مقالات عشوائية</h2>
    <span class="hs-title-line"></span>
    <a href="/search" class="hs-title-more-btn">عرض المزيد</a>
  </div>`;
section.insertAdjacentHTML('afterbegin', titleHTML);

    try {
        // نطلب عدد كبير من المقالات (يمكنك زيادة الرقم إذا كانت مدونتك كبيرة جداً)
        const response = await fetch(`/feeds/posts/default?alt=json&max-results=150`);
        const data = await response.json();

        if (!data.feed || !data.feed.entry || data.feed.entry.length === 0) {
            container.innerHTML = '<p>لا توجد مقالات لعرضها.</p>';
            return;
        }

        // --- الجزء الخاص بالعشوائية ---
        let posts = data.feed.entry;
        // خلط المقالات باستخدام خوارزمية Fisher-Yates
        for (let i = posts.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [posts[i], posts[j]] = [posts[j], posts[i]];
        }
        
        // أخذ أول 5 مقالات فقط بعد الخلط
        const randomPosts = posts.slice(0, 5);
        
        if (randomPosts.length < 5) {
             container.innerHTML = '<p>يجب وجود 5 مقالات على الأقل في المدونة.</p>';
            return;
        }

        const getPostData = (post) => {
            const title = post.title.$t;
            const url = post.link.find(link => link.rel === 'alternate').href;
            const author = post.author[0].name.$t;
            let label = (post.category && post.category.length > 0) ? post.category[0].term : '';
            
            let imageUrl = 'https://i.imgur.com/R9J34z6.png';
            if (post.media$thumbnail && post.media$thumbnail.url) {
                imageUrl = post.media$thumbnail.url.replace(/\/(s\d+|w\d+-h\d+-c|s\d+-w\d+-h\d+-c)\//, '/w720-h450-c/');
            } else if (post.content && post.content.$t) {
                const match = post.content.$t.match(/<img[^>]+src="([^">]+)"/);
                if (match && match[1]) {
                    imageUrl = match[1];
                }
            }
            return { title, url, imageUrl, author, label };
        };

        const html = randomPosts.map(post => {
            const postData = getPostData(post);
            return `<div class="magazine-post">${buildPostCard(postData, postData.label)}</div>`;
        }).join('');
        
        container.innerHTML = html;

    } catch (error) {
        container.innerHTML = '<p>حدث خطأ أثناء تحميل المقالات.</p>';
        console.error('Error fetching random posts:', error);
    }
}

// استدعاء الدالة مباشرة عند تحميل الصفحة
buildRandomPostsGrid();

// --- فاصل للكود المدمج ---
;
(function() {
    // متغير للتأكد من أن الكود يعمل مرة واحدة فقط
    let adsenseLoaded = false;

    // الدالة التي تقوم بتحميل سكربت AdSense
    const lazyLoadAdSense = () => {
        // إذا تم تحميل السكربت بالفعل، لا تفعل شيئًا
        if (adsenseLoaded) {
            return;
        }

        // ابحث عن الحاوية التي وضع فيها المستخدم كود AdSense
        const sourceContainer = document.getElementById('lazy-adsense-source');
        if (!sourceContainer) return;

        // ابحث عن وسم <script> داخل الحاوية
        const userScript = sourceContainer.querySelector('script[src*="adsbygoogle.js"]');
        if (!userScript) return;

        // تم العثور على الكود، قم بتعيين العلم لمنع إعادة التشغيل
        adsenseLoaded = true;

        // إنشاء وسم script جديد ونظيف
        const newScript = document.createElement('script');
        
        // نسخ كل الخصائص الهامة من سكربت المستخدم إلى السكربت الجديد
        newScript.src = userScript.src;
        if (userScript.getAttribute('data-ad-client')) {
          newScript.setAttribute('data-ad-client', userScript.getAttribute('data-ad-client'));
        }
        newScript.async = true;
        if (userScript.getAttribute('crossorigin')) {
          newScript.setAttribute('crossorigin', userScript.getAttribute('crossorigin'));
        }
        
        // إضافة السكربت الجديد إلى رأس الصفحة لتشغيله
        document.head.appendChild(newScript);

        // إزالة مستمعات الأحداث بعد أول تشغيل للأداء الأفضل
        window.removeEventListener('scroll', lazyLoadAdSense);
        window.removeEventListener('mousemove', lazyLoadAdSense);
        window.removeEventListener('touchstart', lazyLoadAdSense);
        window.removeEventListener('keydown', lazyLoadAdSense);
    };

    // التحقق مما إذا كان الزائر هو روبوت بحث
    const isBot = /bot|google|baidu|bing|msn|duckduckgo|teoma|slurp|yandex/i.test(navigator.userAgent);

    // إذا كان الزائر روبوتًا، قم بتحميل الإعلانات فورًا
    if (isBot) {
        lazyLoadAdSense();
    } else {
        // إذا كان الزائر مستخدمًا عاديًا، انتظر تفاعله
        window.addEventListener('scroll', lazyLoadAdSense, { passive: true, once: true });
        window.addEventListener('mousemove', lazyLoadAdSense, { passive: true, once: true });
        window.addEventListener('touchstart', lazyLoadAdSense, { passive: true, once: true });
        window.addEventListener('keydown', lazyLoadAdSense, { passive: true, once: true });
    }
})();

// --- فاصل للكود المدمج ---
;
// ★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★
// ★★★★★★★★★★★ الكود الكامل والنهائي لكل الأقسام (نسخة التحميل الكسول V2) ★★★★★★★★★★★
// ★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★

// We wrap everything in a single function that the lazy loader will call.
window.initDynamicPostSections = function() {
function initNewsHero(sliderId, posts) {
        const wrapper = document.getElementById(sliderId);
        if (!wrapper) return;

        const slides = wrapper.querySelectorAll('.dps-nh-slide');
        const dots = wrapper.querySelectorAll('.dps-nh-dot');
        const sideItems = wrapper.querySelectorAll('.dps-nh-side-item');
        let currentIndex = 0;
        let autoPlayInterval;

        const showSlide = (index) => {
            // إزالة النشاط من الكل
            slides[currentIndex].classList.remove('active');
            dots[currentIndex].classList.remove('active');
            sideItems[currentIndex].classList.remove('active');

            // تحديد الاندكس الجديد (دائري)
            currentIndex = (index + posts.length) % posts.length;

            // تفعيل الجديد
            slides[currentIndex].classList.add('active');
            dots[currentIndex].classList.add('active');
            sideItems[currentIndex].classList.add('active');
        };

        const nextSlide = () => showSlide(currentIndex + 1);

        const startAutoPlay = () => {
            stopAutoPlay();
            autoPlayInterval = setInterval(nextSlide, 5000); // 5 ثواني
        };

        const stopAutoPlay = () => clearInterval(autoPlayInterval);

        // التفاعل مع القائمة الجانبية والنقاط
        sideItems.forEach((item, index) => {
            item.addEventListener('click', (e) => {
                // لو ضغط على الرابط نفسه يروح للمقال، لو ضغط في الكارت يغير السلايد
                // هنا بنخليه يغير السلايد عند الماوس، وبنخليه رابط عند الضغط
                showSlide(index);
                startAutoPlay(); // إعادة تشغيل المؤقت
            });
            // تفعيل عند المرور أيضاً (اختياري)
            item.addEventListener('mouseenter', () => {
                showSlide(index);
                stopAutoPlay();
            });
            item.addEventListener('mouseleave', startAutoPlay);
        });

        dots.forEach(dot => {
            dot.addEventListener('click', () => {
                showSlide(parseInt(dot.dataset.index));
                startAutoPlay();
            });
        });

        // إيقاف عند المرور على السلايدر
        const sliderContainer = wrapper.querySelector('.dps-nh-slider-container');
        sliderContainer.addEventListener('mouseenter', stopAutoPlay);
        sliderContainer.addEventListener('mouseleave', startAutoPlay);

        // البدء
        startAutoPlay();
    }
    function initHero3D(sliderId) {
    const slider = document.getElementById(sliderId);
    if (!slider) return;
    
    const slides = slider.querySelectorAll('.hero-3d-slide');
    const dots = slider.querySelectorAll('.hero-3d-dot');
    const prevBtn = slider.querySelector('.hero-3d-nav.prev');
    const nextBtn = slider.querySelector('.hero-3d-nav.next');
    let current = 0;
    let interval;

    const showSlide = (index) => {
        slides[current].classList.remove('active');
        dots[current].classList.remove('active');
        current = (index + slides.length) % slides.length;
        slides[current].classList.add('active');
        dots[current].classList.add('active');
    };

    const nextSlide = () => showSlide(current + 1);
    const prevSlide = () => showSlide(current - 1);

    const startAuto = () => {
        stopAuto();
        interval = setInterval(nextSlide, 5000);
    };
    const stopAuto = () => clearInterval(interval);

    // ربط الأحداث
    nextBtn.addEventListener('click', () => { nextSlide(); startAuto(); });
    prevBtn.addEventListener('click', () => { prevSlide(); startAuto(); });
    
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            showSlide(parseInt(dot.dataset.index));
            startAuto();
        });
    });

    slider.addEventListener('mouseenter', stopAuto);
    slider.addEventListener('mouseleave', startAuto);

    startAuto(); // بدء التشغيل
}
    // ===== [دوال تشغيل السلايدرات والميزات - لا تلمسها] =====
function initCarousel(carouselId) {
    const widget = document.getElementById(carouselId);
    if (!widget) return;

    const container = widget.querySelector('.dps-carousel-container');
    const prevBtn = widget.querySelector('.dps-carousel-nav .prev');
    const nextBtn = widget.querySelector('.dps-carousel-nav .next');
    const cards = widget.querySelectorAll('.dps-carousel-card');
    let currentIndex = 0;
    let autoScrollInterval;

    if (!container || !prevBtn || !nextBtn || cards.length === 0) return;

    // =======================================================
    // == [الجزء الخاص بالهاتف] - نظام إخفاء وإظهار البطاقات ==
    // =======================================================
    const showCard = (index) => {
        cards.forEach(card => card.classList.remove('active'));
        cards[index].classList.add('active');
    };

    const nextCard = () => {
        currentIndex = (currentIndex + 1) % cards.length;
        showCard(currentIndex);
    };
    
    const prevCard = () => {
        currentIndex = (currentIndex - 1 + cards.length) % cards.length;
        showCard(currentIndex);
    };

    // ======================================================
    // == [الجزء الخاص بالكمبيوتر] - نظام التمرير (Scroll) ==
    // ======================================================
    const scroll = (amount) => {
        const card = container.querySelector('.dps-carousel-card');
        if (!card) return;
        const cardWidth = card.offsetWidth;
        container.scrollBy({ left: amount * (cardWidth + 20), behavior: 'smooth' });
    };

    const autoScrollDesktop = () => {
         if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 20) {
            container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
            scroll(1);
        }
    };
    
    // =======================================================
    // == دالة التشغيل الذكية التي تختار النظام المناسب ==
    // =======================================================
    const setupCarousel = () => {
        stopAutoScroll();
        currentIndex = 0;
        // إعادة تعيين أي تنسيقات قديمة
        cards.forEach(card => card.removeAttribute('class'));
        cards.forEach(card => card.classList.add('dps-carousel-card'));
        
        if (window.innerWidth <= 768) {
            // *** نظام الهاتف ***
            showCard(0); // إظهار البطاقة الأولى
            prevBtn.onclick = () => { prevCard(); resetAutoScroll(); };
            nextBtn.onclick = () => { nextCard(); resetAutoScroll(); };
            autoScrollInterval = setInterval(nextCard, 4000);
        } else {
            // *** نظام الكمبيوتر ***
            container.scrollTo({ left: 0 }); // العودة للبداية
            prevBtn.onclick = () => { scroll(-1); resetAutoScroll(); };
            nextBtn.onclick = () => { scroll(1); resetAutoScroll(); };
            autoScrollInterval = setInterval(autoScrollDesktop, 4000);
        }
    };

    const stopAutoScroll = () => clearInterval(autoScrollInterval);
    const resetAutoScroll = () => {
        stopAutoScroll();
        startAutoScroll();
    };

    const startAutoScroll = () => {
        stopAutoScroll();
         if (window.innerWidth <= 768) {
            autoScrollInterval = setInterval(nextCard, 4000);
        } else {
            autoScrollInterval = setInterval(autoScrollDesktop, 4000);
        }
    };
    
    // التشغيل الأولي
    setupCarousel();
    
    widget.addEventListener('mouseenter', stopAutoScroll);
    widget.addEventListener('mouseleave', startAutoScroll);
    
    // إعادة التشغيل عند تغيير حجم الشاشة (مهم جداً)
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            // إعادة بناء السلايدر بالكامل ليتناسب مع حجم الشاشة الجديد
            setupCarousel();
        }, 250);
    });
}
    function initNewsSliderV2(containerId, posts) {
      const container = document.getElementById(containerId); if (!container) return;
      const gridContainer = container.querySelector('.dps-ns2-grid'); const titleBar = container.querySelector('.dps-ns2-title-bar');
      let htmlGrid = ''; posts.forEach((p, i) => { const num = posts.length - i; htmlGrid += `<li class="dps-ns2-item" data-index="${i}" data-url="${p.url}"><img src="${p.imageUrl}" loading="lazy"/><span class="num">${num}</span></li>`; });
      gridContainer.innerHTML = htmlGrid; const items = container.querySelectorAll('.dps-ns2-item');
      let currentIndex = 0, intervalId;
      function showSlide(index) { if (items[currentIndex]) items[currentIndex].classList.remove('active'); currentIndex = (index + posts.length) % posts.length; if (items[currentIndex]) { items[currentIndex].classList.add('active'); titleBar.textContent = posts[currentIndex].title; }}
      function next() { showSlide(currentIndex + 1); } function startAutoplay() { intervalId = setInterval(next, 3000); } function stopAutoplay() { clearInterval(intervalId); }
      items.forEach(item => { item.addEventListener('click', () => { window.open(item.dataset.url, '_blank'); }); item.addEventListener('mouseenter', () => { showSlide(parseInt(item.dataset.index)); stopAutoplay(); }); });
      gridContainer.addEventListener('mouseleave', startAutoplay); showSlide(0); startAutoplay();
    }
    function initVerticalTicker(containerId, posts) {
      const container = document.getElementById(containerId); if (!container) return;
      const navContainer = container.querySelector('.dps-vt-nav'); const displayContainer = container.querySelector('.dps-vt-display');
      let navHtml = '', displayHtml = '';
      posts.forEach((p, i) => {
        navHtml += `<div class="dps-vt-nav-item" data-index="${i}"><h4 class="dps-title">${p.title}</h4></div>`;
        displayHtml += `<div class="dps-vt-slide" data-index="${i}"><a href="${p.url}"><div class="dps-vt-img-wrapper"><img src="${p.imageUrl}" loading="lazy"/></div><div class="dps-vt-caption"><h3 class="dps-title">${p.snippet}</h3></div></a></div>`;
      });
      navContainer.innerHTML = navHtml; displayContainer.innerHTML = displayHtml;
      const navItems = navContainer.querySelectorAll('.dps-vt-nav-item'); const slides = displayContainer.querySelectorAll('.dps-vt-slide');
      let currentIndex = 0, intervalId;
      function showSlide(index) { if (navItems[currentIndex]) { navItems[currentIndex].classList.remove('active'); slides[currentIndex].classList.remove('active'); } currentIndex = (index + posts.length) % posts.length; if (navItems[currentIndex]) { navItems[currentIndex].classList.add('active'); slides[currentIndex].classList.add('active'); }}
      function next() { showSlide(currentIndex + 1); } function startAutoplay() { intervalId = setInterval(next, 5000); } function stopAutoplay() { clearInterval(intervalId); }
      navItems.forEach(item => { item.addEventListener('click', () => { showSlide(parseInt(item.dataset.index)); stopAutoplay(); startAutoplay(); }); });
      showSlide(0); startAutoplay();
    }
    function initStoryReel(containerId) {
        const container = document.getElementById(containerId); if (!container) return;
        const reel = container.querySelector('.dps-story-reel');
        const prevBtn = container.querySelector('.dps-story-nav.prev');
        const nextBtn = container.querySelector('.dps-story-nav.next');
        if (!reel || !prevBtn || !nextBtn) return;
        const scrollAmount = 300;
        prevBtn.addEventListener('click', () => reel.scrollBy(-scrollAmount, 0));
        nextBtn.addEventListener('click', () => reel.scrollBy(scrollAmount, 0));
    }
    function initAtlasSlider(sliderId, posts) {
        const wrapper = document.getElementById(sliderId); if (!wrapper) return;
        let currentIndex = 0; let autoPlayInterval;
        const mainView = wrapper.querySelector('.dps-as-main-view');
        const navView = wrapper.querySelector('.dps-as-nav-view');
        const pagination = wrapper.querySelector('.dps-as-pagination');
        const prevBtn = wrapper.querySelector('.dps-as-nav-btn.prev');
        const nextBtn = wrapper.querySelector('.dps-as-nav-btn.next');
        const colorPalette = [ '225, 29, 72', '219, 39, 119', '147, 51, 234', '109, 40, 217', '79, 70, 229', '37, 99, 235', '14, 165, 233', '8, 145, 178', '13, 148, 136', '5, 150, 105', '22, 163, 74', '101, 163, 13', '202, 138, 4', '217, 119, 6', '234, 88, 12' ];
        const shuffleArray = (array) => { for (let i = array.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [array[i], array[j]] = [array[j], array[i]]; } return array; };
        const shuffledColors = shuffleArray([...colorPalette]);
        const getVisibleCount = () => { if (window.innerWidth <= 500) return 1; if (window.innerWidth <= 900) return 2; return 4; };
        const render = () => {
            const visibleCount = getVisibleCount(); const totalPosts = posts.length;
            let mainHTML = '', navHTML = '', paginationHTML = '';
            for (let i = 0; i < Math.min(visibleCount, totalPosts); i++) {
                const postIndex = (currentIndex + i) % totalPosts;
                const p = posts[postIndex];
                const labelColorRgb = shuffledColors[postIndex % shuffledColors.length];
                mainHTML += `<div class="dps-as-card ${i === 0 ? 'is-active' : ''}" data-index="${postIndex}"><a href="${p.url}"><img class="dps-as-card-img" src="${p.image}" alt="${p.title}" loading="lazy"/><div class="dps-as-card-content"><span class="dps-as-card-label" style="background-color: rgba(${labelColorRgb}, 0.7)">${p.label}</span><h3 class="dps-as-card-title">${p.title}</h3></div></a></div>`;
                navHTML += `<div class="dps-as-nav-item ${i === 0 ? 'is-active' : ''}" data-index="${postIndex}"><div class="dps-as-nav-item-num">${String(postIndex + 1).padStart(2, '0')}</div><div class="dps-as-nav-item-details"><div class="dps-as-nav-item-title">${p.title}</div><div class="dps-as-nav-item-meta">${p.author}</div></div></div>`;
            }
            mainView.innerHTML = mainHTML; navView.innerHTML = navHTML;
            posts.forEach((_, i) => { paginationHTML += `<div class="dps-as-page-num ${i === currentIndex ? 'is-active' : ''}" data-index="${i}">${i + 1}</div>`; });
            pagination.innerHTML = paginationHTML;
        };
        const updateActive = (newIndex) => { currentIndex = (newIndex + posts.length) % posts.length; render(); };
        const nextSlide = () => updateActive(currentIndex + 1); const prevSlide = () => updateActive(currentIndex - 1);
        const startAutoPlay = () => { clearInterval(autoPlayInterval); autoPlayInterval = setInterval(nextSlide, 5000); };
        const initialize = () => { render(); startAutoPlay(); };
        wrapper.addEventListener('click', (e) => {
            const navItem = e.target.closest('.dps-as-nav-item'); const pageNum = e.target.closest('.dps-as-page-num');
            const prevButton = e.target.closest('.dps-as-nav-btn.prev'); const nextButton = e.target.closest('.dps-as-nav-btn.next');
            if (navItem || pageNum) { const targetIndex = parseInt((navItem || pageNum).dataset.index); updateActive(targetIndex); startAutoPlay(); } 
            else if (nextButton) { nextSlide(); startAutoPlay(); } else if (prevButton) { prevSlide(); startAutoPlay(); }
        });
        initialize();
        window.addEventListener('resize', () => { clearTimeout(window.resizedFinished); window.resizedFinished = setTimeout(initialize, 250); });
    }
    function initFilterGrid(containerId, posts) {
        const container = document.getElementById(containerId); if (!container) return;
        const filtersContainer = container.querySelector('.dps-fg-filters');
        const gridContainer = container.querySelector('.dps-fg-grid');
        const allLabels = [...new Set(posts.map(p => p.label))];
        let filtersHTML = '';
        allLabels.forEach((label, index) => { filtersHTML += `<button class="dps-fg-filter-btn ${index === 0 ? 'is-active' : ''}" data-filter="${label}">${label}</button>`; });
        filtersContainer.innerHTML = filtersHTML;
        const authorIcon = '<svg fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>';
        const dateIcon = '<svg fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>';
        const renderGrid = (filter) => {
            const filteredPosts = posts.filter(p => p.label === filter);
            if (filteredPosts.length === 0) { gridContainer.innerHTML = '<p>لا توجد مقالات في هذا التصنيف.</p>'; return; }
            gridContainer.innerHTML = filteredPosts.map(p => `<a href="${p.url}" class="dps-fg-item" data-category="${p.label}"><div class="dps-fg-item-thumb-wrapper"><img class="dps-fg-item-thumb" src="${p.image}" alt="${p.title}" loading="lazy"/></div><div class="dps-fg-item-content"><h3 class="dps-fg-item-title">${p.title}</h3><div class="dps-fg-item-meta"><span>${authorIcon} ${p.author}</span><span>${dateIcon} ${p.date}</span></div></div></a>`).join('');
        };
        filtersContainer.addEventListener('click', (e) => {
            const btn = e.target.closest('.dps-fg-filter-btn');
            if (btn) { filtersContainer.querySelector('.is-active').classList.remove('is-active'); btn.classList.add('is-active'); renderGrid(btn.dataset.filter); }
        });
        renderGrid(allLabels[0]);
    }
    function initGridSlider(containerId, posts) {
        const wrapper = document.getElementById(containerId); 
        if (!wrapper) {
            console.error(`Grid Slider Error: Wrapper with ID "${containerId}" not found.`);
            return;
        }

        let currentIndex = 0;
        let autoPlayInterval;
        const sliderPosts = posts.slice(2);
        const slidesContainer = wrapper.querySelector('.dps-gs-slides-container');
        
        if (!slidesContainer) {
            console.error(`Grid Slider Error: ".dps-gs-slides-container" not found inside #${containerId}`);
            return;
        }

        if (sliderPosts.length === 0) {
            slidesContainer.parentElement.innerHTML = '<p style="text-align:center; color: var(--text-secondary); padding: 20px;">يتطلب 3 مقالات على الأقل لعرض السلايدر.</p>';
            return;
        }
        
        let sliderHTML = '';
        sliderPosts.forEach((p, i) => {
            sliderHTML += `<div class="dps-gs-slide" data-index="${i}">
                <a href="${p.url}">
                    <img class="dps-gs-slide-img" src="${p.image}" alt="${p.title}" loading="lazy"/>
                    <span class="dps-gs-label" style="background-color: ${p.labelColor}">${p.label}</span>
                    <div class="dps-gs-slide-content">
                        <h3 class="dps-gs-slide-title">${p.title}</h3>
                        <p class="dps-gs-slide-snippet">${p.snippet}</p>
                    </div>
                </a>
            </div>`;
        });
        slidesContainer.innerHTML = sliderHTML;
        const slides = slidesContainer.querySelectorAll('.dps-gs-slide');
        if (slides.length > 0) slides[0].classList.add('is-active');
        
        const showSlide = (nextIndex) => {
            if (slides.length < 2) return;
            slides[currentIndex].classList.remove('is-active');
            currentIndex = (nextIndex + slides.length) % slides.length;
            slides[currentIndex].classList.add('is-active');
        };
        
        const next = () => showSlide(currentIndex + 1);
        const prev = () => showSlide(currentIndex - 1);
        
        const startAutoPlay = () => autoPlayInterval = setInterval(next, 5000);
        const resetAutoPlay = () => { clearInterval(autoPlayInterval); startAutoPlay(); };

        const nextButton = wrapper.querySelector('.dps-gs-nav-btn.next');
        const prevButton = wrapper.querySelector('.dps-gs-nav-btn.prev');

        if(nextButton && prevButton){
            nextButton.addEventListener('click', () => { next(); resetAutoPlay(); });
            prevButton.addEventListener('click', () => { prev(); resetAutoPlay(); });
        } else {
            console.error(`Grid Slider Error: Navigation buttons not found inside #${containerId}`);
        }
        
        startAutoPlay();
    }
    function initHeroSlider(sliderId, posts) {
        const wrapper = document.getElementById(sliderId);
        if (!wrapper) return;

        const mainView = wrapper.querySelector('.dps-hs-main-view');
        const navList = wrapper.querySelector('.dps-hs-nav-list');
        
        let slidesHTML = '';
        let navHTML = '';
        posts.forEach((p, i) => {
            slidesHTML += `
                <div class="dps-hs-slide" data-index="${i}">
                    <a href="${getPostUrl(p)}">
                        <img class="dps-hs-slide-img" src="${getPostImage(p, 'w800-h500-c')}" alt="${p.title.$t}" loading="lazy"/>
                        <div class="dps-hs-slide-content">
                            <span class="dps-hs-label">${(p.category && p.category[0]) ? p.category[0].term : 'جديد'}</span>
                            <h3 class="dps-hs-slide-title">${p.title.$t}</h3>
                            <p class="dps-hs-slide-snippet">${getPostSnippet(p, 120)}</p>
                        </div>
                    </a>
                </div>`;
            navHTML += `
                <div class="dps-hs-nav-item" data-index="${i}">
                    <img class="dps-hs-nav-thumb" src="${getPostImage(p, 's100-c')}" alt="${p.title.$t}" loading="lazy"/>
                    <div class="dps-hs-nav-details">
                         <h4 class="dps-hs-nav-title">${p.title.$t}</h4>
                         <span class="dps-hs-nav-meta">${getPostDate(p)}</span>
                    </div>
                </div>`;
        });
        
        mainView.innerHTML = slidesHTML;
        navList.innerHTML = navHTML;

        const slides = wrapper.querySelectorAll('.dps-hs-slide');
        const navItems = wrapper.querySelectorAll('.dps-hs-nav-item');
        let currentIndex = 0;
        let autoplayInterval;

        function showSlide(index) {
            slides[currentIndex].classList.remove('is-active');
            navItems[currentIndex].classList.remove('is-active');
            currentIndex = index;
            slides[currentIndex].classList.add('is-active');
            navItems[currentIndex].classList.add('is-active');
        }

        function startAutoplay() {
            stopAutoplay();
            autoplayInterval = setInterval(() => {
                const nextIndex = (currentIndex + 1) % posts.length;
                showSlide(nextIndex);
            }, 5000);
        }

        function stopAutoplay() {
            clearInterval(autoplayInterval);
        }

        navItems.forEach(item => {
            item.addEventListener('click', () => {
                showSlide(parseInt(item.dataset.index));
            });
        });

        wrapper.addEventListener('mouseenter', stopAutoplay);
        wrapper.addEventListener('mouseleave', startAutoplay);

        showSlide(0);
        startAutoplay();
    }
    
    const dynamicPostWidgets = document.querySelectorAll('i.posts-from');
    if (dynamicPostWidgets.length === 0) return;
    const getPostUrl = (post) => (post && post.link) ? (post.link.find(link => link.rel === 'alternate') || {}).href || '#' : '#';
    const getPostImage = (post, size = 'w800-h600-c') => {
    let img = 'https://i.imgur.com/R9J34z6.png';
    // جلب الرابط الخام (نفس الكود السابق)
    if (post && post.media$thumbnail && post.media$thumbnail.url) { 
        img = post.media$thumbnail.url; 
    } else if (post && post.content && post.content.$t) { 
        const match = post.content.$t.match(/src="([^"]+)"/); 
        if (match) img = match[1]; 
    }
    
    // التحقق: هل الصورة من سيرفرات جوجل؟
    if (img.includes('blogspot') || img.includes('googleusercontent') || img.includes('ggpht')) {
        // ========================================================== //
        // == [الإصلاح] تجاهل الحجم الصغير واطلب حجماً أكبر دائماً == //
        // ========================================================== //
        // إذا كان المطلوب صورة مربعة (مثل s90-c)، اطلب s400-c عالية الجودة
        if (size.startsWith('s')) {
            return img.replace(/\/(s|w)\d+.*?(-c)?\//, '/s400-c/').replace(/=s\d+.*/, '=s400-c');
        }
        // لأي شكل آخر (مستطيل)، اطلب عرض 800 بكسل بجودة عالية
        return img.replace(/\/(s|w)\d+.*?(-c)?\//, '/w800/').replace(/=s\d+.*/, '=w800');
    }
    
    // اترك الصور الخارجية (مثل imgur) كما هي
    return img;
};
    const getPostDate = (post) => {
        if(!post || !post.published) return '';
        const date = new Date(post.published.$t);
        return date.toLocaleDateString('ar-EG', { day: 'numeric', month: 'short', year: 'numeric' });
    };
    const getAuthorAvatar = (post) => (post && post.author[0] && post.author[0].gd$image && post.author[0].gd$image.src && !post.author[0].gd$image.src.includes('anon.png')) ? post.author[0].gd$image.src.replace(/\/s\d+-c\//, '/s64-c/') : null;
// ============ [دالة تلوين التصنيفات تلقائياً] ============
const colorPalette = ['rgba(211, 47, 47, 0.8)', 'rgba(194, 24, 91, 0.8)', 'rgba(123, 31, 162, 0.8)', 'rgba(81, 45, 168, 0.8)', 'rgba(48, 63, 159, 0.8)', 'rgba(25, 118, 210, 0.8)', 'rgba(2, 136, 209, 0.8)', 'rgba(0, 151, 167, 0.8)', 'rgba(0, 121, 107, 0.8)', 'rgba(56, 142, 60, 0.8)', 'rgba(230, 74, 25, 0.8)', 'rgba(93, 64, 55, 0.8)'];

let colorIndex = Math.floor(Math.random() * colorPalette.length);
const getLabelColor = () => {
    const color = colorPalette[colorIndex];
    colorIndex = (colorIndex + 1) % colorPalette.length; // ينتقل للون التالي
    return color;
};
// ========================================================
    const clockIcon = '<svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.414-1.415L11 9.586V6z" clip-rule="evenodd"></path></svg>';
    const getPostSnippet = (post, length = 80) => {
      const title = post && post.title ? post.title.$t : ''; const sourceHtml = (post && post.summary && post.summary.$t) || (post && post.content && post.content.$t) || '';
      if (!sourceHtml) return title; try { const tempDiv = document.createElement('div'); tempDiv.innerHTML = sourceHtml; tempDiv.querySelectorAll('script, style, table, .separator, [class*="app-container"], [class*="info-box"]').forEach(el => el.remove()); const paragraphs = tempDiv.querySelectorAll('p, div'); let firstMeaningfulText = ''; for (const p of paragraphs) { const pText = p.textContent.trim(); if (pText.length > 20) { firstMeaningfulText = pText; break; } } const textToUse = firstMeaningfulText || tempDiv.textContent.trim(); const cleanedText = textToUse.replace(/\s+/g, ' ').trim(); if (!cleanedText) return title; return cleanedText.length > length ? cleanedText.substring(0, length) + '...' : cleanedText; } catch(e) { return title; }
    };

    const renderFunctions = {
      'grid-3-col': (posts, label) => {
    return `<div class="dps-grid-3-col">${posts.map(p => `
        <div class="dps-item-style1">
            <a href="${getPostUrl(p)}">
                <div class="dps-img-wrapper">
                    <img src="${getPostImage(p, 'w400-h260-c')}" alt="${p.title.$t}" loading="lazy"/>
                    <span class="dps-label" style="background-color: ${getLabelColor()}">
                        ${(p.category && p.category[0]) ? p.category[0].term : label}
                    </span>
                </div>
                <div class="dps-content" data-date="${getPostDate(p)}">
                    <h3 class="dps-title">${p.title.$t}</h3>
                </div>
            </a>
        </div>`).join('')}
    </div>`;
},
'news-hero': (posts, label) => {
          if (!posts || posts.length < 5) return '<p class="dps-loading-msg">يتطلب 5 مقالات.</p>';
          
          const uniqueId = `news-hero-${Date.now()}`;
          const displayPosts = posts.slice(0, 5);
          
          // أيقونة ساعة صغيرة ومحكومة
          const smallClock = '<svg viewBox="0 0 24 24" style="width:14px;height:14px;vertical-align:middle"><path fill="currentColor" d="M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z"/></svg>';

          // 1. السلايدر
          const slidesHTML = displayPosts.map((p, i) => `
              <div class="dps-nh-slide ${i === 0 ? 'active' : ''}">
                  <img class="dps-nh-slide-img" src="${getPostImage(p, 'w800-h500-c')}" alt="${p.title.$t}" loading="lazy"/>
                  <div class="dps-nh-content">
                      <span class="dps-nh-label">${(p.category && p.category[0]) ? p.category[0].term : label}</span>
                      <h3 class="dps-nh-title"><a href="${getPostUrl(p)}">${p.title.$t}</a></h3>
                      <div class="dps-nh-meta">
                          <span>${smallClock} ${getPostDate(p)}</span>
                      </div>
                  </div>
              </div>
          `).join('');

          // 2. النقاط
          const dotsHTML = displayPosts.map((_, i) => `<span class="dps-nh-dot ${i === 0 ? 'active' : ''}" data-index="${i}"></span>`).join('');

          // 3. القائمة الجانبية
          const listHTML = displayPosts.map((p, i) => `
              <div class="dps-nh-side-item ${i === 0 ? 'active' : ''}">
                  <img class="dps-nh-side-img" src="${getPostImage(p, 's200-c')}" alt="${p.title.$t}" loading="lazy"/>
                  <div class="dps-nh-side-info">
                      <h4 class="dps-nh-side-title">${p.title.$t}</h4>
                      <span class="dps-nh-side-date">${smallClock} ${getPostDate(p)}</span>
                  </div>
              </div>
          `).join('');

          return `
              <div class="dps-news-hero-wrapper" id="${uniqueId}">
                  <div class="dps-nh-slider-container">
                      ${slidesHTML}
                      <div class="dps-nh-dots">${dotsHTML}</div>
                  </div>
                  <div class="dps-nh-side-list">
                      ${listHTML}
                  </div>
              </div>
          `;
      },
'hero-3d': (posts, label) => {
    if (!posts || posts.length < 1) return '<p class="dps-loading-msg">لا توجد مقالات.</p>';
    
    const uniqueId = `hero-3d-${Date.now()}`;
    
    // بناء الشرائح (Slides)
    const slidesHTML = posts.map((p, i) => {
        const postData = {
            url: getPostUrl(p),
            image: getPostImage(p, 's400'), // صورة متوسطة
            title: p.title.$t,
            label: (p.category && p.category[0]) ? p.category[0].term : label,
            snippet: getPostSnippet(p, 120)
        };
        return `
            <div class="hero-3d-slide ${i === 0 ? 'active' : ''}">
                <div class="hero-3d-bg" style="background-image: url(${postData.image})"></div>
                <div class="hero-3d-content">
                    <div class="text-area hero-3d-text">
                        <span class="slide-badge hero-3d-badge">${postData.label}</span>
                        <h2 class="hero-title hero-3d-title">${postData.title}</h2>
                        <p class="hero-desc hero-3d-desc">${postData.snippet}</p>
                        <a href="${postData.url}" class="hero-btn hero-3d-btn">
                            تحميل 
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                        </a>
                    </div>
                    <div class="image-area hero-3d-image-area">
                        <img src="${postData.image}" class="hero-img hero-3d-img" alt="${postData.title}" loading="lazy"/>
                    </div>
                </div>
            </div>`;
    }).join('');

    // بناء النقاط (Dots)
    const dotsHTML = posts.map((_, i) => `<span class="hero-3d-dot ${i === 0 ? 'active' : ''}" data-index="${i}"></span>`).join('');

    // الهيكل النهائي
    return `
        <div class="hero-3d-slider" id="${uniqueId}">
            ${slidesHTML}
            <div class="hero-3d-nav prev"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></div>
            <div class="hero-3d-nav next"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg></div>
            <div class="hero-3d-dots">${dotsHTML}</div>
        </div>`;
},
'pro-layout': (posts, label) => {
    if (!posts || posts.length < 2) {
        return '<p class="dps-loading-msg">يتطلب هذا الشكل مقالين على الأقل.</p>';
    }
    
    const largePost = posts[0];
    const smallPosts = posts.slice(1);

    const largePostData = {
        url: getPostUrl(largePost),
        // ★★★ تعديل حجم الصورة ليكون أطول ★★★
        image: getPostImage(largePost, 'w500-h400-c'), 
        title: largePost.title.$t,
        label: (largePost.category && largePost.category[0]) ? largePost.category[0].term : label,
        date: getPostDate(largePost)
    };
    const largePostHTML = `
        <a href="${largePostData.url}" class="dps-pro-large-card">
            <img class="dps-pro-img" src="${largePostData.image}" alt="${largePostData.title}" loading="lazy"/>
            <div class="dps-pro-content">
                <span class="dps-pro-label" style="background-color: ${getLabelColor()}">${largePostData.label}</span>
                <h3 class="dps-pro-title">${largePostData.title}</h3>
                <div class="dps-pro-meta">${largePostData.date}</div>
            </div>
        </a>`;

    const smallPostsHTML = smallPosts.map(p => {
        const postData = {
            url: getPostUrl(p),
            image: getPostImage(p, 'w100-h80-c'),
            title: p.title.$t,
            // ★★★ إضافة التاريخ هنا ★★★
            date: getPostDate(p)
        };
        return `
            <a href="${postData.url}" class="dps-pro-small-item">
                <img class="dps-pro-img" src="${postData.image}" alt="${postData.title}" loading="lazy"/>
                <div class="dps-pro-content">
                    <h4 class="dps-pro-title">${postData.title}</h4>
                    <div class="dps-pro-meta">${postData.date}</div>
                </div>
            </a>`;
    }).join('');
    
    return `
    <div class="dps-pro-layout">
        ${largePostHTML}
        <div class="dps-pro-small-list">${smallPostsHTML}</div>
    </div>`;
},
// 1. شكل متجر التطبيقات (Google Play)
'store-apps': (posts, label) => {
    if (!posts || posts.length < 1) return '<p class="dps-loading-msg">لا توجد تطبيقات.</p>';

    const html = posts.map(p => {
        const postData = {
            url: getPostUrl(p),
            image: getPostImage(p, 's160-c'), // صورة مربعة
            title: p.title.$t,
            date: getPostDate(p)
        };
        return `
            <a href="${postData.url}" class="store-app-card">
                <img class="store-app-icon" src="${postData.image}" alt="${postData.title}" loading="lazy"/>
                <h3 class="store-app-name">${postData.title}</h3>
                <div class="store-app-meta">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="orange"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                    <span>${postData.date}</span>
                </div>
                <div class="store-install-btn">تثبيت</div>
            </a>`;
    }).join('');

    return `<div class="store-apps-grid">${html}</div>`;
},

// 2. شكل الألعاب الحديث (Pro Gaming)
'store-games': (posts, label) => {
    if (!posts || posts.length < 1) return '<p class="dps-loading-msg">لا توجد ألعاب.</p>';

    const html = posts.map(p => {
        const postData = {
            url: getPostUrl(p),
            image: getPostImage(p, 's140-c'),
            title: p.title.$t,
            date: getPostDate(p)
        };
        return `
            <a href="${postData.url}" class="pro-game-card">
                <div class="pro-game-thumb-box">
                    <img class="pro-game-thumb" src="${postData.image}" alt="${postData.title}" loading="lazy"/>
                    <div class="pro-dl-circle">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                    </div>
                </div>
                <div class="game-info">
                    <h3 class="pro-game-title">${postData.title}</h3>
                    <div class="pro-game-date">
                         <svg width="10" height="10" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.414-1.415L11 9.586V6z" clip-rule="evenodd"></path></svg>
                         ${postData.date}
                    </div>
                </div>
            </a>`;
    }).join('');

    return `<div class="pro-games-grid">${html}</div>`;
},
'apps-grid': (posts, label, title) => { // أضفنا title هنا
    if (!posts || posts.length < 1) {
        return '<p class="dps-loading-msg">لا توجد مقالات.</p>';
    }

    const iconDate = '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>';

    const html = posts.map(p => {
        const postData = {
            url: getPostUrl(p),
            image: getPostImage(p, 's90-c'),
            title: p.title.$t,
            date: getPostDate(p)
        };

        return `
            <a href="${postData.url}" class="dps-app-card">
                <img class="dps-app-img" src="${postData.image}" alt="${postData.title}" loading="lazy"/>
                <div class="dps-app-content">
                    <h3 class="dps-app-title">${postData.title}</h3>
                    <div class="dps-app-meta">${iconDate} ${postData.date}</div>
                </div>
            </a>
        `;
    }).join('');

    // ★★★ تصميم الهيدر المخصص (مطابق للصورة) ★★★
    return `
        <div class="dps-apps-wrapper">
            <div class="dps-apps-header">
                <div class="dps-apps-title-area">
                    <span class="dps-apps-icon">
                        <!-- أيقونة الكأس -->
                        <svg fill="currentColor" viewBox="0 0 24 24"><path d="M5 2H19C19.5523 2 20 2.44772 20 3V6.1701C21.7329 6.65281 23 8.15271 23 10C23 12.2091 21.2091 14 19 14H17.7841C17.284 16.4689 15.2867 18.4136 12.8031 18.9196L13.0001 20H17V22H7V20H11.0002L11.1974 18.9195C8.71362 18.4133 6.71616 16.4684 6.21613 14.0001H5C2.79086 14 1 12.2091 1 10C1 8.15271 2.26712 6.65281 4 6.1701V3C4 2.44772 4.44772 2 5 2ZM18 6H6V13.5C6 16.5376 8.46243 19 11.5 19C14.5376 19 17 16.5376 17 13.5V6ZM5 8C3.89543 8 3 8.89543 3 10C3 11.1046 3.89543 12 5 12V8ZM19 12C20.1046 12 21 11.1046 21 10C21 8.89543 20.1046 8 19 8V12Z"></path></svg>
                    </span>
                    <h2 class="dps-apps-header-title">${title}</h2>
                </div>
                <a href="/search/label/${encodeURIComponent(label)}" class="dps-apps-more-btn">
                    المزيد 
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                </a>
            </div>
            <div class="dps-apps-grid">${html}</div>
        </div>`;
},
'video-grid': (posts, label) => {
    if (!posts || posts.length < 5) {
        return '<p class="dps-loading-msg">يتطلب هذا الشكل 5 مقالات على الأقل.</p>';
    }
    
    const largePost = posts[0];
    const smallPosts = posts.slice(1, 5);

    // بناء المقال الكبير (بالتصميم الجديد + أيقونة التشغيل)
   const buildLargeCard = (post) => {
    const postData = {
        url: getPostUrl(post),
        image: getPostImage(post, 'w500-h400-c'),
        title: post.title.$t,
        label: (post.category && post.category[0]) ? post.category[0].term : label,
        author: post.author[0].name.$t,
        date: getPostDate(post)
    };
    
    // ★★★ بناء HTML الخاص بأزرار المشاركة ★★★
    const shareLinks = `
        <div class="dps-vg-share-buttons">
            <a href="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(postData.url)}" target="_blank" title="مشاركة على فيسبوك">
                <svg height='100%' style='fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;' version='1.1' viewBox='0 0 512 512' width='100%' xml:space='preserve' xmlns='http://www.w3.org/2000/svg' xmlns:serif='http://www.serif.com/' xmlns:xlink='http://www.w3.org/1999/xlink'><g><path d='M512,256c0,-141.385 -114.615,-256 -256,-256c-141.385,0 -256,114.615 -256,256c0,127.777 93.616,233.685 216,252.89l0,-178.89l-65,0l0,-74l65,0l0,-56.4c0,-64.16 38.219,-99.6 96.695,-99.6c28.009,0 57.305,5 57.305,5l0,63l-32.281,0c-31.801,0 -41.719,19.733 -41.719,39.978l0,48.022l71,0l-11.35,74l-59.65,0l0,178.89c122.385,-19.205 216,-125.113 216,-252.89Z' style='fill:#1877f2;fill-rule:nonzero;'/><path d='M355.65,330l11.35,-74l-71,0l0,-48.022c0,-20.245 9.917,-39.978 41.719,-39.978l32.281,0l0,-63c0,0 -29.297,-5 -57.305,-5c-58.476,0 -96.695,35.44 -96.695,99.6l0,56.4l-65,0l0,74l65,0l0,178.89c13.033,2.045 26.392,3.11 40,3.11c13.608,0 26.966,-1.065 40,-3.11l0,-178.89l59.65,0Z' style='fill:#fff;fill-rule:nonzero;'/></g></svg>
            </a>
            <a href="https://twitter.com/intent/tweet?url=${encodeURIComponent(postData.url)}&text=${encodeURIComponent(postData.title)}" target="_blank" title="مشاركة على إكس">
                <svg fill='currentColor' viewBox='0 0 24 24'><path d='M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z'/></svg>
            </a>
            <a href="https://pinterest.com/pin/create/button/?url=${encodeURIComponent(postData.url)}&media=${encodeURIComponent(postData.image)}&description=${encodeURIComponent(postData.title)}" target="_blank" title="مشاركة على بينترست">
               <svg height='100%' style='fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;' version='1.1' viewBox='0 0 512 512' width='100%' xml:space='preserve' xmlns='http://www.w3.org/2000/svg' xmlns:serif='http://www.serif.com/' xmlns:xlink='http://www.w3.org/1999/xlink'><g><path d='M511.999,256.002c0,141.373 -114.606,255.979 -255.98,255.979c-141.373,0 -255.979,-114.606 -255.979,-255.979c0,-141.374 114.606,-255.98 255.979,-255.98c141.374,0 255.98,114.606 255.98,255.98Z' style='fill:#fff;fill-rule:nonzero;'/><path d='M255.998,0.001c-141.384,0 -255.998,114.617 -255.998,255.998c0,108.456 67.475,201.171 162.707,238.471c-2.24,-20.255 -4.261,-51.405 0.889,-73.518c4.65,-19.978 30.018,-127.248 30.018,-127.248c0,0 -7.659,-15.334 -7.659,-38.008c0,-35.596 20.632,-62.171 46.323,-62.171c21.839,0 32.391,16.399 32.391,36.061c0,21.966 -13.984,54.803 -21.203,85.235c-6.03,25.482 12.779,46.261 37.909,46.261c45.503,0 80.477,-47.976 80.477,-117.229c0,-61.293 -44.045,-104.149 -106.932,-104.149c-72.841,0 -115.597,54.634 -115.597,111.095c0,22.004 8.475,45.596 19.052,58.421c2.09,2.535 2.398,4.758 1.776,7.343c-1.945,8.087 -6.262,25.474 -7.111,29.032c-1.117,4.686 -3.711,5.681 -8.561,3.424c-31.974,-14.884 -51.963,-61.627 -51.963,-99.174c0,-80.755 58.672,-154.915 169.148,-154.915c88.806,0 157.821,63.279 157.821,147.85c0,88.229 -55.629,159.232 -132.842,159.232c-25.94,0 -50.328,-13.476 -58.674,-29.394c0,0 -12.838,48.878 -15.95,60.856c-5.782,22.237 -21.382,50.109 -31.818,67.11c23.955,7.417 49.409,11.416 75.797,11.416c141.389,0 256.003,-114.612 256.003,-256.001c0,-141.381 -114.614,-255.998 -256.003,-255.998Z' style='fill:#e71d27;fill-rule:nonzero;'/></g></svg>
            </a>
        </div>
    `;

    return `
        <div class="dps-vg-large-post">
            <a href="${postData.url}" class="dps-vg-large-img-wrapper">
                <img class="dps-vg-img" src="${postData.image}" alt="${postData.title}" loading="lazy"/>
                <span class="dps-vg-play-icon"></span>
            </a>
            <div class="dps-vg-content">
                <div class="dps-vg-content-header">
                    <span class="dps-vg-label" style="background-color: ${getLabelColor()}">${postData.label}</span>
                    ${shareLinks}
                </div>
                <h3 class="dps-vg-title"><a href="${postData.url}" style="color: inherit; text-decoration: none;">${postData.title}</a></h3>
                <div class="dps-vg-meta">
                    <span>${postData.date}</span>
                    <a href="${post.author[0].uri.$t}" target="_blank" style="color: inherit; text-decoration: none;">بواسطة ${postData.author}</a>
                </div>
            </div>
        </div>`;
};

    // بناء المقالات الصغيرة
    const buildSmallCard = (post) => {
         const postData = {
            url: getPostUrl(post),
            image: getPostImage(post, 'w300-h200-c'),
            title: post.title.$t,
            date: getPostDate(post)
        };
        return `
            <div class="dps-vg-small-post">
                <a href="${postData.url}" class="dps-vg-card">
                    <img class="dps-vg-img" src="${postData.image}" alt="${postData.title}" loading="lazy"/>
                    <span class="dps-vg-play-icon"></span>
                </a>
                <div class="dps-vg-content">
                    <h4 class="dps-vg-title"><a href="${postData.url}" style="color: inherit; text-decoration: none;">${postData.title}</a></h4>
                    <div class="dps-vg-meta">${postData.date}</div>
                </div>
            </div>
        `;
    };
    
    const largePostHTML = buildLargeCard(largePost);
    const smallPostsHTML = smallPosts.map(p => buildSmallCard(p)).join('');

    // الترتيب الصحيح (الكبير يمين، والصغار يسار)
    return `
        <div class="dps-video-grid-layout">
            ${largePostHTML}
            <div class="dps-vg-small-grid">${smallPostsHTML}</div>
        </div>`;
},
'magazine-1-3': (posts, label) => {
    if (!posts || posts.length < 4) {
        return '<p class="dps-loading-msg">يتطلب هذا الشكل 4 مقالات على الأقل.</p>';
    }
    
    const largePost = posts[0];
    const smallPosts = posts.slice(1, 4);

    // بناء المقال الكبير
    const buildLargeCard = (post) => {
        const postData = {
            url: getPostUrl(post),
            image: getPostImage(post, 'w800-h350-c'),
            title: post.title.$t,
            label: (post.category && post.category[0]) ? post.category[0].term : label,
            author: post.author[0].name.$t,
            date: getPostDate(post)
        };
        return `
            <a href="${postData.url}" class="dps-m13-large-post">
                <img class="dps-m13-img" src="${postData.image}" alt="${postData.title}" loading="lazy"/>
                <span class="dps-m13-label" style="background-color: ${getLabelColor()}">${postData.label}</span>
                <div class="dps-m13-content">
                    <h3 class="dps-m13-title">${postData.title}</h3>
                    <div class="dps-m13-meta">${postData.date} - بواسطة ${postData.author}</div>
                </div>
            </a>`;
    };

    // بناء المقالات الصغيرة (بالتصميم الجديد)
    const buildSmallCard = (post) => {
         const postData = {
            url: getPostUrl(post),
            image: getPostImage(post, 'w400-h250-c'),
            title: post.title.$t,
            label: (post.category && post.category[0]) ? post.category[0].term : label,
            date: getPostDate(post)
        };
        return `
            <a href="${postData.url}" class="dps-m13-small-post">
                <div class="dps-m13-img-wrapper">
                    <img class="dps-m13-img" src="${postData.image}" alt="${postData.title}" loading="lazy"/>
                </div>
                <span class="dps-m13-label" style="background-color: ${getLabelColor()}">${postData.label}</span>
                <h4 class="dps-m13-title">${postData.title}</h4>
                <div class="dps-m13-meta">${postData.date}</div>
            </a>
        `;
    };
    
    const largePostHTML = buildLargeCard(largePost);
    const smallPostsHTML = smallPosts.map(p => buildSmallCard(p)).join('');

    return `<div class="dps-magazine-1-3-layout">${largePostHTML}${smallPostsHTML}</div>`;
},
'carousel': (posts, label, title) => { // أضفنا title هنا
    const uniqueId = `dps-carousel-${Date.now()}`;
    
    const cardsHTML = posts.map(p => {
        const postData = {
            url: getPostUrl(p),
            image: getPostImage(p, 'w400-h400-c'),
            title: p.title.$t,
            label: (p.category && p.category[0]) ? p.category[0].term : 'مقالات',
            author: p.author[0].name.$t,
            date: getPostDate(p)
        };
        const randomRating = (Math.random() * (4.0 - 2.0) + 2.0).toFixed(1);

        return `
            <a href="${postData.url}" class="dps-carousel-card">
                <div class="dps-carousel-card-img-wrapper">
                    <img class="dps-carousel-card-img" src="${postData.image}" alt="${postData.title}" loading="lazy"/>
                    <span class="dps-carousel-rating">${randomRating}</span>
                </div>
                <span class="dps-carousel-label" style="background-color: ${getLabelColor()}">${postData.label}</span>
                <h3 class="dps-carousel-card-title">${postData.title}</h3>
                <div class="dps-carousel-meta">${postData.author} • ${postData.date}</div>
            </a>`;
    }).join('');

    // ★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★
    // ★★★★★★★★★★★ هذا هو التعديل المهم ★★★★★★★★★★★
    // ★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★
    return `
        <div class="dps-carousel-widget" id="${uniqueId}">
            <div class="dps-carousel-header">
                <h2 class="dps-carousel-title">${title}</h2>
                <div class="dps-carousel-nav">
                    <button class="prev" aria-label="Previous">
                        <svg fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                    </button>
                    <button class="next" aria-label="Next">
                        <svg fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                    </button>
                </div>
            </div>
            <div class="dps-carousel-container">${cardsHTML}</div>
        </div>`;
},
      'list-with-thumb': (posts) => `<div class="dps-list-thumb">${posts.map(p => `<div class="dps-item-style2"><a href="${getPostUrl(p)}"><img src="${getPostImage(p,'w110-h90-c')}" alt="${p.title.$t}"/><div class="dps-content"><h3 class="dps-title">${p.title.$t}</h3><div class="dps-meta">${getPostDate(p)}</div></div></a></div>`).join('')}</div>`,
      'no-img': (posts) => `<div class="dps-no-img-list"><ul>${posts.map(p => `<li class="dps-item-style3"><a href="${getPostUrl(p)}">${p.title.$t}</a></li>`).join('')}</ul></div>`,
      'magazine-1': (posts, label) => { if (posts.length < 5) return '<p class="dps-loading-msg">يتطلب 5 مقالات.</p>'; return `<div class="dps-magazine-1">${posts.slice(0,5).map(p => `<div class="dps-item-magazine-card"><a href="${getPostUrl(p)}"><img src="${getPostImage(p)}" alt="${p.title.$t}"/><div class="dps-content"><span class="dps-label">${(p.category&&p.category[0])?p.category[0].term:label}</span><h3 class="dps-title">${p.title.$t}</h3></div></a></div>`).join('')}</div>`; },
      'grid-2x2': (posts, label) => { if (posts.length < 4) return '<p class="dps-loading-msg">يتطلب 4 مقالات.</p>'; return `<div class="dps-grid-2x2">${posts.slice(0,4).map(p => `<div class="dps-item-style1"><a href="${getPostUrl(p)}"><div class="dps-img-wrapper"><img src="${getPostImage(p,'w600-h360-c')}" alt="${p.title.$t}"/><div class="dps-img-snippet">${getPostSnippet(p)}</div></div><div class="dps-content"><div class="dps-label">${(p.category&&p.category[0])?p.category[0].term:label}</div><h3 class="dps-title">${p.title.$t}</h3></div></a></div>`).join('')}</div>`; },
      'random-grid': (posts, label) => { if (posts.length < 5) return '<p class="dps-loading-msg">يتطلب 5 مقالات.</p>'; return `<div class="dps-random-grid">${posts.slice(0,5).map(p => `<div class="dps-item-magazine-card"><a href="${getPostUrl(p)}"><img src="${getPostImage(p)}" alt="${p.title.$t}"/><div class="dps-content"><span class="dps-label">${(p.category&&p.category[0])?p.category[0].term:label}</span><h3 class="dps-title">${p.title.$t}</h3></div></a></div>`).join('')}</div>`; },
      'magazine-3-cols': (postsByLabel, labels) => {
        if (postsByLabel.length < 3) return '<p class="dps-loading-msg">خطأ.</p>';
        return `<div class="dps-magazine-3-col">${postsByLabel.map((colPosts, i) => { const colLabel = labels[i]; let colContent; if(!colPosts || colPosts.length < 4) { colContent = '<p>يتطلب 4 مقالات.</p>'; } else { const largePost = colPosts[0]; const smallPosts = colPosts.slice(1,4); colContent = `<a href="${getPostUrl(largePost)}" class="dps-col-large-post"><img src="${getPostImage(largePost, 'w400-h250-c')}" alt="${largePost.title.$t}"/><div class="dps-content"><h3 class="dps-title">${largePost.title.$t}</h3><div class="dps-col-post-meta">${getPostDate(largePost)}</div></div></a><div class="dps-col-small-post-list">${smallPosts.map(p => `<a href="${getPostUrl(p)}" class="dps-col-small-post"><img src="${getPostImage(p,'w100-h80-c')}" alt="${p.title.$t}"/><div class="dps-content"><h4 class="dps-title">${p.title.$t}</h4></div></a>`).join('')}</div>`; } return `<div class="dps-col"><div class="hs-title-wrapper"><h2 class="hs-title-text">${colLabel}</h2><span class="hs-title-line"></span><a href="/search/label/${encodeURIComponent(colLabel)}" class="hs-title-more-btn">المزيد</a></div>${colContent}</div>`; }).join('')}</div>`;
      },
      'magazine-grid-3': (posts) => { if(!posts || posts.length < 1) return '<p class="dps-loading-msg">لا توجد مقالات.</p>'; return `<div class="dps-magazine-grid-3">${posts.map(p => `<a href="${getPostUrl(p)}" class="grid-post-item"><div class="grid-post-text"><div class="grid-post-meta">${clockIcon} ${getPostDate(p)}</div><h3 class="grid-post-title">${p.title.$t}</h3></div><img class="grid-post-image" src="${getPostImage(p,'w110-h90-c')}" alt="${p.title.$t}" /></a>`).join('')}</div>`; },
      'news-slider': (posts) => { if (!posts || posts.length < 1) return '<p class="dps-loading-msg">لا توجد مقالات.</p>'; const uniqueId = `dps-ns-${Date.now()}`; return `<div class="dps-news-slider-v2" id="${uniqueId}"><ul class="dps-ns2-grid"></ul><div class="dps-ns2-title-bar"></div></div>`; },
      'vertical-ticker': (posts) => { if (!posts || posts.length < 4) return '<p class="dps-loading-msg">يتطلب 4 مقالات.</p>'; const uniqueId = `dps-vt-${Date.now()}`; return `<div class="dps-v-ticker" id="${uniqueId}"><div class="dps-vt-display"></div><div class="dps-vt-nav"></div></div>`; },
      'magazine-pro-1': (posts, label) => {
          if (posts.length < 3) return '<p class="dps-loading-msg">يتطلب هذا الشكل 3 مقالات على الأقل.</p>'; const displayPosts = posts.slice(0, 3); const buildCardContent = (post, showAvatar) => { const authorName = (post.author[0] && post.author[0].name) ? post.author[0].name.$t : ''; const authorAvatarUrl = showAvatar ? getAuthorAvatar(post) : null; return `<div class="dps-mp1-content"><span class="dps-mp1-label">${(post.category&&post.category[0])?post.category[0].term:label}</span><h3 class="dps-mp1-title">${post.title.$t}</h3><div class="dps-mp1-meta">${authorAvatarUrl ? `<img class="dps-mp1-avatar" src="${authorAvatarUrl}" alt="${authorName}" loading="lazy"/>` : ''}<span>${authorName} • ${getPostDate(post)}</span></div></div>`; }; return `<div class="dps-magazine-pro-1"><a href="${getPostUrl(displayPosts[0])}" class="dps-mp1-card"><img class="dps-mp1-img" src="${getPostImage(displayPosts[0], 'w400-h500-c')}" alt="${displayPosts[0].title.$t}" loading="lazy"/>${buildCardContent(displayPosts[0], false)}</a><a href="${getPostUrl(displayPosts[1])}" class="dps-mp1-card"><img class="dps-mp1-img" src="${getPostImage(displayPosts[1], 'w400-h500-c')}" alt="${displayPosts[1].title.$t}" loading="lazy"/>${buildCardContent(displayPosts[1], false)}</a><a href="${getPostUrl(displayPosts[2])}" class="dps-mp1-card"><img class="dps-mp1-img" src="${getPostImage(displayPosts[2], 'w800-h450-c')}" alt="${displayPosts[2].title.$t}" loading="lazy"/>${buildCardContent(displayPosts[2], true)}</a></div>`;
      },
      'story-reel': (posts) => {
          if (!posts || posts.length < 1) return '<p class="dps-loading-msg">لا توجد مقالات لعرضها.</p>'; const uniqueId = `story-reel-${Date.now()}`; const reelHTML = posts.map(p => `<a href="${getPostUrl(p)}" class="dps-story-item"><div class="dps-story-avatar"><img src="${getPostImage(p, 's150-c')}" alt="${p.title.$t}" loading="lazy"/></div><span class="dps-story-title">${p.title.$t}</span></a>`).join(''); return `<div class="dps-story-reel-container" id="${uniqueId}"><div class="dps-story-reel">${reelHTML}</div><button class="dps-story-nav prev"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg></button><button class="dps-story-nav next"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></button></div>`;
      },
      'overlapping-grid': (posts) => {
          if (posts.length < 3) return '<p class="dps-loading-msg">يتطلب 3 مقالات.</p>'; const p = posts.slice(0,3).map(post => ({url: getPostUrl(post), img: getPostImage(post, 'w600-h600-c'), title: post.title.$t}));
          return `<div class="dps-overlapping-grid"><a href="${p[0].url}" class="dps-og-item"><img src="${p[0].img}" alt="${p[0].title}"/><div class="dps-content"><h3 class="dps-title">${p[0].title}</h3></div></a><a href="${p[1].url}" class="dps-og-item"><img src="${p[1].img}" alt="${p[1].title}"/><div class="dps-content"><h3 class="dps-title">${p[1].title}</h3></div></a><a href="${p[2].url}" class="dps-og-item"><img src="${p[2].img}" alt="${p[2].title}"/><div class="dps-content"><h3 class="dps-title">${p[2].title}</h3></div></a></div>`;
      },
      'pinned-post': (posts) => {
          if (posts.length < 5) return '<p class="dps-loading-msg">يتطلب 5 مقالات.</p>';
          const pinned = posts[0]; const list = posts.slice(1,5);
          const pinnedHTML = `<div class="dps-pinned-post"><a href="${getPostUrl(pinned)}"><img src="${getPostImage(pinned, 'w800-h500-c')}" alt="${pinned.title.$t}"/></a><div class="dps-content"><h3 class="dps-title"><a href="${getPostUrl(pinned)}">${pinned.title.$t}</a></h3><p class="dps-snippet">${getPostSnippet(pinned, 120)}</p></div></div>`;
          const listHTML = `<div class="dps-pinned-list"><ul>${list.map(p => `<li><a href="${getPostUrl(p)}"><div class="dps-meta">${getPostDate(p)}</div><h4 class="dps-title">${p.title.$t}</h4></a></li>`).join('')}</ul></div>`;
          return `<div class="dps-pinned-layout">${pinnedHTML}${listHTML}</div>`;
      },
      'numbered-grid': (posts) => {
          if (posts.length < 1) return '<p class="dps-loading-msg">لا توجد مقالات.</p>';
          return `<div class="dps-numbered-grid">${posts.map((p, i) => `<a href="${getPostUrl(p)}" class="dps-num-item"><div class="dps-num-item-number">${String(i + 1).padStart(2, '0')}</div><img src="${getPostImage(p, 'w150-h120-c')}" class="dps-num-item-img" alt="${p.title.$t}"/><div class="dps-num-item-content"><h3 class="dps-title">${p.title.$t}</h3><div class="dps-meta">${(p.category && p.category[0]) ? p.category[0].term : ''}</div></div></a>`).join('')}</div>`;
      },
      'polaroid-stack': (posts) => {
          if (posts.length < 1) return '<p class="dps-loading-msg">لا توجد مقالات.</p>';
          return `<div class="dps-polaroid-stack">${posts.map(p => `<a href="${getPostUrl(p)}" class="dps-polaroid-card"><img src="${getPostImage(p, 'w400-h400-c')}" alt="${p.title.$t}"/><h3 class="dps-title">${p.title.$t}</h3></a>`).join('')}</div>`;
      },
      'atlas-slider': (posts, label) => {
          if (!posts || posts.length < 1) return '<p class="dps-loading-msg">لا توجد مقالات.</p>';
          const uniqueId = `atlas-slider-${Date.now()}`;
          return `<div class="dps-atlas-slider-wrapper" id="${uniqueId}">
                      <div class="dps-as-main-view"></div>
                      <div class="dps-as-nav-container">
                          <button class="dps-as-nav-btn prev"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></button>
                          <div class="dps-as-nav-view"></div>
                          <button class="dps-as-nav-btn next"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg></button>
                      </div>
                      <div class="dps-as-pagination"></div>
                  </div>`;
      },
      'filter-grid': (posts, labels) => {
          const uniqueId = `filter-grid-${Date.now()}`;
          return `<div class="dps-filter-grid-container" id="${uniqueId}">
                      <div class="dps-fg-filters"></div>
                      <div class="dps-fg-grid"></div>
                  </div>`;
      },
      'comparison': (posts) => {
          if (!posts || posts.length < 2) return '<p class="dps-loading-msg">يتطلب هذا الشكل مقالين على الأقل.</p>';
          const post1 = posts[0]; const post2 = posts[1];
          const buildCard = (p) => `<a href="${getPostUrl(p)}" class="dps-comparison-card"><img src="${getPostImage(p, 'w400-h250-c')}" class="dps-comparison-card-thumb" alt="${p.title.$t}" loading="lazy"/><div class="dps-comparison-card-content"><span class="dps-comparison-card-label">${(p.category && p.category[0]) ? p.category[0].term : ''}</span><h3 class="dps-comparison-card-title">${p.title.$t}</h3><p class="dps-comparison-card-snippet">${getPostSnippet(p, 100)}</p></div></a>`;
          return `<div class="dps-comparison-wrapper">${buildCard(post1)}<div class="dps-vs-icon">VS</div>${buildCard(post2)}</div>`;
      },
      'grid-slider': (posts, label) => {
          if (!posts || posts.length < 3) return '<p class="dps-loading-msg">يتطلب 3 مقالات على الأقل.</p>';
          const uniqueId = `grid-slider-${Date.now()}`;
          const post1 = posts[0]; const post2 = posts[1];
          const colorPalette = [ '225, 29, 72', '219, 39, 119', '147, 51, 234', '109, 40, 217', '79, 70, 229', '37, 99, 235' ];
          const shuffledColors = [...colorPalette].sort(() => 0.5 - Math.random());
          const randomColor1 = shuffledColors[0];
          const randomColor2 = shuffledColors[1];

          const buildSideCard = (p, color) => `
              <a href="${getPostUrl(p)}" class="dps-gs-side-card">
                  <img class="dps-gs-side-card-img" src="${getPostImage(p, 'w400-h225-c')}" alt="${p.title.$t}" loading="lazy"/>
                  <div class="dps-gs-side-card-content">
                      <span class="dps-gs-label" style="background-color: rgba(${color}, 0.7)">${(p.category && p.category[0]) ? p.category[0].term : label}</span>
                      <h4 class="dps-gs-side-card-title">${p.title.$t}</h4>
                  </div>
              </a>`;
          
          return `<div class="dps-grid-slider-wrapper" id="${uniqueId}">
                      <div class="dps-gs-side-cards-container">
                          ${buildSideCard(post1, randomColor1)}
                          ${buildSideCard(post2, randomColor2)}
                      </div>
                      <div class="dps-gs-main-slider">
                          <div class="dps-gs-slides-container"></div>
                          <button class="dps-gs-nav-btn prev"><svg fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></button>
                          <button class="dps-gs-nav-btn next"><svg fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></button>
                      </div>
                  </div>`;
      },
      'hero-grid-1': (posts, label) => {
        if (posts.length < 4) return '<p class="dps-loading-msg">يتطلب هذا الشكل 4 مقالات على الأقل في المدونة.</p>';
        for (let i = posts.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [posts[i], posts[j]] = [posts[j], posts[i]];
        }
        const displayPosts = posts.slice(0, 4);
        const buildCard = (post, size) => {
            let imageSize = 'w400-h300-c';
            if (size === 'large') imageSize = 'w600-h800-c';
            if (size === 'small-square') imageSize = 'w400-h400-c';
            const postData = {
                url: getPostUrl(post),
                imageUrl: getPostImage(post, imageSize),
                title: post.title.$t,
                label: (post.category && post.category[0]) ? post.category[0].term : '',
                date: getPostDate(post),
                snippet: (size === 'large') ? `<p class="dps-hg1-snippet">${getPostSnippet(post, 100)}</p>` : ''
            };
            return `
                <a href="${postData.url}" class="dps-hg1-card">
                    <img src="${postData.imageUrl}" alt="${postData.title}" loading="lazy"/>
                    <div class="dps-hg1-content">
                        <span class="dps-hg1-label">${postData.label}</span>
                        <h3 class="dps-hg1-title">${postData.title}</h3>
                        <div class="dps-hg1-meta">
                            ${clockIcon}<span>${postData.date}</span>
                        </div>
                        ${postData.snippet}
                    </div>
                </a>
            `;
        };
        const finalHTML = `
            <div class="dps-hero-grid-1">
                ${buildCard(displayPosts[0], 'large')}
                ${buildCard(displayPosts[1], 'small-rect')}
                ${buildCard(displayPosts[2], 'small-square')}
                ${buildCard(displayPosts[3], 'small-square')}
            </div>
        `;
        return finalHTML;
      },
      'hero-slider': (posts) => {
          if (!posts || posts.length < 3) return '<p class="dps-loading-msg">يتطلب هذا الشكل 3 مقالات على الأقل.</p>';
          const uniqueId = `hero-slider-${Date.now()}`;
          return `<div class="dps-hero-slider-wrapper" id="${uniqueId}">
                      <div class="dps-hs-main-view"></div>
                      <div class="dps-hs-nav-list"></div>
                  </div>`;
      },
      'magazine-pinned-list': (posts, label) => {
    // ★★★ التعديل: الآن يتطلب 4 مقالات فقط ★★★
    if (!posts || posts.length < 4) { 
        return '<p class="dps-loading-msg">يتطلب هذا الشكل 4 مقالات على الأقل.</p>'; 
    }
    const largePost = posts[0];
    // ★★★ التعديل: الآن يأخذ 3 مقالات فقط للقائمة ★★★
    const listPosts = posts.slice(1, 4); 

    const largePostData = {
        url: getPostUrl(largePost), image: getPostImage(largePost, 'w600-h600-c'), title: largePost.title.$t,
        label: (largePost.category && largePost.category[0]) ? largePost.category[0].term : label,
        date: getPostDate(largePost), author: largePost.author[0].name.$t
    };

    const largePostHTML = `
      <div class="dps-mpl-large-post">
          <a href="${largePostData.url}">
              <img class="dps-mpl-large-img" src="${largePostData.image}" alt="${largePostData.title}" loading="lazy"/>
              <div class="dps-mpl-large-content">
                  <span class="dps-mpl-label" style="background-color: ${getLabelColor()}">${largePostData.label}</span>
                  <h3 class="dps-mpl-large-title">${largePostData.title}</h3>
                  <div class="dps-mpl-large-meta">${largePostData.date} - بواسطة ${largePostData.author}</div>
              </div>
          </a>
      </div>`;

    const listPostsHTML = listPosts.map(p => {
        // ★★★ التعديل: تغيير حجم الصورة المصغرة لتناسب الحجم الجديد في CSS ★★★
        const postData = { url: getPostUrl(p), image: getPostImage(p, 'w140-h110-c'), title: p.title.$t, date: getPostDate(p) };
        return `
          <a href="${postData.url}" class="dps-mpl-list-item">
              <img class="dps-mpl-list-thumb" src="${postData.image}" alt="${postData.title}" loading="lazy"/>
              <div class="dps-mpl-list-text">
                  <h4 class="dps-mpl-list-title">${postData.title}</h4>
                  <div class="dps-mpl-list-date">${postData.date}</div>
              </div>
          </a>`;
    }).join('');
    
    return `<div class="dps-pinned-list-layout"><div class="dps-mpl-list-wrapper">${listPostsHTML}</div>${largePostHTML}</div>`;
},
      // ============ بداية الكود الجديد الذي أضفته لك ============
      'dual-column-posts': (postsByLabel, labels) => {
          if (postsByLabel.length < 2 || labels.length < 2) {
              return '<p class="dps-loading-msg">يتطلب هذا الشكل تحديد تصنيفين على الأقل.</p>';
          }
      
          const buildColumnHTML = (posts, label) => {
              if (!posts || posts.length < 4) {
                  return `<div class="dps-dcl-column"><p class="dps-loading-msg" style="font-size: 13px;">يتطلب تصنيف "${label}" وجود 4 مقالات على الأقل.</p></div>`;
              }
              
              const largePost = posts[0];
              const smallPosts = posts.slice(1, 4);
      
              const largePostHTML = `
                  <a href="${getPostUrl(largePost)}" class="dps-dcl-large-post">
                      <img src="${getPostImage(largePost, 'w400-h250-c')}" alt="${largePost.title.$t}" loading="lazy"/>
                      <div class="dps-dcl-large-content">
                          <span class="dps-dcl-label" style="background-color: ${getLabelColor()}">${(largePost.category && largePost.category[0]) ? largePost.category[0].term : label}</span>
                          <h3 class="dps-dcl-large-title">${largePost.title.$t}</h3>
                          <div class="dps-dcl-large-meta">${getPostDate(largePost)} - بواسطة ${largePost.author[0].name.$t}</div>
                      </div>
                  </a>`;
              
              const smallPostsHTML = smallPosts.map(p => `
                  <a href="${getPostUrl(p)}" class="dps-dcl-small-post">
                       <img src="${getPostImage(p, 'w100-h80-c')}" alt="${p.title.$t}" loading="lazy"/>
                       <div class="dps-dcl-small-content">
                           <h4 class="dps-dcl-small-title">${p.title.$t}</h4>
                           <div class="dps-dcl-small-date">${getPostDate(p)}</div>
                       </div>
                  </a>`).join('');
      
              return `
                  <div class="dps-dcl-column">
                      <div class="dps-dcl-header">
                          <h2 class="dps-dcl-title">${label.toUpperCase()}</h2>
                          <a href="/search/label/${encodeURIComponent(label)}" class="dps-dcl-more-link">عرض الكل</a>
                      </div>
                      ${largePostHTML}
                      <div class="dps-dcl-small-list">${smallPostsHTML}</div>
                  </div>`;
          };
      
          const column1HTML = buildColumnHTML(postsByLabel[0], labels[0]);
          const column2HTML = buildColumnHTML(postsByLabel[1], labels[1]);
      
          return `<div class="dps-dual-column-layout">${column1HTML}${column2HTML}</div>`;
      },
      // ============ نهاية الكود الجديد ============
    };

    dynamicPostWidgets.forEach(async (widget) => {
      const dataType = widget.dataset.type || 'grid-3-col';
      const dataLabel = widget.dataset.label || 'lastPost';
      const dataNumber = widget.dataset.number || 6; 
      const dataTitle = widget.dataset.title || '';
      const container = document.createElement('div'); container.className = 'dps-container';
      if (dataTitle && !['magazine-3-cols', 'news-slider', 'vertical-ticker', 'atlas-slider', 'filter-grid', 'comparison', 'grid-slider', 'hero-grid-1', 'hero-slider', 'carousel', 'magazine-pinned-list', 'dual-column-posts', 'video-grid', 'apps-grid'].includes(dataType)) {

          const titleUrl = (dataLabel!=='lastPost') ? `/search/label/${encodeURIComponent(dataLabel)}` : '/search';
          container.innerHTML = `<div class="hs-title-wrapper"><h2 class="hs-title-text">${dataTitle}</h2><span class="hs-title-line"></span><a href="${titleUrl}" class="hs-title-more-btn">عرض المزيد</a></div>`;
      } else if (dataTitle && ['filter-grid', 'comparison', 'grid-slider', 'hero-grid-1', 'hero-slider', 'magazine-pinned-list'].includes(dataType)) {
           container.innerHTML = `<div class="hs-title-wrapper"><h2 class="hs-title-text">${dataTitle}</h2><span class="hs-title-line"></span><a href="/search/label/${encodeURIComponent(dataLabel.split(',')[0])}" class="hs-title-more-btn">عرض الكل</a></div>`;
      }
      const contentWrapper = document.createElement('div'); contentWrapper.innerHTML = '<p class="dps-loading-msg">جاري التحميل...</p>'; container.appendChild(contentWrapper);
      widget.parentNode.replaceChild(container, widget);
      try {
          if (dataType === 'magazine-3-cols' || dataType === 'filter-grid' || dataType === 'dual-column-posts') {
              const labels = dataLabel.split(',').map(l => l.trim());
              if (labels.length < 1) throw new Error("يجب تحديد تصنيف واحد على الأقل.");
              const requests = labels.map(label => fetch(`/feeds/posts/default/-/${encodeURIComponent(label)}?alt=json&max-results=6`).then(res => res.json()));
              const results = await Promise.all(requests);
              if (dataType === 'magazine-3-cols' || dataType === 'dual-column-posts') {
                  if (dataType === 'magazine-3-cols' && labels.length < 3) throw new Error("يتطلب 3 تصنيفات.");
                  if (dataType === 'dual-column-posts' && labels.length < 2) throw new Error("يتطلب تصنيفين.");
                  const postsByLabel = results.map(result => (result.feed && result.feed.entry) ? result.feed.entry.filter(p => p && p.link) : []);
                  contentWrapper.innerHTML = renderFunctions[dataType](postsByLabel, labels);
              } else {
                  const allPosts = [];
                  results.forEach(result => { if (result.feed && result.feed.entry) { allPosts.push(...result.feed.entry.filter(p => p && p.link)); } });
                  const uniquePosts = [...new Map(allPosts.map(item => [item.id.$t, item])).values()];
                  contentWrapper.innerHTML = renderFunctions[dataType]();
                  const gridId = contentWrapper.querySelector('.dps-filter-grid-container').id;
                  const gridPosts = uniquePosts.map(p => ({ title: p.title.$t, url: getPostUrl(p), image: getPostImage(p, 'w400-h250-c'), label: (p.category && p.category[0]) ? p.category[0].term : '', author: p.author[0].name.$t, date: getPostDate(p) }));
                  initFilterGrid(gridId, gridPosts);
              }
          } else {
              let feedUrl = '/feeds/posts/default';
// ★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★
// ★★★★★★★★★★★ هذا هو الإصلاح ★★★★★★★★★★★
// ★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★
if (dataLabel !== 'lastPost' && dataLabel !== 'random') {
    feedUrl += `/-/${encodeURIComponent(dataLabel)}`;
}
// إذا كان المطلوب عشوائياً، نطلب عدد كبير لنختار منه
const fetchNumber = (dataLabel === 'random') ? 150 : dataNumber;
feedUrl += `?alt=json&max-results=${fetchNumber}`;
              const response = await fetch(feedUrl); const data = await response.json();
              if (!data.feed || !data.feed.entry || data.feed.entry.length === 0) throw new Error("لا توجد مقالات.");
              const posts = data.feed.entry.filter(p => p && p.link && p.title && p.title.$t);
// ★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★
// ★★★★★ كود خلط المقالات العشوائية ★★★★★
// ★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★
if (dataLabel === 'random') {
    // خلط كل المقالات التي تم جلبها
    for (let i = posts.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [posts[i], posts[j]] = [posts[j], posts[i]];
    }
    // أخذ العدد المطلوب فقط بعد الخلط
    posts.splice(dataNumber);
}
              contentWrapper.innerHTML = renderFunctions[dataType](posts, dataLabel, dataTitle);
// تشغيل السلايدر إذا كان من نوع carousel
if (dataType === 'carousel') {
    const sliderId = contentWrapper.querySelector('.dps-carousel-widget').id;
    initCarousel(sliderId);
}
              
              if (dataType === 'news-slider') { const sliderId = contentWrapper.querySelector('.dps-news-slider-v2').id; const sliderPosts = posts.map(p => ({ title: p.title.$t, url: getPostUrl(p), imageUrl: getPostImage(p, 'w250-h250-c') })).reverse(); initNewsSliderV2(sliderId, sliderPosts); }
              if (dataType === 'vertical-ticker') { const tickerId = contentWrapper.querySelector('.dps-v-ticker').id; const tickerPosts = posts.map(p => ({ title: p.title.$t, snippet: getPostSnippet(p, 150), url: getPostUrl(p), imageUrl: getPostImage(p, 'w720-h480-c') })); initVerticalTicker(tickerId, tickerPosts); }
              if (dataType === 'story-reel') { const reelId = contentWrapper.querySelector('.dps-story-reel-container').id; initStoryReel(reelId); }
              if (dataType === 'atlas-slider') { const sliderId = contentWrapper.querySelector('.dps-atlas-slider-wrapper').id; const sliderPosts = posts.map(p => ({ title: p.title.$t, url: getPostUrl(p), image: getPostImage(p, 'w271-h400-n'), label: (p.category && p.category[0]) ? p.category[0].term : dataLabel, author: p.author[0].name.$t })); initAtlasSlider(sliderId, sliderPosts); }
              if (dataType === 'grid-slider') {
                   const sliderId = contentWrapper.querySelector('.dps-grid-slider-wrapper').id;
                   const colorPalette = [ '225, 29, 72', '219, 39, 119', '147, 51, 234', '109, 40, 217', '79, 70, 229', '37, 99, 235' ];
                   const shuffledColors = [...colorPalette].sort(() => 0.5 - Math.random());
                   const sliderPostsData = posts.map((p, i) => ({ title: p.title.$t, url: getPostUrl(p), image: getPostImage(p, 'w800-h500-c'), label: (p.category && p.category[0]) ? p.category[0].term : dataLabel, snippet: getPostSnippet(p, 120), labelColor: `rgba(${shuffledColors[i % shuffledColors.length]}, 0.7)` }));
                   initGridSlider(sliderId, sliderPostsData);
              }
              if (dataType === 'hero-slider') {
                  const sliderId = contentWrapper.querySelector('.dps-hero-slider-wrapper').id;
                  initHeroSlider(sliderId, posts);
              }
// تشغيل سلايدر 3D
if (dataType === 'hero-3d') {
    const sliderId = contentWrapper.querySelector('.hero-3d-slider').id;
    initHero3D(sliderId);
}
if (dataType === 'news-hero') {
    const sliderId = contentWrapper.querySelector('.dps-news-hero-wrapper').id;
    initNewsHero(sliderId, posts.slice(0, 5));
}
          }
      } catch (error) { contentWrapper.innerHTML = `<p class="dps-loading-msg">${error.message}</p>`; console.error('DPS Error:', error); }
    });
};

// This is a safeguard against the function being called before the lazy loader.
if (document.readyState === 'complete' || (document.readyState !== 'loading' && !document.documentElement.doScroll)) {
    // Do nothing, wait for user interaction to trigger lazyLoader
} else {
    // Do nothing, wait for user interaction to trigger lazyLoader
}

// --- فاصل للكود المدمج ---
;
// Author Avatar Fixer Script - v3 (Final)
document.addEventListener('DOMContentLoaded', function() {
  const authorBox = document.querySelector('.author-box-wrapper');
  if (!authorBox) {
    return;
  }

  const postId = authorBox.getAttribute('data-post-id');
  const avatarImg = document.getElementById('author-avatar-img');

  if (!postId || !avatarImg) {
    return;
  }

  fetch('/feeds/posts/default/' + postId + '?alt=json')
    .then(response => response.json())
    .then(data => {
      if (data.entry && data.entry.author && data.entry.author[0] && data.entry.author[0].gd$image && data.entry.author[0].gd$image.src) {
        
        let imageUrl = data.entry.author[0].gd$image.src;
        
        // ★★★★★★★ هذا هو الشرط الجديد والمهم ★★★★★★★
        // يتحقق من أن الرابط ليس صورة افتراضية من بلوجر
        if (imageUrl.includes('img1.blogblog.com') || imageUrl.includes('anon.png')) {
            // إذا كان الرابط لصورة افتراضية، لا تفعل أي شيء وأوقف الكود
            return; 
        }

        // إذا لم يكن الرابط افتراضياً، قم بتحسينه وتحديث الصورة
        imageUrl = imageUrl.replace(/\/s\d+-c\//, '/s160-c/'); // طريقة أفضل لاستبدال أي حجم

        avatarImg.src = imageUrl;
        avatarImg.alt = data.entry.author[0].name.$t;
      }
    })
    .catch(error => {
      console.error('Failed to fetch author avatar, using default SVG.', error);
    });
});

// --- فاصل للكود المدمج ---
;
// [V2] Multi-Language Post Translation Feature
(function() {
    const postBody = document.querySelector('.single-post-body');
    if (!postBody) return;

    const translateContainer = document.getElementById('translate-post-container');
    if (!translateContainer) return;

    // قائمة اللغات (يمكنك إضافة أو حذف ما تريد)
    // الصيغة: { code: 'رمز اللغة', name: 'اسم اللغة' }
    const languages = [
        { code: 'en', name: 'English' },
        { code: 'fr', name: 'Français' },
        { code: 'es', name: 'Español' },
        { code: 'de', name: 'Deutsch' },
        { code: 'ru', name: 'Русский' },
        { code: 'zh-CN', name: '中文 (简体)' },
        { code: 'ja', name: '日本語' },
        { code: 'ko', name: '한국어' },
        { code: 'hi', name: 'हिन्दी' },
        { code: 'tr', name: 'Türkçe' }
    ];

    // بناء HTML الخاص بالأداة
    const toolHTML = `
        <button id="translate-post-toggle" title="ترجمة المقال">
            <svg style="enable-background:new 0 0 512 512;" version="1.1" viewBox="0 0 512 512" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><path d="M265.128,192.241v87.506c0,8.836-7.163,16-16,16h-2.255v15.636h18.917c11.58,0,21-9.421,21-21v-98.142H265.128z" fill="#DEFFFE"/><path d="M249.128,107.616H26c-11.58,0-21,9.421-21,21v151.13c0,7.85,4.317,14.886,11.05,18.494v13.504c0,4.968,2.763,9.429,7.212,11.641c1.849,0.919,3.832,1.372,5.803,1.372c2.771,0,5.517-0.895,7.831-2.647l28.224-21.363h184.008c11.58,0,21-9.421,21-21v-151.13C270.128,117.037,260.708,107.616,249.128,107.616z" fill="#004358"/><g><path d="M181.39,176.703H93.738c-2.761,0-5-2.238-5-5s2.239-5,5-5h87.652c2.761,0,5,2.238,5,5S184.151,176.703,181.39,176.703z" fill="#BEDB39"/><path d="M137.564,176.703c-2.761,0-5-2.238-5-5v-19.565c0-2.762,2.239-5,5-5s5,2.238,5,5v19.565C142.564,174.465,140.325,176.703,137.564,176.703z" fill="#BEDB39"/><path d="M97.693,261.225c-2.761,0-5-2.238-5-5s2.239-5,5-5c23.279,0,39.945-13.046,49.536-38.775c7.479-20.066,7.676-40.565,7.677-40.77c0.015-2.752,2.25-4.975,5-4.975c0.008,0,0.016,0,0.024,0c2.76,0.013,4.987,2.259,4.976,5.019c-0.004,0.898-0.182,22.265-8.216,43.976C145.667,245.482,125.267,261.225,97.693,261.225z" fill="#BEDB39"/><path d="M177.435,261.225c-27.574,0-47.974-15.742-58.996-45.525c-8.034-21.711-8.212-43.077-8.216-43.976c-0.011-2.762,2.218-5.009,4.979-5.021c2.791-0.049,5.009,2.219,5.021,4.979c0.003,0.361,0.227,20.779,7.676,40.767c9.59,25.729,26.257,38.775,49.536,38.775c2.761,0,5,2.238,5,5S180.196,261.225,177.435,261.225z" fill="#BEDB39"/></g><g><path d="M374.436,226.763c-20.09,0-36.434,16.345-36.434,36.435v72.652c0,2.762,2.239,5,5,5s5-2.238,5-5v-41.323h52.868v41.323c0,2.762,2.239,5,5,5s5-2.238,5-5v-72.652C410.87,243.107,394.526,226.763,374.436,226.763z M400.87,284.526h-52.868v-21.329c0-14.576,11.858-26.435,26.434-26.435s26.434,11.858,26.434,26.435V284.526z" fill="#04BFBF"/><path d="M436.785,82.62c-2.621-0.875-5.451,0.546-6.323,3.165l-6.765,20.332C380.805,58.362,320.192,31.133,256,31.133c-41.549,0-82.146,11.411-117.402,33c-2.355,1.441-3.095,4.52-1.653,6.875c1.442,2.355,4.521,3.097,6.875,1.652C177.504,52.035,216.295,41.133,256,41.133c61.21,0,119.019,25.915,159.999,71.38l-20.938,3.375c-2.726,0.439-4.58,3.006-4.141,5.732c0.396,2.457,2.52,4.205,4.931,4.205c0.264,0,0.532-0.021,0.802-0.064l29.814-4.806c1.805-0.301,3.372-1.614,3.948-3.357l9.535-28.654C440.822,86.322,439.405,83.492,436.785,82.62z" fill="#04BFBF"/></g><path d="M375.055,441.521c-1.442-2.354-4.519-3.095-6.875-1.652c-33.683,20.625-72.474,31.526-112.18,31.526c-61.21,0-119.019-25.915-159.999-71.379l20.938-3.375c2.726-0.439,4.58-3.006,4.14-5.732s-3.009-4.572-5.732-4.141l-29.814,4.807c-1.807,0.288-3.37,1.622-3.948,3.357l-9.535,28.654c-0.872,2.621,0.545,5.451,3.166,6.323c0.524,0.175,1.056,0.257,1.58,0.257c2.094,0,4.046-1.326,4.743-3.422l6.765-20.332c42.892,47.755,103.505,74.983,167.697,74.983c41.55,0,82.147-11.411,117.402-32.999C375.757,446.954,376.497,443.876,375.055,441.521z" fill="#004358"/><g><path d="M468.116,404.382c-2.771,0-5.517-0.895-7.832-2.646l-28.224-21.364H262.872c-11.58,0-21-9.421-21-21v-47.988c0-2.762,2.239-5,5-5s5,2.238,5,5v47.988c0,6.065,4.935,11,11,11h170.867c1.089,0,2.149,0.355,3.018,1.014l29.563,22.377c1.338,1.014,2.648,0.544,3.146,0.294c0.5-0.249,1.664-1.009,1.664-2.687v-15.998c0-2.762,2.239-5,5-5H486c6.065,0,11-4.935,11-11V208.24c0-6.065-4.935-11-11-11H283.44c-2.761,0-5-2.238-5-5s2.239-5,5-5H486c11.58,0,21,9.421,21,21v151.131c0,11.579-9.42,21-21,21h-4.87v10.998c0,4.968-2.763,9.429-7.211,11.641C472.07,403.929,470.087,404.382,468.116,404.382z" fill="#004358"/></g></g></svg>
        </button>
        <ul id="translate-lang-list">
            ${languages.map(lang => `<li><button data-lang="${lang.code}">${lang.name}</button></li>`).join('')}
        </ul>
    `;
    translateContainer.innerHTML = ' | ' + toolHTML;

    const toggleButton = document.getElementById('translate-post-toggle');
    const langList = document.getElementById('translate-lang-list');
    
    let isTranslated = false;
    let originalArticleHTML = postBody.innerHTML;
    const translatedCache = {}; // لتخزين الترجمات المختلفة

    // إظهار/إخفاء القائمة
    toggleButton.addEventListener('click', (e) => {
        e.stopPropagation();
        translateContainer.classList.toggle('active');
    });
    document.addEventListener('click', () => translateContainer.classList.remove('active'));

    // دالة الترجمة الرئيسية
    async function translateText(text, targetLang) {
        const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`;
        try {
            const response = await fetch(url);
            const data = await response.json();
            return data[0].map(item => item[0]).join('');
        } catch (error) {
            console.error('Translation error:', error);
            return null;
        }
    }

    async function processTranslation(targetLang) {
        // إذا كان المقال مترجماً بالفعل، تجاهل
        if (isTranslated) return;
        
        // إخفاء القائمة
        translateContainer.classList.remove('active');

        // إذا كانت الترجمة لهذه اللغة موجودة في الذاكرة، اعرضها
        if (translatedCache[targetLang]) {
            postBody.innerHTML = translatedCache[targetLang];
            showOriginalButton();
            return;
        }

        // --- عملية الترجمة لأول مرة لهذه اللغة ---
        const tempContainer = document.createElement('div');
        tempContainer.innerHTML = '<div class="translator-spinner"></div> جارٍ الترجمة...';
        translateContainer.innerHTML = ' | ' + tempContainer.innerHTML;

        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = originalArticleHTML;
        const elementsToTranslate = tempDiv.querySelectorAll('p, li, h2, h3, h4, h5, h6, blockquote, a');
        const promises = [];

        elementsToTranslate.forEach(element => {
            const text = element.textContent.trim();
            if (text) {
                promises.push(
                    translateText(text, targetLang).then(translatedText => {
                        if (translatedText) {
                            element.textContent = translatedText;
                        }
                    })
                );
            }
        });

        await Promise.all(promises);
        
        // تحديث محتوى المقال وتخزينه في الذاكرة
        const translatedHTML = tempDiv.innerHTML;
        translatedCache[targetLang] = translatedHTML;
        postBody.innerHTML = translatedHTML;
        
        showOriginalButton();
    }
    
    // دالة لإظهار زر "النص الأصلي"
    function showOriginalButton() {
        const backButton = document.createElement('button');
        backButton.id = 'translate-back-btn';
        backButton.innerHTML = `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h10a8 8 0 018 8v2M3 10l4-4m-4 4l4 4"></path></svg> عرض النص الأصلي`;
        
        backButton.addEventListener('click', () => {
            postBody.innerHTML = originalArticleHTML;
            postBody.classList.remove('is-translated');
            translateContainer.innerHTML = ' | ' + toolHTML;
            isTranslated = false;
            // إعادة ربط الأحداث من جديد بعد استعادة HTML الأصلي
            document.getElementById('translate-post-toggle').addEventListener('click', (e) => {
                e.stopPropagation();
                translateContainer.classList.toggle('active');
            });
            document.querySelectorAll('#translate-lang-list button').forEach(button => {
                button.addEventListener('click', () => {
                    processTranslation(button.dataset.lang);
                });
            });
        });
        
        translateContainer.innerHTML = ' | ';
        translateContainer.appendChild(backButton);
        postBody.classList.add('is-translated');
        isTranslated = true;
    }

    // ربط الأحداث بأزرار اللغات
    langList.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', () => {
            processTranslation(button.dataset.lang);
        });
    });

})();

// --- فاصل للكود المدمج ---
;
// ================================================================= //
// ==      PLUGO AI FEATURES - ALL-IN-ONE SCRIPT V1.1 (FIXED)     == //
// ================================================================= //
document.addEventListener('DOMContentLoaded', () => {

    // ------------------------------------------------------------------
    // -- [CORE] API Key Management (Smart Fetch from 'AI-Config' Page)
    // ------------------------------------------------------------------
    let cachedApiKey = null;
    let aiConfigPageUrl = null;

    async function getApiKeyFromPage() {
        if (cachedApiKey) return cachedApiKey;
        try {
            if (!aiConfigPageUrl) {
                const pagesFeedUrl = '/feeds/pages/default?alt=json&max-results=50';
                const pagesResponse = await fetch(pagesFeedUrl);
                if (!pagesResponse.ok) throw new Error('Failed to fetch blog pages list.');
                const pagesData = await pagesResponse.json();
                const configEntry = (pagesData.feed.entry || []).find(e => e.title && e.title.$t.trim() === 'AI-Config'); // Safety check added
                if (!configEntry) throw new Error('Mandatory page with title "AI-Config" was not found.');
                const pageLink = configEntry.link.find(link => link.rel === 'alternate');
                if (!pageLink || !pageLink.href) throw new Error('Could not find URL for "AI-Config" page.');
                aiConfigPageUrl = pageLink.href;
            }
            const pageResponse = await fetch(aiConfigPageUrl);
            if (!pageResponse.ok) throw new Error('Could not fetch content from AI-Config page.');
            const pageHtml = await pageResponse.text();
            const parser = new DOMParser();
            const doc = parser.parseFromString(pageHtml, 'text/html');
            const keyStorage = doc.getElementById('secret-key-storage');
            if (keyStorage && keyStorage.textContent.trim()) {
                cachedApiKey = keyStorage.textContent.trim();
                return cachedApiKey;
            } else {
                throw new Error('API key storage element (#secret-key-storage) not found inside AI-Config page.');
            }
        } catch (error) {
            console.error('AI Security Error:', error.message);
            if (document.getElementById('ai-chat-box')) {
                appendMessage('bot', `خطأ فني: ${error.message}`);
            }
            return null;
        }
    }

    // A helper function for typing effect
    function typeText(text, targetElement, speed = 15, clear = false) {
        return new Promise(resolve => {
            if (clear) targetElement.innerHTML = '';
            let i = 0;
            function typing() {
                if (i < text.length) {
                    targetElement.innerHTML += text.charAt(i);
                    i++;
                    if (targetElement.parentElement) {
                        targetElement.parentElement.scrollTop = targetElement.parentElement.scrollHeight;
                    }
                    setTimeout(typing, speed);
                } else {
                    resolve();
                }
            }
            typing();
        });
    }

   // ------------------------------------------------------------------
    // -- [FEATURE 1 - FULL] Main AI Assistant (Chatbot)
    // ------------------------------------------------------------------
    const assistantButtons = document.querySelectorAll('#ai-assistant-toggle, #dock-ai-toggle, .ai-assistant-fab');
    const chatOverlay = document.getElementById('ai-chat-overlay');
    const chatCloseButton = document.getElementById('ai-chat-close');
    const chatForm = document.getElementById('ai-chat-form');
    const chatInput = document.getElementById('ai-chat-input');
    const chatBox = document.getElementById('ai-chat-box');

    if (chatOverlay) {
        let blogContentContext = '';
        let isBlogContentLoaded = false;
        let conversationHistory = [];

        async function fetchBlogContent() {
            if (isBlogContentLoaded) return;
            try {
                const response = await fetch('/feeds/posts/default?alt=json&max-results=50');
                const data = await response.json();
                let context = "Here is the summary of the latest posts on this blog:\n\n";
                (data.feed.entry || []).forEach((entry, index) => {
                    if (!entry || !entry.title || !entry.title.$t || !entry.link) return;
                    const title = entry.title.$t;
                    const url = (entry.link.find(l => l.rel === 'alternate') || {}).href;
                    if (!url) return;
                    const summaryDiv = document.createElement('div');
                    summaryDiv.innerHTML = entry.summary ? entry.summary.$t : '';
                    const summary = (summaryDiv.textContent || summaryDiv.innerText || '').trim().substring(0, 300);
                    context += `[Post ${index + 1}] Title: ${title} - Link: ${url} - Summary: ${summary}...\n`;
                });
                blogContentContext = context;
                isBlogContentLoaded = true;
            } catch (error) {
                console.error('Error fetching blog content:', error);
                blogContentContext = "Error: Could not load blog content.";
            }
        }
        
        function appendMessage(sender, message) {
            if (!chatBox) return;
            const messageDiv = document.createElement('div');
            messageDiv.className = `ai-chat-message ${sender}`;
            const botAvatar = `<div class="ai-chat-avatar"><svg class="ai-assistant-svg-icon" viewBox="0 0 200 200"><g fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="50" y="40" width="100" height="80" rx="20" ry="20" fill="#00BFA6" stroke="#008C7A" stroke-width="3"/><circle cx="80" cy="80" r="8" fill="#fff"/><circle cx="120" cy="80" r="8" fill="#fff"/><rect x="85" y="100" width="30" height="6" rx="3" fill="#ffffff" opacity="0.7"/><path d="M40 135c0-10 8-18 18-18h84c10 0 18 8 18 18v20c0 10-8 18-18 18H100l-15 15v-15H58c-10 0-18-8-18-18v-20z" fill="#E5FBF8" stroke="#00BFA6" stroke-width="2"/><rect x="70" y="140" width="60" height="6" rx="3" fill="#00BFA6" opacity="0.9"/><rect x="70" y="152" width="40" height="6" rx="3" fill="#00BFA6" opacity="0.6"/><line x1="100" y1="25" x2="100" y2="40" stroke="#008C7A" stroke-width="3"/><circle cx="100" cy="20" r="5" fill="#F9A825" stroke="#D68910" stroke-width="1"/></g></svg></div>`;
            const userAvatar = `<div class="ai-chat-avatar"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 240 240'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' x2='1' y1='0' y2='1'%3E%3Cstop offset='0' stop-color='%236db3f2'/%3E%3Cstop offset='1' stop-color='%234a90e2'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg transform='translate(120,120)'%3E%3Ccircle r='108' fill='url(%23g)'/%3E%3C/g%3E%3Cg transform='translate(120,120)'%3E%3Ccircle cx='0' cy='-24' r='28' fill='%23ffffff' fill-opacity='.95'/%3E%3Cpath d='M-56,64 C-56,36 -36,16 0,16 C36,16 56,36 56,64 L56,76 C56,88 44,100 0,100 C-44,100 -56,88 -56,76 Z' fill='%23ffffff' fill-opacity='.95'/%3E%3C/g%3E%3C/svg%3E" alt="User"/></div>`;
            
            let contentHTML;
            if (sender === 'bot-typing') {
                contentHTML = botAvatar + `<div class="ai-chat-bubble"><div class="typing-indicator"><span></span><span></span><span></span></div></div>`;
            } else {
                if (sender === 'bot') {
                    // تحويل الروابط وتنسيق النص
                    message = message.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\*(.*?)\*/g, '<em>$1</em>').replace(/(https?:\/\/[^\s]+)/g, '<a href="$1" target="_blank" rel="noopener noreferrer">$1</a>');
                }
                contentHTML = (sender === 'user' ? userAvatar : botAvatar) + `<div class="ai-chat-bubble"><p>${message}</p></div>`;
            }
            messageDiv.innerHTML = contentHTML;
            chatBox.appendChild(messageDiv);
            chatBox.scrollTop = chatBox.scrollHeight;
        }

        async function askGemini(question) {
            const apiKey = await getApiKeyFromPage();
            if (!apiKey) return 'عفواً، لم يتم تكوين مفتاح API للمساعد الذكي.';
            
            conversationHistory.push({ "role": "user", "parts": [{ "text": question }] });
            
            // ★★★ هذا هو البرومبت الكامل والمفصل ★★★
            const systemPrompt = `
            You are a smart and helpful AI assistant for the blog named "${document.title}".
            Your main goal is to answer visitor questions based on the blog's content provided below.
            
            **Instructions:**
            1. **Context:** Use the "Blog Content" section below to find answers.
            2. **Links:** If the answer is found in a specific post, YOU MUST provide the direct link to that post from the context.
            3. **Personality:** Be polite, professional, and concise.
            4. **General Questions:** If the user asks something not related to the blog, answer generally but briefly, and remind them you specialize in this blog's content.

            *** BLOG CONTENT ***
            ${blogContentContext}
            ********************
            `;
            
            const requestBody = { "contents": [{ "role": "user", "parts": [{ "text": systemPrompt }] }, { "role": "model", "parts": [{ "text": "حسناً، فهمت دوري. كيف يمكنني مساعدتك؟" }] }, ...conversationHistory] };

            try {
                const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(requestBody) });
                if (!response.ok) { conversationHistory.pop(); throw new Error((await response.json()).error.message); }
                const data = await response.json();
                const botResponse = data.candidates[0].content.parts[0].text;
                conversationHistory.push({ "role": "model", "parts": [{ "text": botResponse }] });
                return botResponse;
            } catch (error) {
                console.error('Gemini API Error:', error);
                return 'عفواً، حدث خطأ أثناء الاتصال. يرجى المحاولة لاحقاً.';
            }
        }

        // تشغيل الأزرار
        assistantButtons.forEach(btn => {
            if(btn) {
                btn.addEventListener('click', () => {
                    chatOverlay.classList.add('active');
                    if (!isBlogContentLoaded) fetchBlogContent();
                    setTimeout(() => chatInput.focus(), 300);
                });
            }
        });

        if (chatCloseButton) {
            chatCloseButton.addEventListener('click', (e) => {
                e.preventDefault();
                chatOverlay.classList.remove('active');
            });
        }
        
        chatOverlay.addEventListener('click', (e) => { 
            if (e.target === chatOverlay) chatOverlay.classList.remove('active'); 
        });

        if (chatForm) {
            chatForm.addEventListener('submit', async (e) => {
                e.preventDefault();
                const userQuestion = chatInput.value.trim();
                if (!userQuestion) return;
                
                appendMessage('user', userQuestion);
                chatInput.value = '';
                appendMessage('bot-typing', '');
                
                const botResponse = await askGemini(userQuestion);
                
                const typingIndicator = chatBox.querySelector('.ai-chat-message.bot-typing');
                if (typingIndicator) typingIndicator.remove();
                appendMessage('bot', botResponse);
            });
        }
    }
    // ------------------------------------------------------------------
    // -- [FEATURE 2] Text Clarification
    // ------------------------------------------------------------------
    const clarifyPostBody = document.querySelector('.single-post-body');
    const clarifyTooltip = document.getElementById('text-clarify-tooltip');
    const clarifyButton = document.getElementById('clarify-btn');
    if (clarifyPostBody && clarifyTooltip && clarifyButton) {
        let selectedText = '';
        
        const handleSelection = () => {
            setTimeout(() => {
                const selection = window.getSelection();
                const text = selection.toString().trim();
                if (text.length > 20 && text.length < 2000) {
                    selectedText = text;
                    const range = selection.getRangeAt(0);
                    const rect = range.getBoundingClientRect();
                    const topPos = rect.top + window.scrollY - clarifyTooltip.offsetHeight - 10;
                    clarifyTooltip.style.left = `${rect.left + rect.width / 2 + window.scrollX}px`;
                    clarifyTooltip.style.top = `${topPos < 0 ? rect.bottom + window.scrollY + 10 : topPos}px`;
                    clarifyTooltip.style.display = 'block';
                } else {
                    clarifyTooltip.style.display = 'none';
                }
            }, 50);
        };
        
        clarifyPostBody.addEventListener('mouseup', handleSelection);
        clarifyPostBody.addEventListener('touchend', handleSelection);
        document.addEventListener('mousedown', (e) => { if (!clarifyButton.contains(e.target)) clarifyTooltip.style.display = 'none'; });
        document.addEventListener('touchstart', (e) => { if (!clarifyButton.contains(e.target)) clarifyTooltip.style.display = 'none'; });

        clarifyButton.addEventListener('click', async () => {
            const modal = document.getElementById('ai-clarify-modal');
            const modalContent = document.getElementById('ai-clarify-content');
            const apiKey = await getApiKeyFromPage();

            if (!modal || !apiKey) {
                alert('خطأ: لا يمكن العثور على عناصر الواجهة أو مفتاح API.');
                return;
            }
            
            clarifyTooltip.style.display = 'none';
            modal.classList.add('active');
            modalContent.innerHTML = '';
            typeText("لحظة من فضلك، جارٍ تحليل النص...", modalContent, 40);

            const fullArticleContext = (document.getElementById('ai-post-context') || {}).textContent || '';
            const prompt = `مهمتك هي العمل كمساعد خبير في تحليل النصوص. سأعطيك نص مقال كامل، وفقرة محددة من هذا المقال. قم بشرح وتبسيط "الفقرة المحددة فقط" بطريقة واضحة ومباشرة باللغة العربية. استخدم "نص المقال الكامل" كمرجع أساسي لفهم السياق العام. لا تستخدم أي معلومات خارجية.\n---\nنص المقال الكامل:\n"${fullArticleContext}"\n---\nالفقرة المحددة المطلوب شرحها:\n"${selectedText}"`;
            
            try {
                // **FIX**: Corrected model name
                const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ "contents": [{ "parts": [{ "text": prompt }] }] }) });
                if (!response.ok) throw new Error((await response.json()).error.message);
                const data = await response.json();
                const aiResponse = data.candidates[0].content.parts[0].text;
                await typeText(aiResponse.replace(/\*/g, ''), modalContent, 15, true);
            } catch (error) {
                console.error('Gemini Clarification Error:', error);
                modalContent.innerHTML = 'عفواً، حدث خطأ. قد تكون الخدمة مضغوطة حاليًا، يرجى المحاولة مرة أخرى.';
            }
        });

        const modal = document.getElementById('ai-clarify-modal');
        const modalCloseBtn = document.getElementById('ai-clarify-close');
        if (modal && modalCloseBtn) {
            modalCloseBtn.addEventListener('click', () => modal.classList.remove('active'));
            modal.addEventListener('click', (e) => { if (e.target === modal) modal.classList.remove('active'); });
        }
    }

    // ------------------------------------------------------------------
    // -- [FEATURE 3] Post-Specific Q&A Box
    // ------------------------------------------------------------------
    const qaForm = document.getElementById('ai-post-qa-form');
    if (qaForm) {
        const qaInput = document.getElementById('ai-post-qa-input');
        const qaResponseContainer = document.getElementById('ai-post-qa-response');
        const postContextElement = document.getElementById('ai-post-context');
        
        qaForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const question = qaInput.value.trim();
            if (!question) return;

            const apiKey = await getApiKeyFromPage();
            if (!apiKey) {
                qaResponseContainer.style.display = 'block';
                qaResponseContainer.textContent = "خطأ في الإعدادات.";
                return;
            }

            qaResponseContainer.style.display = 'block';
            qaResponseContainer.classList.add('loading');
            qaResponseContainer.innerHTML = '';

            const postContentText = postContextElement.textContent || '';
            const prompt = `أنت مساعد ذكي متخصص في الإجابة على الأسئلة المتعلقة بمقال معين. مهمتك هي الإجابة على سؤال المستخدم بناءً على محتوى المقال المقدم لك فقط. لا تستخدم أي معلومات خارجية. إذا كان السؤال لا يمكن الإجابة عليه من النص، قل "عفواً، لا توجد إجابة على هذا السؤال في المقال". كن دقيقاً ومختصراً.\n\n---محتوى المقال---\n${postContentText}\n\n---سؤال المستخدم---\n${question}`;
            
            try {
                // **FIX**: Corrected model name
                const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ "contents": [{ "parts": [{ "text": prompt }] }] }) });
                if (!response.ok) throw new Error((await response.json()).error.message);
                const data = await response.json();
                const aiResponse = data.candidates[0].content.parts[0].text;
                qaResponseContainer.classList.remove('loading');
                await typeText(aiResponse.replace(/\*/g, ''), qaResponseContainer);
            } catch (error) {
                console.error('AI Q&A Error:', error);
                qaResponseContainer.classList.remove('loading');
                qaResponseContainer.textContent = 'عفواً، حدث خطأ. قد تكون الخدمة مضغوطة حاليًا، يرجى المحاولة مرة أخرى.';
            }
        });
    }

});

// --- فاصل للكود المدمج ---
;
// [V3 - FINAL] Auto-Generating Code Box Buttons
document.addEventListener('DOMContentLoaded', function() {
    const codeBoxes = document.querySelectorAll('.single-post-body .custom-code-box');

    // تعريف أيقونات SVG مرة واحدة هنا
    const icons = {
        copy: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>',
        download: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>',
        preview: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>'
    };

    codeBoxes.forEach(box => {
        const pre = box.querySelector('pre');
        const header = box.querySelector('.custom-code-box-header');
        const titleSpan = box.querySelector('.code-box-title');
        if (!pre || !header || !titleSpan) return;

        const lang = titleSpan.textContent.trim().toLowerCase();
        
        // إنشاء حاوية الأزرار
        const buttonsContainer = document.createElement('div');
        buttonsContainer.className = 'code-box-buttons';

        // 1. زر المعاينة (يظهر فقط للغات المدعومة)
        if (['html', 'css', 'javascript', 'js'].includes(lang)) {
            const previewBtn = document.createElement('button');
            previewBtn.innerHTML = icons.preview + '<span>معاينة</span>';
            previewBtn.title = 'معاينة الكود';
            previewBtn.addEventListener('click', () => { /* ... وظيفة المعاينة ... */ });
            buttonsContainer.appendChild(previewBtn);
            
            // وظيفة المعاينة
            previewBtn.addEventListener('click', function() {
                let htmlCode = '', cssCode = '', jsCode = '';
                const code = pre.textContent;
                if (lang === 'html') htmlCode = code;
                else if (lang === 'css') cssCode = code;
                else if (lang === 'javascript' || lang === 'js') jsCode = code;
                
                const overlay = document.createElement('div');
                overlay.className = 'code-preview-overlay';
                overlay.innerHTML = `<div class="code-preview-modal"><div class="code-preview-header"><button class="code-preview-close" title="إغلاق"></button></div><iframe class="code-preview-iframe"></iframe></div>`;
                document.body.appendChild(overlay);
                const iframe = overlay.querySelector('iframe');
                iframe.srcdoc = `<html><head><style>${cssCode}</style></head><body>${htmlCode}<script>${jsCode}<\/script></body></html>`;
                setTimeout(() => overlay.classList.add('visible'), 10);
                const closeModal = () => { overlay.classList.remove('visible'); setTimeout(() => overlay.remove(), 300); };
                overlay.querySelector('.code-preview-close').addEventListener('click', closeModal);
                overlay.addEventListener('click', (e) => { if (e.target === overlay) closeModal(); });
            });
        }

        // 2. زر التنزيل
        const downloadBtn = document.createElement('button');
        downloadBtn.innerHTML = icons.download + '<span>تنزيل</span>';
        downloadBtn.title = 'تنزيل الكود';
        downloadBtn.addEventListener('click', () => {
            const code = pre.textContent;
            const blob = new Blob([code], { type: 'text/plain' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url; a.download = `${lang}.txt`;
            document.body.appendChild(a); a.click();
            document.body.removeChild(a); URL.revokeObjectURL(url);
        });
        buttonsContainer.appendChild(downloadBtn);

        // 3. زر النسخ
        const copyBtn = document.createElement('button');
        copyBtn.innerHTML = icons.copy + '<span>نسخ</span>';
        copyBtn.title = 'نسخ الكود';
        copyBtn.addEventListener('click', () => {
            navigator.clipboard.writeText(pre.textContent).then(() => {
                const originalHTML = copyBtn.innerHTML;
                copyBtn.innerHTML = 'تم النسخ!';
                copyBtn.classList.add('copied');
                setTimeout(() => {
                    copyBtn.innerHTML = originalHTML;
                    copyBtn.classList.remove('copied');
                }, 2000);
            });
        });
        buttonsContainer.appendChild(copyBtn);
        
        // إضافة حاوية الأزرار إلى الهيدر
        header.appendChild(buttonsContainer);
    });
});

// --- فاصل للكود المدمج ---
;
// سكربت التحكم في السايدبار
(function() {
    // بنبحث عن "العلامة" اللي هنحطها في الأداة
    var sidebarMarker = document.getElementById('sidebar-status-active');
    
    // لو العلامة "مش موجودة" (يعني الأداة مقفولة)، بنضيف كلاس الإخفاء
    if (!sidebarMarker) {
        document.body.classList.add('hide-sidebar-mode');
    }
})();

// --- فاصل للكود المدمج ---
;
// تشغيل الأقسام الديناميكية *فقط* بعد أول سكرول (لتحسين الأداء وتأخير الظهور)
(function() {
    let executed = false;

    const triggerSections = () => {
        if (executed) return;
        if (typeof window.initDynamicPostSections === 'function') {
            window.initDynamicPostSections();
            executed = true;
            // إزالة المستمعات بعد التشغيل
            window.removeEventListener('scroll', triggerSections);
            window.removeEventListener('touchstart', triggerSections); // للموبايل
            window.removeEventListener('mousemove', triggerSections);
        }
    };

    // ننتظر تفاعل المستخدم
    window.addEventListener('scroll', triggerSections, { passive: true });
    window.addEventListener('touchstart', triggerSections, { passive: true });
    window.addEventListener('mousemove', triggerSections, { passive: true });
    
})();

// --- فاصل للكود المدمج ---
;
// [V-SIDEBAR] Logic
(function() {
    const trigger = document.getElementById('side-settings-trigger');
    const dock = document.getElementById('side-settings-dock');
    const closeBtn = document.getElementById('close-settings-dock');
    const themeBtn = document.getElementById('dock-theme-toggle');
    const aiBtn = document.getElementById('dock-ai-toggle');
    const fontControls = document.getElementById('dock-font-controls');
    
    // 1. فتح وإغلاق الشريط
    if (trigger && dock && closeBtn) {
        trigger.addEventListener('click', () => {
            dock.classList.add('active');
            document.body.classList.add('dock-open');
        });
        
        closeBtn.addEventListener('click', () => {
            dock.classList.remove('active');
            document.body.classList.remove('dock-open');
        });

        // إغلاق عند النقر خارجاً
        document.addEventListener('click', (e) => {
            if (!dock.contains(e.target) && !trigger.contains(e.target)) {
                dock.classList.remove('active');
                document.body.classList.remove('dock-open');
            }
        });
    }

    // 2. التحكم في الخط (يظهر فقط في المقال)
    const postBody = document.querySelector('.single-post-body');
    if (fontControls) {
        if (postBody) {
            fontControls.style.display = 'block'; // إظهار الأزرار
            
            const incBtn = document.getElementById('dock-font-inc');
            const decBtn = document.getElementById('dock-font-dec');
            const resetBtn = document.getElementById('dock-font-reset'); // زر الاستعادة الجديد
            
            // ★★★ التعديل: البدء دائماً من 100% وعدم القراءة من الذاكرة ★★★
            let currentSize = 100;

            const applySize = (size) => {
                postBody.style.fontSize = size + '%';
                // تم حذف سطر localStorage.setItem لعدم الحفظ
            };
            
            // التأكد من أن الخط يبدأ طبيعياً عند فتح الصفحة
            postBody.style.fontSize = '100%'; 

            if (incBtn) incBtn.onclick = () => { 
                if (currentSize < 160) applySize(currentSize += 10); 
            };
            
            if (decBtn) decBtn.onclick = () => { 
                if (currentSize > 80) applySize(currentSize -= 10); 
            };
            
            // ★★★ وظيفة زر الاستعادة ★★★
            if (resetBtn) resetBtn.onclick = () => {
                currentSize = 100;
                applySize(currentSize);
            };

        } else {
            fontControls.style.display = 'none'; // إخفاء في الرئيسية
        }
    }

    // 3. تشغيل الثيم
    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            const html = document.documentElement;
            const newTheme = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
            html.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }

    // 4. تشغيل المساعد الذكي
    if (aiBtn) {
        aiBtn.addEventListener('click', () => {
            const chatOverlay = document.getElementById('ai-chat-overlay');
            if (chatOverlay) chatOverlay.classList.add('active');
            // إغلاق الشريط الجانبي عند فتح الشات لعدم التشتيت
            dock.classList.remove('active');
            document.body.classList.remove('dock-open');
        });
    }

// 5. تشغيل زر الترجمة (المطور: مراقبة المحتوى الجديد + ترجمة شاملة وبدون قيود)
    const translateWrapper = document.querySelector('.translate-control-wrapper');
    const translateToggle = document.getElementById('translate-menu-toggle');
    const langButtons = document.querySelectorAll('.translate-lang-btn');
    const originalIcon = translateToggle ? translateToggle.innerHTML : '';

    if (translateWrapper && translateToggle) {
        
        // دالة الترجمة API
        async function translateTextAPI(text, targetLang) {
            const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`;
            try {
                const response = await fetch(url);
                const data = await response.json();
                return data[0].map(item => item[0]).join('');
            } catch (error) {
                return text;
            }
        }

        // دالة ذكية لتحديد العناصر (تمت إزالة القيود)
        function getTranslatableElements(container = document) {
            const selectors = [
                'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'a', 'span', 'li', 'button', 'label', 'td', 'th', 'strong', 'b', 'em', 'i', 'article', '.post-body', '.entry-content', '.widget-title'
            ];
            
            const elements = Array.from(container.querySelectorAll(selectors.join(',')));
            return elements.filter(el => {
                // شرط 1: لم يتم ترجمته، ليس أيقونة، ليس سكربت/ستايل
                if (el.hasAttribute('data-translated') || el.querySelector('svg') || el.tagName === 'SCRIPT' || el.tagName === 'STYLE') return false;
                
                // شرط 2: يحتوي على نص مباشر أو هو عنصر نصي نهائي (بدون قيود طول)
                const hasDirectText = Array.from(el.childNodes).some(node => node.nodeType === 3 && node.nodeValue.trim().length > 1);
                const isTextContainer = (el.children.length === 0 && el.innerText.trim().length > 1);

                return hasDirectText || isTextContainer;
            });
        }

        // دالة الترجمة الفعلية (بنظام الدفعات لتفادي التهنيج)
        async function translateElements(elements, targetLang) {
            if (elements.length === 0) return;

            // مؤشر التحميل
            translateToggle.innerHTML = '<span style="display:inline-block; width:20px; height:20px; border:2px solid #ccc; border-top-color:#333; border-radius:50%; animation:spin 0.8s linear infinite;"></span>';
            
            // تقسيم العناصر لدفعات (Batches) لضمان الأداء
            const batchSize = 15; 
            for (let i = 0; i < elements.length; i += batchSize) {
                const batch = elements.slice(i, i + batchSize);
                
                const batchPromises = batch.map(el => {
                    // هنا نأخذ النص بالكامل مهما كان طوله (بشرط معقولية الذاكرة)
                    // Google API يقبل حتى 5000 حرف في الطلب الواحد، وهو كافٍ لأي فقرة.
                    let text = el.innerText.trim();
                    if (text.length > 4000) text = text.substring(0, 4000); // أمان فقط

                    if (text.length > 1) { 
                        el.setAttribute('data-translated', 'true');
                        return translateTextAPI(text, targetLang).then(translated => {
                            if (translated) {
                                // إذا كان العنصر يحتوي على روابط بداخله، نحاول الحفاظ عليها (حالة خاصة)
                                if (el.children.length > 0) {
                                    // للأسف الاستبدال المباشر قد يحذف الروابط في العناصر المعقدة
                                    // لذا نكتفي بترجمة العقد النصية المباشرة للعناصر الحاوية
                                    el.childNodes.forEach(node => {
                                        if (node.nodeType === 3 && node.nodeValue.trim().length > 1) {
                                            translateTextAPI(node.nodeValue, targetLang).then(t => { if(t) node.nodeValue = t; });
                                        }
                                    });
                                } else {
                                    el.innerText = translated;
                                }
                            }
                        });
                    }
                });
                await Promise.all(batchPromises);
                await new Promise(r => setTimeout(r, 20)); // استراحة صغيرة للمتصفح
            }

            translateToggle.innerHTML = originalIcon;
        }

        let currentActiveLang = localStorage.getItem('site_lang');

        // المراقب الذكي (للمحتوى الجديد)
        const observer = new MutationObserver((mutations) => {
            if (!currentActiveLang || currentActiveLang === 'ar') return;

            mutations.forEach((mutation) => {
                mutation.addedNodes.forEach((node) => {
                    if (node.nodeType === 1) { 
                        const newElements = getTranslatableElements(node);
                        translateElements(newElements, currentActiveLang);
                    }
                });
            });
        });

        observer.observe(document.body, { childList: true, subtree: true });

        // التشغيل الأولي
        if (currentActiveLang && currentActiveLang !== 'ar') {
            const existingElements = getTranslatableElements(document);
            translateElements(existingElements, currentActiveLang);
        }

        // التعامل مع الأزرار
        langButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const targetLang = btn.getAttribute('data-lang');
                
                if (targetLang === 'ar') {
                    localStorage.setItem('site_lang', 'ar');
                    location.reload(); 
                } else {
                    localStorage.setItem('site_lang', targetLang);
                    currentActiveLang = targetLang;
                    const allElements = getTranslatableElements(document);
                    translateElements(allElements, targetLang);
                }
                translateWrapper.classList.remove('active');
            });
        });

        translateToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            translateWrapper.classList.toggle('active');
        });
        document.addEventListener('click', (e) => {
            if (!translateWrapper.contains(e.target)) translateWrapper.classList.remove('active');
        });
    }
})();

// --- فاصل للكود المدمج ---
;
function googleTranslateElementInit() {
  new google.translate.TranslateElement({
    pageLanguage: 'ar', 
    autoDisplay: false,
    includedLanguages: 'en,fr,es,de,ru,tr,zh-CN,ja,hi,ko' // اللغات المتاحة
  }, 'google_translate_element');
}

// --- فاصل للكود المدمج ---
;
// تأجيل تحميل ترجمة جوجل حتى يحتاجها المستخدم
var googleTranslateScriptLoaded = false;
function loadGoogleTranslate() {
    if (!googleTranslateScriptLoaded) {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
        document.body.appendChild(script);
        googleTranslateScriptLoaded = true;
    }
}

// تحميل السكربت فقط عند تحريك الماوس أو اللمس (توفير هائل للسرعة)
window.addEventListener('mousemove', loadGoogleTranslate, { once: true, passive: true });
window.addEventListener('touchstart', loadGoogleTranslate, { once: true, passive: true });
window.addEventListener('scroll', loadGoogleTranslate, { once: true, passive: true });

function googleTranslateElementInit() {
  new google.translate.TranslateElement({
    pageLanguage: 'ar', 
    autoDisplay: false,
    includedLanguages: 'en,fr,es,de,ru,tr,zh-CN,ja,hi,ko',
    layout: google.translate.TranslateElement.InlineLayout.SIMPLE
  }, 'google_translate_element');
}

// --- فاصل للكود المدمج ---
;
(function() {
    const openBtn = document.getElementById('open-share-modal');
if (!openBtn) return;
    const modal = document.getElementById('shareModal');
    const closeBtn = document.getElementById('close-share-modal');
    const urlInput = document.getElementById('share-url-input');
    const copyBtn = document.getElementById('copy-url-btn');
    const shareItems = document.querySelectorAll('.share-app-item');

    if (!openBtn || !modal) return;

    const currentUrl = window.location.href;
    const currentTitle = document.title;

    // 1. فتح النافذة
    openBtn.addEventListener('click', (e) => {
        e.preventDefault();
        modal.classList.add('active');
        if(urlInput) urlInput.value = currentUrl;
    });

    // 2. إغلاق النافذة
    if(closeBtn) {
        closeBtn.addEventListener('click', () => modal.classList.remove('active'));
    }
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.remove('active');
    });

    // 3. نسخ الرابط
    if(copyBtn && urlInput) {
        copyBtn.addEventListener('click', () => {
            urlInput.select();
            document.execCommand('copy');
            const originalText = copyBtn.innerText;
            copyBtn.innerText = 'Copied!';
            copyBtn.style.backgroundColor = '#28a745';
            setTimeout(() => {
                copyBtn.innerText = originalText;
                copyBtn.style.backgroundColor = '';
            }, 2000);
        });
    }

    // 4. روابط المشاركة الديناميكية
    shareItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const type = item.getAttribute('data-type');
            let shareUrl = '';

            switch(type) {
                case 'facebook': shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`; break;
                case 'twitter': shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(currentTitle)}`; break;
                case 'whatsapp': shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(currentTitle + ' ' + currentUrl)}`; break;
                case 'telegram': shareUrl = `https://t.me/share/url?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(currentTitle)}`; break;
                case 'linkedin': shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(currentUrl)}&title=${encodeURIComponent(currentTitle)}`; break;
                case 'pinterest': shareUrl = `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(currentUrl)}&description=${encodeURIComponent(currentTitle)}`; break;
                case 'reddit': shareUrl = `https://www.reddit.com/submit?url=${encodeURIComponent(currentUrl)}&title=${encodeURIComponent(currentTitle)}`; break;
                case 'tumblr': shareUrl = `https://www.tumblr.com/widgets/share/tool?canonicalUrl=${encodeURIComponent(currentUrl)}&title=${encodeURIComponent(currentTitle)}`; break;
                case 'email': shareUrl = `mailto:?subject=${encodeURIComponent(currentTitle)}&body=${encodeURIComponent(currentUrl)}`; break;
            }

            if(shareUrl) {
                window.open(shareUrl, '_blank', 'width=600,height=400');
            }
        });
    });
})();

// --- فاصل للكود المدمج ---
;
// [Smart Header Loader] تأجيل شكل الهيدر لما بعد السكرول
(function() {
    // 1. قراءة الشكل المختار من الإعدادات
    const configDiv = document.getElementById('header-style-data');
    let targetStyle = '0'; 
    
    if (configDiv) {
        const span = configDiv.querySelector('span');
        if (span) {
            let val = span.getAttribute('data-val');
            val = val.replace(/^(?:https?:\/\/[^\/]+\/)?/, '').replace(/^\//, ''); 
            targetStyle = val;
        }
    }

    // 2. لو الشكل المختار هو الافتراضي (0)، حمل عادي وماتعملش حاجة
    if (targetStyle === '0' || targetStyle === '') {
        return; 
    }

    // 3. لو الشكل (1 أو 2)، ما تطبقوش دلوقتي! استنى السكرول
    // دالة التفعيل (هتشتغل مرة واحدة بس)
    const activateHeaderStyle = () => {
        document.body.classList.add('header-style-' + targetStyle);
        // إزالة المستمعات عشان التخفيف
        window.removeEventListener('scroll', activateHeaderStyle);
        window.removeEventListener('mousemove', activateHeaderStyle);
        window.removeEventListener('touchstart', activateHeaderStyle);
    };

    // 4. استمع لأي حركة من المستخدم
    const userEvents = ['scroll', 'mousemove', 'touchstart', 'keydown'];
    userEvents.forEach(evt => window.addEventListener(evt, activateHeaderStyle, { passive: true, once: true }));

    // *ملحوظة:* للبوتات (عشان الأرشفة) بنحمل الشكل فوراً
    if (/bot|google|baidu|bing/i.test(navigator.userAgent)) {
        document.body.classList.add('header-style-' + targetStyle);
    }
})();

// --- فاصل للكود المدمج ---
;
(function() {
    // محاولة استرجاع الثيم المحفوظ فوراً
    var savedTheme = localStorage.getItem('theme');
    // إذا كان محفوظاً، طبقه فوراً قبل تحميل الصفحة
    if (savedTheme) {
      document.documentElement.setAttribute('data-theme', savedTheme);
    }
  })();

// --- فاصل للكود المدمج ---
;
// Super Aggressive Lazy Loader v3.0 (Final Attempt) - By MOPlus
(function() {
    const placeholderImage = 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==';

    const activateRealImages = () => {
        const lazyImages = document.querySelectorAll('img[data-real-src]');
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        const realSrc = img.getAttribute('data-real-src');
                        if (realSrc) {
                            const tempImg = new Image();
                            tempImg.src = realSrc;
                            tempImg.onload = () => {
                                img.src = realSrc;
                                img.classList.add('image-loaded');
                                img.removeAttribute('data-real-src');
                            };
                            tempImg.onerror = () => {
                                // In case the real image fails, it keeps the placeholder
                                img.classList.remove('lazy-image-placeholder');
                            };
                        }
                        observer.unobserve(img);
                    }
                });
            }, { rootMargin: "100px" }); // يبدأ التحميل قبل 100 بكسل من ظهور الصورة
            lazyImages.forEach(img => imageObserver.observe(img));
        }
    };

    const initializeLazyLoad = () => {
        // نستخدم MutationObserver لمراقبة أي صور جديدة تظهر (مهم جداً للأقسام الديناميكية)
        const observer = new MutationObserver((mutations) => {
            mutations.forEach(mutation => {
                mutation.addedNodes.forEach(node => {
                    if (node.tagName === 'IMG') {
                        processImage(node);
                    } else if (node.querySelectorAll) {
                        node.querySelectorAll('img').forEach(processImage);
                    }
                });
            });
        });

        const processImage = (img) => {
    // ========================================================== //
// == [الإصلاح] استثناء اللوجو + الطقس من التحميل الكسول == //
// ========================================================== //
// نستثني الهيدر، الفوتر، وأيقونات الطقس (w-icon و header-w-icon)
if (img.closest('#Header1, #Image100') || img.id === 'w-icon' || img.id === 'header-w-icon') {
    return; // توقف ولا تلمس هذه الصور
}
    // ========================================================== //

    // نتأكد أن الصورة لم تتم معالجتها من قبل
    if (img.hasAttribute('data-real-src') || img.classList.contains('image-loaded')) {
        return;
    }

    const originalSrc = img.src;
    if (!originalSrc || originalSrc.startsWith('data:image')) {
        return;
    }
    
    // احفظ الرابط الأصلي
    img.setAttribute('data-real-src', originalSrc);
    // استبدل بالصورة الوهمية
    img.src = placeholderImage;
    img.classList.add('lazy-image-placeholder');
};

        // ابدأ بمعالجة الصور الموجودة حالياً
        document.querySelectorAll('img').forEach(processImage);

        // ابدأ المراقبة
        observer.observe(document.body, { childList: true, subtree: true });

        // استمع لأول تفاعل لتفعيل التحميل
        ['scroll', 'mousemove', 'touchstart', 'keydown'].forEach(evt =>
            window.addEventListener(evt, () => {
                activateRealImages();
                observer.disconnect(); // أوقف المراقبة بعد أول تفاعل لتوفير الموارد
            }, { once: true, passive: true })
        );
    };
    
    // تأكد من أن الـ DOM جاهز قبل التشغيل
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeLazyLoad);
    } else {
        initializeLazyLoad();
    }
})();

// --- فاصل للكود المدمج ---
;
document.addEventListener("DOMContentLoaded", function() {
    // 1. تحديد العناصر
    const topFreeArea = document.getElementById("homepage-top-main-content");
    const sidebar = document.getElementById("the-one-sidebar");

    // التأكد من وجود العناصر قبل العمل
    if (topFreeArea && sidebar) {
        
        // 2. التحقق: هل المنطقة الحرة فيها محتوى حقيقي؟
        // بنشوف لو فيها أي "div" أو أدوات "widget"
        const hasWidgets = topFreeArea.querySelector('.widget') || topFreeArea.children.length > 0;
        const hasContent = topFreeArea.innerHTML.trim().length > 0; // زيادة تأكيد

        if (hasWidgets && hasContent) {
            // حالة 1: المنطقة فيها أشكال -> مسافة صغيرة
            sidebar.style.setProperty("margin-top", "30px", "important");
        } else {
            // حالة 2: المنطقة فاضية -> مسافة كبيرة (عشان المحاذاة)
            sidebar.style.setProperty("margin-top", "135px", "important");
        }
    }
});

// --- فاصل للكود المدمج ---
;
(function() {
    // -----------------------------------------------------------
    // 1. توليد ملف Manifest ديناميكي (خدعة بلوجر)
    // -----------------------------------------------------------
    const manifest = {
        "name": document.title,
        "short_name": document.title.substring(0, 12),
        "start_url": window.location.origin + "?pwa=true",
        "display": "standalone",
        "background_color": "#ffffff",
        "theme_color": "#3b82f6",
        "icons": [
            {
                "src": "https://blogger.googleusercontent.com/img/a/AVvXsEh7_Jfm5ufNEdJxbqv3zTb8x4x9JtMz0WzALxZUq_AmBQpRiDQahlybI_AH3lmROJxW50QnIY2sLaFiPWVY2ksj7SAqblFG_B7ldltTlpD3YOLzXnLJ8m9Q_amJz-QXXAUX7T-kxcuv3ZDpzYp6u4AahKQTMhDgpITRoqcsHhY5t6FhoJIfq4wa34N93fw=s192",
                "sizes": "192x192",
                "type": "image/png"
            },
            {
                "src": "https://blogger.googleusercontent.com/img/a/AVvXsEh7_Jfm5ufNEdJxbqv3zTb8x4x9JtMz0WzALxZUq_AmBQpRiDQahlybI_AH3lmROJxW50QnIY2sLaFiPWVY2ksj7SAqblFG_B7ldltTlpD3YOLzXnLJ8m9Q_amJz-QXXAUX7T-kxcuv3ZDpzYp6u4AahKQTMhDgpITRoqcsHhY5t6FhoJIfq4wa34N93fw=s512",
                "sizes": "512x512",
                "type": "image/png"
            }
        ]
    };
    const stringManifest = JSON.stringify(manifest);
    const blob = new Blob([stringManifest], {type: 'application/json'});
    const manifestURL = URL.createObjectURL(blob);
    let linkTag = document.createElement('link');
    linkTag.rel = 'manifest';
    linkTag.href = manifestURL;
    document.head.appendChild(linkTag);

    // -----------------------------------------------------------
    // 2. منطق الإشعارات وزر التثبيت
    // -----------------------------------------------------------
    const notifyBtn = document.getElementById('dock-notification-btn');
    const notifyPopup = document.getElementById('notification-popup');
    const notifyBadge = document.querySelector('.notify-badge');
    const triggerBtn = document.getElementById('side-settings-trigger');
    const contentArea = document.getElementById('notify-content-area');
    const storageKey = 'last_notification_seen'; 
    let latestPostUrl = '';
    let deferredPrompt; // لتخزين حدث التثبيت

    if (!notifyBtn || !contentArea) return;

    // جلب الإشعار
    async function fetchLatestNotification() {
        try {
            const res = await fetch('/feeds/posts/default?alt=json&max-results=1');
            const data = await res.json();
            
            if (data.feed.entry && data.feed.entry[0]) {
                const entry = data.feed.entry[0];
                const title = entry.title.$t;
                const link = entry.link.find(l => l.rel === 'alternate').href;
                latestPostUrl = link;
                
                let img = 'https://i.imgur.com/R9J34z6.png';
                if (entry.media$thumbnail) img = entry.media$thumbnail.url.replace(/\/s72-c\//, '/s100-c/');
                
                const html = `
                    <a href="${link}" class="notify-item">
                        <img src="${img}" class="notify-img" alt="${title}">
                        <div class="notify-text">
                            <h4>${title}</h4>
                            <span class="notify-time">مقال جديد 🔥</span>
                        </div>
                    </a>
                    
                    <!-- زر التثبيت (مخفي افتراضياً) -->
                    <div class="notify-item" id="pwa-install-btn" style="display:none; cursor:pointer; background-color:rgba(59, 130, 246, 0.1); border-top:1px dashed var(--border-color);">
                        <div class="notify-img" style="background:#3b82f6; display:flex; align-items:center; justify-content:center; color:#fff;">
                            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                        </div>
                        <div class="notify-text">
                            <h4 style="color:#3b82f6;">تثبيت التطبيق</h4>
                            <span class="notify-time">تثبيت فوري 🚀</span>
                        </div>
                    </div>
                `;
                contentArea.innerHTML = html;

                const lastSeen = localStorage.getItem(storageKey);
                if (lastSeen !== link) {
                    setTimeout(triggerNotification, 5000);
                }
            }
        } catch (e) { }
    }

    // ★★★ اللحظة الحاسمة: المتصفح جاهز للتثبيت ★★★
    window.addEventListener('beforeinstallprompt', (e) => {
        // 1. منع المتصفح من إظهار الشريط السفلي التلقائي
        e.preventDefault();
        // 2. حفظ الحدث لاستخدامه
        deferredPrompt = e;
        
        // 3. الآن فقط نظهر الزر في القائمة
        const btn = document.getElementById('pwa-install-btn');
        if(btn) {
            btn.style.display = 'flex'; // إظهار الزر
            
            // عند الضغط، شغل التثبيت فوراً
            btn.addEventListener('click', async () => {
                btn.style.display = 'none'; // إخفاء الزر عشان ميضغطش تاني
                deferredPrompt.prompt(); // إظهار نافذة التثبيت الأصلية
                const { outcome } = await deferredPrompt.userChoice;
                deferredPrompt = null;
            });
            
            // تنبيه الزائر أن هناك شيء جديد (التثبيت)
            triggerNotification(); 
        }
    });

    function triggerNotification() {
        if(triggerBtn) triggerBtn.classList.add('has-notification');
        if(notifyBadge) notifyBadge.style.display = 'block';
        notifyBtn.classList.add('ringing');
        setTimeout(() => notifyBtn.classList.remove('ringing'), 1000);
    }

    notifyBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        notifyPopup.classList.toggle('active');
        if (triggerBtn) triggerBtn.classList.remove('has-notification');
        if (notifyBadge) notifyBadge.style.display = 'none';
        if(latestPostUrl) localStorage.setItem(storageKey, latestPostUrl);
    });

    document.addEventListener('click', (e) => {
        if (!notifyBtn.contains(e.target)) notifyPopup.classList.remove('active');
    });

    fetchLatestNotification();
})();

// --- فاصل للكود المدمج ---
;
(function() {
    // دالة بناء وتشغيل الطقس (تعمل بعد السكرول فقط)
    const initWeatherSystem = () => {
        const isEnabled = document.getElementById('weather-feature-active');
        if (!isEnabled) return;

        // 1. حقن الـ HTML (الزر + النافذة) ديناميكياً
        const weatherHTML = `
            <!-- زر الطقس -->
            <button id='weather-btn' class='live-weather-widget' title='حالة الطقس' style='display:none;'>
                <img id='header-w-icon' src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' alt='Weather' />
                <span id='header-temp'>--°</span>
            </button>
            <!-- النافذة -->
            <div class='weather-modal-overlay' id='weather-modal'>
                <div class='weather-card'>
                    <div class='weather-header'>
                        <div class='weather-loc'>
                            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                            <span id='w-city'>القاهرة</span>
                            <button id='w-locate-btn' class='full-locate-btn'>
                               <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="22" y1="12" x2="18" y2="12"></line><line x1="6" y1="12" x2="2" y2="12"></line><line x1="12" y1="6" x2="12" y2="2"></line><line x1="12" y1="22" x2="12" y2="18"></line></svg>
                               تحديد الموقع
                            </button>
                        </div>
                        <button id='close-weather'>×</button>
                    </div>
                    <div class='weather-current'>
                        <img id='w-icon' src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' alt='Weather'/>
                        <div class='w-temp-box'><span id='w-temp'>--</span><span class='unit'>°C</span></div>
                        <div id='w-desc' class='w-desc'>--</div>
                        <div class='w-details'>
                            <span>💧 <span id='w-humidity'>--</span>%</span>
                            <span>💨 <span id='w-wind'>--</span> كم/س</span>
                        </div>
                    </div>
                    <div class='w-tabs'>
                        <button class='w-tab active' data-tab='hourly'>اليوم</button>
                        <button class='w-tab' data-tab='daily'>الأسبوع</button>
                    </div>
                    <div class='w-content-area'>
                        <div id='view-hourly' class='w-view active'><div class='w-hourly-scroll' id='w-hourly-list'></div></div>
                        <div id='view-daily' class='w-view'><div class='w-daily-list' id='w-daily-list'></div></div>
                    </div>
                    <div class='weather-footer'>Powered by Open-Meteo</div>
                </div>
            </div>
        `;
        
        // إضافة الكود للصفحة
        document.body.insertAdjacentHTML('beforeend', weatherHTML);

        // 2. تعريف المتغيرات بعد الحقن
        const btn = document.getElementById('weather-btn');
        const modal = document.getElementById('weather-modal');
        const closeBtn = document.getElementById('close-weather');
        const headerTemp = document.getElementById('header-temp');
        const headerIcon = document.getElementById('header-w-icon');
        const locateBtn = document.getElementById('w-locate-btn');
        const cityNameEl = document.getElementById('w-city');
        const searchBtn = document.getElementById('search-toggle-btn');
        const defaultLocation = { lat: 30.0444, lon: 31.2357, name: 'القاهرة' };

        // 3. وضع الزر في مكانه الصحيح (الهيدر أو القائمة)
        let lastWindowWidth = window.innerWidth;
        const adjustPosition = () => {
            const mobileMenu = document.querySelector('.site-header .main-nav');
            if (window.innerWidth <= 392) {
                if (mobileMenu && btn.parentNode !== mobileMenu) {
                    mobileMenu.appendChild(btn);
                    btn.style.cssText = `position: absolute !important; top: 20px !important; right: 20px !important; margin: 0 !important; display: flex !important; height: 40px !important; background: transparent !important; border: 1px solid var(--border-color) !important; color: var(--text-primary) !important; z-index: 1005 !important; padding: 0 12px !important; border-radius: 50px !important; width: auto !important;`;
                }
            } else {
                if (searchBtn && btn.nextElementSibling !== searchBtn) {
                    searchBtn.parentNode.insertBefore(btn, searchBtn);
                    btn.style.cssText = ''; 
                }
            }
        };
        // تنفيذ التموضع الأولي
        adjustPosition();

        // 4. منطق جلب البيانات
        const weatherCodes = {
            0: { desc: 'سماء صافية', icon: 'https://cdn-icons-png.flaticon.com/512/869/869869.png' },
            1: { desc: 'غائم جزئياً', icon: 'https://cdn-icons-png.flaticon.com/512/1163/1163624.png' },
            2: { desc: 'غائم جزئياً', icon: 'https://cdn-icons-png.flaticon.com/512/1163/1163624.png' },
            3: { desc: 'غائم', icon: 'https://cdn-icons-png.flaticon.com/512/414/414927.png' },
            45: { desc: 'ضباب', icon: 'https://cdn-icons-png.flaticon.com/512/4005/4005901.png' },
            48: { desc: 'ضباب كثيف', icon: 'https://cdn-icons-png.flaticon.com/512/4005/4005901.png' },
            51: { desc: 'رذاذ خفيف', icon: 'https://cdn-icons-png.flaticon.com/512/414/414927.png' },
            61: { desc: 'مطر خفيف', icon: 'https://cdn-icons-png.flaticon.com/512/1163/1163657.png' },
            63: { desc: 'مطر متوسط', icon: 'https://cdn-icons-png.flaticon.com/512/1163/1163657.png' },
            65: { desc: 'مطر غزير', icon: 'https://cdn-icons-png.flaticon.com/512/1163/1163657.png' },
            80: { desc: 'زخات مطر', icon: 'https://cdn-icons-png.flaticon.com/512/1163/1163657.png' },
            95: { desc: 'عاصفة رعدية', icon: 'https://cdn-icons-png.flaticon.com/512/1146/1146860.png' }
        };
        function getWeatherIcon(code) { return weatherCodes[code] ? weatherCodes[code].icon : weatherCodes[0].icon; }
        function getWeatherDesc(code) { return weatherCodes[code] ? weatherCodes[code].desc : 'غير معروف'; }

        async function fetchWeather(lat, lon, cityName = null) {
            try {
                if (!cityName) {
                    cityNameEl.textContent = '...';
                    try {
                        const geoRes = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=ar`);
                        const geoData = await geoRes.json();
                        cityName = geoData.city || geoData.locality || "موقعك";
                    } catch(e) { cityName = "موقعك"; }
                }
                cityNameEl.textContent = cityName;

                const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}\u0026current_weather=true&hourly=temperature_2m,weathercode&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=auto`);
                const data = await res.json();

                const current = data.current_weather;
                const temp = Math.round(current.temperature);
                
                headerTemp.textContent = `${temp}°`;
                headerIcon.src = getWeatherIcon(current.weathercode);
                
                // إظهار الزر الآن فقط
                btn.style.display = 'flex';

                document.getElementById('w-temp').textContent = temp;
                document.getElementById('w-desc').textContent = getWeatherDesc(current.weathercode);
                document.getElementById('w-icon').src = getWeatherIcon(current.weathercode);
                document.getElementById('w-wind').textContent = current.windspeed;
                document.getElementById('w-humidity').textContent = '50';

                let hourlyHTML = '';
                const currentHour = new Date().getHours();
                for(let i = currentHour; i < currentHour + 24; i++) {
                    if (!data.hourly.temperature_2m[i]) break; 
                    const hTemp = Math.round(data.hourly.temperature_2m[i]);
                    const hCode = data.hourly.weathercode[i];
                    const hTime = i % 24;
                    const timeLabel = hTime === currentHour ? 'الآن' : `${hTime % 12 || 12} ${hTime >= 12 ? 'م' : 'ص'}`;
                    
                    hourlyHTML += `<div class="hourly-item"><div style="font-weight:700; margin-bottom:5px;">${timeLabel}</div><img src="${getWeatherIcon(hCode)}" style="display:block; margin:0 auto; width:30px; height:30px;"/><div style="font-weight:700;">${hTemp}°</div></div>`;
                }
                document.getElementById('w-hourly-list').innerHTML = hourlyHTML;

                let dailyHTML = '';
                const days = ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'];
                for(let i = 0; i < 7; i++) {
                    if (!data.daily.temperature_2m_max[i]) break;
                    const dCode = data.daily.weathercode[i];
                    const dDate = new Date(); dDate.setDate(dDate.getDate() + i);
                    const dayName = i === 0 ? 'اليوم' : days[dDate.getDay()];
                    dailyHTML += `<div class="daily-item"><span>${dayName}</span><div><img src="${getWeatherIcon(dCode)}"/><span>${Math.round(data.daily.temperature_2m_max[i])}° / ${Math.round(data.daily.temperature_2m_min[i])}°</span></div></div>`;
                }
                document.getElementById('w-daily-list').innerHTML = dailyHTML;

            } catch (e) { }
        }

        // تشغيل (القيم المحفوظة أو الافتراضية)
        const savedLat = localStorage.getItem('w-lat');
        const savedLon = localStorage.getItem('w-lon');
        const savedCity = localStorage.getItem('w-city');
        if (savedLat && savedLon) fetchWeather(savedLat, savedLon, savedCity);
        else fetchWeather(defaultLocation.lat, defaultLocation.lon, defaultLocation.name);

        // التفاعلات
        locateBtn.addEventListener('click', () => {
            if (!navigator.geolocation) { alert('غير مدعوم'); return; }
            cityNameEl.textContent = '...';
            navigator.geolocation.getCurrentPosition(
                (pos) => {
                    const { latitude, longitude } = pos.coords;
                    localStorage.setItem('w-lat', latitude);
                    localStorage.setItem('w-lon', longitude);
                    localStorage.removeItem('w-city');
                    fetchWeather(latitude, longitude);
                },
                (err) => { cityNameEl.textContent = defaultLocation.name; alert('يرجى السماح بالموقع.'); }
            );
        });

        const tabs = document.querySelectorAll('.w-tab');
        tabs.forEach(t => {
            t.addEventListener('click', () => {
                tabs.forEach(x => x.classList.remove('active'));
                t.classList.add('active');
                document.querySelectorAll('.w-view').forEach(v => v.classList.remove('active'));
                document.getElementById(`view-${t.dataset.tab}`).classList.add('active');
            });
        });

        btn.addEventListener('click', () => modal.classList.add('active'));
        closeBtn.addEventListener('click', () => modal.classList.remove('active'));
        modal.addEventListener('click', (e) => { if(e.target === modal) modal.classList.remove('active'); });
        
        window.addEventListener('resize', () => {
            if (window.innerWidth !== lastWindowWidth) {
                lastWindowWidth = window.innerWidth;
                adjustPosition();
            }
        });
    };

    // --- منطق التشغيل الكسول الصارم ---
    let fired = false;
    const trigger = () => {
        if(fired) return;
        fired = true;
        
        // شغل الطقس
        initWeatherSystem();
        
        // نظف المستمعات
        ['scroll', 'mousemove', 'touchstart', 'keydown'].forEach(e => 
            window.removeEventListener(e, trigger)
        );
    };

    // استمع لأي حركة
    ['scroll', 'mousemove', 'touchstart', 'keydown'].forEach(e => 
        window.addEventListener(e, trigger, { passive: true, once: true })
    );

})();

// --- فاصل للكود المدمج ---
;
(function() {
    const timerSeconds = 15;

    // 1. جلب رابط عشوائي وتعديل الروابط
    let randomPostUrl = null;
    fetch('/feeds/posts/summary?alt=json&max-results=50')
        .then(res => res.json())
        .then(data => {
            if (data.feed && data.feed.entry) {
                const posts = data.feed.entry;
                const randomPost = posts[Math.floor(Math.random() * posts.length)];
                randomPostUrl = randomPost.link.find(l => l.rel === 'alternate').href;
                setTimeout(applyRedirectLinks, 1000); // تأخير بسيط لضمان التحميل
            }
        });

    function applyRedirectLinks() {
        if (!randomPostUrl) return;
        if (window.location.search.includes('redirect=')) return; // منع التكرار

        const postBodies = document.querySelectorAll('.post-body, .single-post-body');
        postBodies.forEach(body => {
            body.querySelectorAll('a').forEach(link => {
                const href = link.getAttribute('href');
                if (!href) return;
                if (href.includes(window.location.hostname) || href.startsWith('#') || href.startsWith('javascript') || href.startsWith('mailto')) return;
                
                const targetCode = btoa(href);
                link.href = `${randomPostUrl}?redirect=${targetCode}`;
                link.target = '_blank';
            });
        });
    }

    // 2. إظهار العداد (الجزء المعدل)
    function showRedirectBox() {
        const params = new URLSearchParams(window.location.search);
        const encodedTarget = params.get('redirect');

        // إذا لم يكن هناك رابط تحويل، توقف
        if (!encodedTarget) return;

        // ★★★ هنا التعديل: البحث عن أي مكان متاح لوضع العداد ★★★
        // نجرب عدة أماكن محتملة، الأول الذي نجده نستخدمه
        let targetContainer = document.querySelector('.post-body') || 
                              document.querySelector('.single-post-body') || 
                              document.querySelector('.entry-content') || 
                              document.querySelector('.post-outer') || 
                              document.querySelector('.blog-posts');

        if (!targetContainer) {
            console.error("Redirect Box: لم يتم العثور على مكان لوضع العداد!");
            return;
        }

        const style = document.createElement('style');
        style.innerHTML = `
            .redirect-wrapper { background: #fff; border: 2px solid #3b82f6; border-radius: 12px; padding: 25px; text-align: center; margin-bottom: 30px; box-shadow: 0 5px 20px rgba(0,0,0,0.05); font-family: sans-serif; }
            [data-theme='dark'] .redirect-wrapper { background: #1e293b; border-color: #3b82f6; color: #fff; }
            .timer-circle { position: relative; width: 70px; height: 70px; margin: 15px auto; }
            .circular-chart { display: block; margin: 0 auto; max-width: 100%; max-height: 100%; }
            .circle-bg { fill: none; stroke: #eee; stroke-width: 3.5; }
            .circle { fill: none; stroke-width: 3.5; stroke-linecap: round; stroke: #3b82f6; transition: stroke-dasharray 1s linear; }
            #timer-count { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: 20px; font-weight: bold; }
            .redirect-btn { display: inline-block; padding: 10px 25px; background: #3b82f6; color: #fff; border-radius: 50px; text-decoration: none; font-weight: bold; margin-top: 15px; transition: 0.3s; opacity: 0.6; pointer-events: none; }
            .redirect-btn.ready { opacity: 1; pointer-events: auto; cursor: pointer; box-shadow: 0 5px 15px rgba(59, 130, 246, 0.4); }
        `;
        document.head.appendChild(style);

        const box = document.createElement('div');
        box.className = 'redirect-wrapper';
        box.innerHTML = `
            <h3 style="margin:0 0 10px 0; font-size:18px;">جاري تجهيز الرابط...</h3>
            <div style="background:#f5f5f5; padding:15px; border-radius:8px; color:#777; font-size:12px;">مساحة إعلانية</div>
            <div class="timer-circle">
                <svg viewBox="0 0 36 36" class="circular-chart"><path class="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /><path class="circle" stroke-dasharray="100, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /></svg>
                <span id="timer-count">${timerSeconds}</span>
            </div>
            <a id="go-link-btn" href="#" class="redirect-btn">الرابط جاهز</a>
            <p style="margin-top:10px; font-size:13px; opacity:0.8;">تابع القراءة بالأسفل 👇</p>
        `;

        // الحقن في أول الحاوية (prepend)
        targetContainer.insertBefore(box, targetContainer.firstChild);
        
        // التمرير للصندوق
        setTimeout(() => box.scrollIntoView({ behavior: 'smooth', block: 'center' }), 500);

        let timeLeft = timerSeconds;
        const timerEl = document.getElementById('timer-count');
        const btnEl = document.getElementById('go-link-btn');
        const circlePath = box.querySelector('.circle');
        
        let realUrl = '/';
        try { realUrl = atob(encodedTarget); } catch(e) {}
        btnEl.href = realUrl;

        const countdown = setInterval(() => {
            timeLeft--;
            if(timerEl) timerEl.textContent = timeLeft;
            const percent = (timeLeft / timerSeconds) * 100;
            if(circlePath) circlePath.style.strokeDasharray = `${percent}, 100`;

            if (timeLeft <= 0) {
                clearInterval(countdown);
                if(btnEl) {
                    btnEl.classList.add('ready');
                    btnEl.textContent = 'اضغط هنا للذهاب';
                }
            }
        }, 1000);
    }

    // التنفيذ الفوري عند تحميل الـ DOM
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', showRedirectBox);
    } else {
        showRedirectBox();
    }

})();

// --- فاصل للكود المدمج ---
;
// دالة بناء القائمة والميجا منيو (نظيفة)
async function buildDropdownMenu() {
    const navMenu = document.querySelector('.main-nav .LinkList ul');
    if (!navMenu) return;

    const menuItems = Array.from(navMenu.querySelectorAll('li'));

    const getPostUrl = (post) => (post && post.link) ? (post.link.find(link => link.rel === 'alternate') || {}).href || '#' : '#';
    
    const getPostImage = (post) => {
        let img = 'https://i.imgur.com/R9J34z6.png';
        if (post && post.media$thumbnail && post.media$thumbnail.url) {
            img = post.media$thumbnail.url;
        } else if (post && post.content && post.content.$t) {
            const match = post.content.$t.match(/src="([^"]+)"/);
            if (match && match[1]) { img = match[1]; }
        }
        if (img.includes('blogspot') || img.includes('googleusercontent') || img.includes('ggpht')) {
            try { return img.replace(/\/(s|w)\d+.*?(-c)?\//, '/s1600/').replace(/=s\d+.*/, '=s1600'); } catch(e) { return img; }
        }
        return img;
    };

    let lastParentLi = null;

    for (let i = 0; i < menuItems.length; i++) {
        const item = menuItems[i];
        const link = item.querySelector('a');
        if (!link) continue;

        const linkText = link.textContent.trim();

        if (linkText.toLowerCase().startsWith('[mega]')) {
            lastParentLi = item;
            item.classList.add('has-megamenu');
            const categoryName = linkText.replace(/\[mega\]/i, '').trim();
            link.textContent = categoryName;
            
            const megaWrapper = document.createElement('div');
            megaWrapper.className = 'megamenu-wrapper';
            megaWrapper.innerHTML = `<div class="megamenu-posts"><h3 class="megamenu-title">أحدث المقالات في ${categoryName}</h3><div class="megamenu-posts-slider"><p>جاري التحميل...</p></div></div>`;
            item.appendChild(megaWrapper);
            
            const sliderContainer = megaWrapper.querySelector('.megamenu-posts-slider');
            try {
                const response = await fetch(`/feeds/posts/default/-/${encodeURIComponent(categoryName)}?alt=json&max-results=3`);
                const data = await response.json();
                if (data.feed && data.feed.entry) {
                    const postsHTML = data.feed.entry.map(p => `<a href="${getPostUrl(p)}" class="mm-post-card"><div class="mm-post-card-img-wrapper"><img src="${getPostImage(p)}" alt="${p.title.$t}" loading="lazy"/></div><h4 class="mm-post-card-title">${p.title.$t}</h4></a>`).join('');
                    sliderContainer.innerHTML = postsHTML;
                } else { sliderContainer.innerHTML = '<p>لا توجد مقالات.</p>'; }
            } catch (error) { sliderContainer.innerHTML = '<p>خطأ.</p>'; }

        } else if (linkText.startsWith('_')) {
            if (lastParentLi && !lastParentLi.classList.contains('has-megamenu')) {
                lastParentLi.classList.add('has-dropdown');
                let subMenu = lastParentLi.querySelector('.submenu');
                if (!subMenu) {
                    subMenu = document.createElement('ul');
                    subMenu.className = 'submenu';
                    lastParentLi.appendChild(subMenu);
                }
                link.textContent = linkText.substring(1).trim();
                subMenu.appendChild(item);
                menuItems.splice(i, 1);
                i--;
            }
        } else {
            lastParentLi = item;
        }
    }
    navMenu.querySelectorAll('li:empty').forEach(li => li.remove());
}

document.addEventListener('DOMContentLoaded', function() {
    buildDropdownMenu();
});
//]]>
