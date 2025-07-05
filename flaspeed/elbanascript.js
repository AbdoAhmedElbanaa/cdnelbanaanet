Element.prototype.appendElements = function (_0x3287dc, _0x42a511 = 'append') {
    try {
        const _0x44ac68 = document.createElement('template');
        _0x44ac68.innerHTML = _0x3287dc, Array.from(_0x44ac68.content.children).forEach((_0x446d5c, _0x77793f) => {
            if (_0x446d5c.nodeName === 'SCRIPT') {
                const _0x2d6269 = document.createElement('script');
                if (_0x446d5c.src !== '') _0x2d6269.src = _0x446d5c.src;
                if (_0x446d5c.async !== undefined) _0x2d6269.async = _0x446d5c.async;
                if (_0x446d5c.defer !== undefined) _0x2d6269.defer = _0x446d5c.defer;
                if (_0x446d5c.textContent !== '') _0x2d6269.textContent = _0x446d5c.textContent;
                this.insertElementAtPosition(_0x2d6269, _0x42a511);
            }
            else this.insertElementAtPosition(_0x446d5c, _0x42a511);
        });
    }
    catch (_0x3d65be) {
        console.error('Error in appendElements:', _0x3d65be);
    }
}, Element.prototype.insertElementAtPosition = function (_0x3f35dc, _0x1dcff8) {
    try {
        switch (_0x1dcff8) {
            case 'before':
                this.parentNode && this.parentNode.insertBefore(_0x3f35dc, this);
                break;
            case 'after':
                if (this.parentNode) {
                    this.parentNode.insertBefore(_0x3f35dc, this.nextSibling);
                }
                break;
            case 'prepend':
                this.insertBefore(_0x3f35dc, this.firstChild);
                break;
            case 'append':
            default:
                this.appendChild(_0x3f35dc);
                break;
        }
    }
    catch (_0x834a34) {
        console.error('Error inserting element:', _0x834a34);
    }
};
(function () {
    let _0xd63660 = {},
        _0xc490eb = ['<div class="errorFetch">هناك خطأ مØ§...</div>', '<div class="noFetch">' + Msg.noResultsFound + '</div>'],
        _0x4f0e0b = 0;

    PostCount = typeof PostCount !== 'undefined' ? PostCount : 0, feed_count = Math.ceil(PostCount / 150);
    if (typeof _bl !== 'undefined') {
        for (let _0x22ebed = 0; _0x22ebed < _bl.length; _0x22ebed++) {
            const _0x398b41 = _bl[_0x22ebed];
            _0xd63660[_0x398b41.split(':')[0]] = parseInt(_0x398b41.split(':')[1]);
        }
    }
    else _0xd63660 = {};
    const _0x2327e9 = {};
    _0x2327e9.once = true, window.addEventListener('scroll', () => _0xedd063(), _0x2327e9);
    if (CookiesAllow) _0x2bb35c();
    _0x519b10(), _0x310007(), _0x1c50d1();
    if (!HeaderFixed && NavbarFixed && MenuFixed || HeaderFixed && NavbarFixed && MenuFixed || HeaderFixed) {
        _0x1a9c8d(document.querySelector('#BlogHeader')), document.querySelector('#BlogHeader .navbar').style.background = 'transparent', document.querySelector('#BlogHeader .MainMenu-Contianer').style.background = 'transparent';
    }
    else {
        if (NavbarFixed) _0x1a9c8d(document.querySelector('#BlogHeader .navbar'));
        else {
            if (MenuFixed) {
                _0x1a9c8d(document.querySelector('#BlogHeader .MainMenu-Contianer'));
            }
        }
    }
    if (!!localStorage.getItem('flaSpeed')) {
        const _0x18d6f6 = {};
        _0x18d6f6.type = 'run', _0x2eb3d5(_0x18d6f6);
    }
    else _0x2eb3d5(cateEvent);
    isSingleItem && (_0x123179(), document.querySelector('#LinkList170') && _0x18ed78());
    isPost && (_0x2b0c48(), _0x31a70c());
    isPage && (_0x371d26(), _0x42396d());
    AdblockDc && _0x50d243(), window.addEventListener('scroll', () => {
        const _0x42e1d7 = document.querySelector('#scrollToTop');
        if (!_0x42e1d7) return;
        window.scrollY === 0 ? _0x42e1d7?.['classList']['remove']('show') : _0x42e1d7?.['classList']['add']('show');
    });

    function _0x2bb35c() {
    getScript('/js/cookienotice.js', function () {
        function _0x17a5b4(_0x937998) {
            return typeof CookieList !== 'undefined' && !!CookieList?.[_0x937998];
        }

        window.cookieChoices && cookieChoices.showCookieConsentBar && cookieChoices.showCookieConsentBar(
            (window.cookieOptions && cookieOptions.msg) || decodeEntities(Msg.euCookieNotice2018),
            (window.cookieOptions && cookieOptions.close) || decodeEntities(Msg.ok),
            (window.cookieOptions && cookieOptions.learn) || decodeEntities(Msg.learnMore),
            (window.cookieOptions && cookieOptions.link) || (_0x17a5b4(0) ? CookieList[0] : 'https://policies.google.com/technologies/cookies')
        );
    }, 'defer');
};


    function _0x519b10() {
        const _0x125c99 = document.querySelectorAll('a[href*="search/label/"]:not([href*="max-results"])');
        for (let _0x585314 = 0; _0x585314 < _0x125c99.length; _0x585314++) {
            const _0x1f9183 = _0x125c99[_0x585314],
                _0x4c76a = new URL(_0x1f9183.href),
                _0x13597c = _0x4c76a.searchParams.get('max-results');
            if (_0x13597c) {
                _0x4c76a.searchParams.set('max-results', getMaxResults);
            }
            else _0x4c76a.searchParams.append('max-results', getMaxResults);
            _0x1f9183.href = _0x4c76a.toString();
        }
    }

    function _0xedd063() {
        const _0x21a58a = document.querySelector('#blogger-components'),
            _0x5d01b8 = _0x21a58a.innerHTML.replace(/<!--|-->/g, ''),
            _0xe01a6f = (_0x5d01b8.match(/http.+?widgets\.js/) || [])[0],
            _0x2c1ee0 = '/js/cookienotice.js',
            _0xbf9472 = (_0x5d01b8.match(/<script type='text\/javascript'>([\s\S]*?)<\/script>/) || [])[1];
        let _0x31ec14 = _0x5d01b8.match(/<script>([\s\S]*?)<\/script>/g),
            _0x46220a = '';
        _0x31ec14 && getScript(_0x2c1ee0, function () {
            for (let _0x113462 = 0; _0x113462 < _0x31ec14.length; _0x113462++) {
                const _0x128be9 = _0x31ec14[_0x113462],
                    _0x3fea5d = _0x128be9.replace(/<\/?script>/g, ''),
                    _0x4353f3 = _0x3fea5d.match(/(window|\(window)[\s\S]*/);
                _0x4353f3 && (_0x46220a += _0x4353f3[0]);
            }
            new Function(_0x46220a)();
        }), _0xe01a6f && _0xbf9472 && getScript(_0xe01a6f, function () {
            new Function(_0xbf9472)(), BlogId = _WidgetManager._GetAllData().blog.blogId;
            isSingleItem && document.head.insertAdjacentHTML('beforeend', '<link rel="stylesheet" href="https://www.blogger.com/dyn-css/authorization.css?targetBlogID=' + BlogId + '">');
        });
    }
    document.querySelector('.LastComments') && document.querySelectorAll('.LastComments').forEach(_0x3ef4c5 => {
        const _0x5b6166 = _0x3ef4c5.hasAttribute('data-num') ? _0x3ef4c5.getAttribute('data-num') : '5';
        fetchData(BlogUrl + 'feeds/comments/default?alt=json&start-index=1&max-results=' + _0x5b6166, function () { }, function (_0x3ec6e1) {
            const _0x1bbb89 = _0x3ec6e1.feed.entry;
            let _0x36e934 = '';
            for (let _0x554143 = 0; _0x554143 < _0x1bbb89.length; _0x554143++) {
                const _0x42f70f = _0x1bbb89[_0x554143],
                    _0x3df926 = _0x42f70f.link.filter(function (_0x157a0f) {
                        return _0x157a0f.rel == 'alternate';
                    })[0].href,
                    _0x2ec7b5 = _0x42f70f.author[0].name !== undefined ? decodeURIComponent(_0x42f70f.author[0].name.$t) : 'غير معرف',
                    _0x59b980 = _0x42f70f.author[0].gd$image.src.includes('blank.gif') || _0x42f70f.author[0].gd$image.src.includes('rounded.gif') || _0x42f70f.author[0].gd$image.src.includes('blogger_logo_round') || _0x42f70f.author[0].gd$image.src.includes('img1.blogblog.com') ? AltAuthor.replace(/\/s.*?\//, '/s40-c/') : _0x42f70f.author[0].gd$image.src.replace(/\/s.*?\//, '/s40-c/'),
                    _0x40b7dc = _0x42f70f.summary !== undefined ? _0x42f70f.summary.$t.replace(/(<.*?>|\[.*?\])/g, '') : _0x42f70f.content.$t.replace(/(<.*?>|\[.*?\])/g, ''),
                    _0x550131 = _0x42f70f.author[0].uri.$t && _0x42f70f.author[0].uri.$t ? _0x42f70f.author[0].uri.$t : null,
                    _0x263f65 = _0x42f70f.published.$t,
                    _0x5d508e = _0x42f70f.updated.$t,
                    _0x467121 = timeAgo ? langDate(_0x5d508e) : JcommentDate.slice(8, 10) + ' ' + langDate(_0x263f65) + ' ' + _0x263f65.slice(0, 4),
                    _0x37fa91 = _0x550131 ? '<span class="comment-author"><a href="' + _0x550131 + '" class="comment-user" target="_blank" rel="nofollow noreferrer">' + _0x2ec7b5 + '</a></span>' : '<span class="comment-author">' + _0x2ec7b5 + '</span>',
                    _0x2ae14b = document.createElement('div');
                _0x2ae14b.innerHTML = _0x40b7dc;
                let _0x5b6d5e = _0x2ae14b.textContent;
                _0x5b6d5e = _0x5b6d5e.replace(/(https?:\/\/[^\s<>"']+)/g, function (_0x29f233) {
                    const _0x5c27a6 = _0x149e5b => /\.(jpeg|jpg|webp|gif|png)(\?[^\s]*)?$/i.test(_0x149e5b) || /https:\/\/(?:[0-4]\.)?bp\.blogspot\.com[^\s]*/.test(_0x149e5b) || /https:\/\/(?:lh[3-6]\.)?googleusercontent\.com[^\s]*/.test(_0x149e5b) || /https:\/\/blogger\.googleusercontent\.com[^\s]*/.test(_0x149e5b),
                        _0xfc86df = _0x569bb8 => /https:\/\/(?:www\.)?(youtube\.com\/(watch\?v=|embed\/)|youtu\.be\/)[^\s<]+/.test(_0x569bb8),
                        _0x519753 = new RegExp('<a[^>]+href=["\']' + _0x29f233 + '["\'][^>]*?>', 'i').test(_0x5b6d5e);
                    if (_0x519753) return _0x29f233;
                    if (_0xfc86df(_0x29f233)) {
                        return '<span class="attachment att-vid">[فيديو]</span>';
                    }
                    if (_0x5c27a6(_0x29f233)) return '<span class="attachment att-pic">[' + Msg.image + ']</span>';
                    return '<a class="elbananetlink" href="' + _0x29f233 + '" target="_blank" rel="nofollow noreferrer noopener">' + ExtLink + '</a>';
                }), _0x36e934 += '\n<li class="comment">\n<div class="post-image">\n<div class="comments-image Lazy image smimg">\n<img class="lazyload" data-size="auto" title="' + _0x2ec7b5 + ' avatar" alt="' + _0x2ec7b5 + ' avatar" data-src="' + _0x59b980 + '"/>\n</div>\n</div>\n<div class="info-comment">\n' + _0x37fa91 + '\n<div class="details">\n<span class="post-date">\n<time datetime="' + _0x5d508e + '" title="' + _0x5d508e + '">' + _0x467121 + '</time>\n</span>\n</div>\n<p>' + _0x5b6d5e + '</p>\n<a class="LeaveComment codi-btn waves-effect" href="' + _0x3df926 + '">' + Msg.leaveComment + '</a>\n</div>\n</li>\n';
            }
            _0x3ef4c5.innerHTML = _0x36e934;
            const _0x2adcc0 = _0x3ef4c5.querySelectorAll('p a');
            _0x2adcc0.length && _0x2adcc0.forEach(_0x32feda => {
                !_0x32feda.classList.contains('elbananetlink') && _0x32feda.classList.add('elbananetlink');
            });
        }, function (_0x253e5c) {
            _0x3ef4c5.innerHTML = '<div class="errorFetch">هناك خطأ مØ§...</div>';
        });
    });

    function _0x1c50d1() {
        document.querySelector('.acc-head') && document.querySelectorAll('.acc-head').forEach(function (_0x25a0c7) {
            _0x25a0c7.addEventListener('click', function () {
                this.siblings('.acc-head').forEach(function (_0x4966a7) {
                    setTimeout(function () {
                        _0x4966a7.classList.remove('opened'), _0x4966a7.classList.remove('open'), _0x4966a7.classList.add('no-rotate');
                    }, 200), _0x4966a7.nextElementSibling.slideUp(200);
                }), window.getComputedStyle(this.nextElementSibling).display === 'none' ? (this.nextElementSibling.slideDown(200, 'flex'), this.classList.remove('opened'), this.classList.remove('no-rotate'), this.classList.add('open')) : (this.nextElementSibling.slideUp(200), this.classList.remove('open'), this.classList.add('no-rotate'));
            });
        });
    }

    function _0x123b94(_0x431a2b) {
        getScript('https://cdn.elbana.net/flaspeed/splidejs@4.1.4.min.js?v=3', () => {
            const
                {
                    slider: _0x19a7bc,
                    widgetId: _0x3eb0ad,
                    options = [],
                    breakpointsEnabled = true,
                    autoplay = false,
                    rewind = false,
                    pauseOnHover = true,
                    resetProgress = false,
                    conditionalProps = [],
                    ..._0x4a391a
                } = _0x431a2b ||
                    {},
                _0x254cf7 = document.querySelector(_0x3eb0ad);
            if (!_0x254cf7) return;
            const _0xe51832 = typeof _0x19a7bc === 'string' ? _0x19a7bc.split(',') : [_0x19a7bc],
                _0x147129 = [];
            for (let _0x17b992 = 0; _0x17b992 < _0xe51832.length; _0x17b992++) {
                const _0x584a4e = _0xe51832[_0x17b992],
                    _0x563417 = document.querySelectorAll(_0x584a4e.trim());
                for (const _0x1f6cd8 of _0x563417) {
                    _0x147129.push(_0x1f6cd8);
                }
            }
            if (!_0x147129.length) return;
            const _0x4a69b9 = _0x26d0f3 => Math.max(1, Math.floor(_0x26d0f3 / 280)),
                _0x5ab8cf = (_0x2a6299, _0x8b721a = null) => {
                    const _0x9133ec = _0x8b721a !== null ? _0x8b721a : _0x2a6299,
                        _0x43b9ab = [
                            [1600, 1],
                            [1400, 0.9],
                            [1200, 0.8],
                            [992, 0.7],
                            [768, 0.6],
                            [576, 0.4],
                            [480, 0.3]
                        ];
                    const _0x2981a6 = {};
                    for (const [_0x2b8d15, _0xc26919] of _0x43b9ab) {
                        _0x2981a6[_0x2b8d15] = {
                            'perPage': _0x2b8d15 === 480 ? 1 : Math.min(_0x9133ec, Math.max(1, Math.round(_0x9133ec * _0xc26919)))
                        };
                    }
                    return _0x2981a6;
                },
                _0x1e1370 = () => {
                    const _0x5877ce = {};
                    _0x5877ce.perMove = 0x1, _0x5877ce.direction = BlogDirection;
                    const _0xfdb026 = _0x5877ce,
                        _0x552e59 = {};
                    _0x552e59.speed = 0x1f4, _0x552e59.rewindSpeed = 0x1f4, _0x552e59.pauseOnHover = pauseOnHover, _0x552e59.resetProgress = resetProgress;
                    const _0x4db95a = _0x552e59;
                    Object.assign(_0xfdb026, _0x4db95a);
                    if (autoplay) _0xfdb026.autoplay = true;
                    return _0xfdb026.reducedMotion = false, _0xfdb026;
                },
                _0x16920a = [];
            let _0x2a7476 = null,
                _0x143dd7 = [];
            if (Array.isArray(options) && options.length > 0) {
                if (typeof options[0] === 'function') _0x2a7476 = options[0];
                _0x143dd7 = options.slice(1);
            }
            const _0x4b4c66 = {};
            for (let _0x2a6c21 = 0; _0x2a6c21 < _0x147129.length; _0x2a6c21++) {
                const _0x36d280 = _0x147129[_0x2a6c21];
                if (_0x36d280.hasAttribute('data-mounted')) continue;
                const _0x1b91b6 = _0x36d280.parentElement.clientWidth,
                    _0x18c377 = _0x4a69b9(_0x1b91b6),
                    _0xa992f9 = _0x1e1370();
                _0xa992f9.rewind = rewind;
                const _0x4485cf = _0x4a391a.perPage !== undefined ? typeof _0x4a391a.perPage === 'function' ? _0x4a391a.perPage(_0x36d280) : _0x4a391a.perPage : null;
                _0xa992f9.perPage = _0x4485cf !== null ? _0x4485cf : _0x18c377;
                const _0xd3505c = breakpointsEnabled && _0x143dd7.length ? (() => {
                    const _0x25658c = {};
                    for (let _0x49a097 = 0; _0x49a097 < _0x143dd7.length; _0x49a097++) {
                        const _0x1abd6f = _0x143dd7[_0x49a097];
                        Array.isArray(_0x1abd6f) && _0x1abd6f.length === 2 && (_0x4485cf !== null ? _0x25658c[_0x1abd6f[0]] = {
                            'perPage': Math.min(_0x4485cf, _0x1abd6f[1])
                        } : _0x25658c[_0x1abd6f[0]] = {
                            'perPage': _0x1abd6f[1]
                        });
                    }
                    return _0x25658c;
                })() : _0x5ab8cf(_0x18c377, _0x4485cf);
                _0xa992f9.breakpoints = _0xd3505c;
                if (Array.isArray(conditionalProps))
                    for (let _0x575efe = 0; _0x575efe < conditionalProps.length; _0x575efe++) {
                        const _0x282bda = conditionalProps[_0x575efe];
                        _0x282bda.condition && typeof _0x282bda.condition === 'function' && _0x282bda.condition(_0x36d280) && Object.assign(_0xa992f9, typeof _0x282bda.props === 'function' ? _0x282bda.props(_0x36d280) : _0x282bda.props);
                    }
                for (const _0x556105 in _0x4a391a) {
                    if (_0x556105 === 'perPage') continue;
                    const _0x8481f3 = _0x4a391a[_0x556105];
                    _0xa992f9[_0x556105] = typeof _0x8481f3 === 'function' ? _0x8481f3(_0x36d280) : _0x8481f3;
                }
                const _0x23fce1 = new Splide(_0x36d280, _0xa992f9);
                _0x16920a.push(_0x23fce1);
                let _0x43890e = 'default';
                if (_0x36d280.classList.contains('splideshow-nav')) _0x43890e = 'nav';
                else {
                    if (_0x36d280.classList.contains('splideshow-main') || _0x36d280.matches(_0xe51832[0]?.['trim']())) _0x43890e = 'main';
                    else {
                        const _0x3fa7bf = Array.from(_0x36d280.classList);
                        _0x3fa7bf.length > 0 && (_0x43890e = _0x3fa7bf[0]);
                    }
                } !_0x4b4c66[_0x43890e] && (_0x4b4c66[_0x43890e] = []);
                const _0x380996 = {};
                _0x380996.instance = _0x23fce1, _0x380996.element = _0x36d280, _0x4b4c66[_0x43890e].push(_0x380996), _0x23fce1.on('mounted', () => {
                    const _0x1f7179 = _0x36d280.previousElementSibling;
                    if (!_0x36d280.classList.contains('m-slider') && _0x1f7179?.['classList']['contains']('posts-loading')) _0x1f7179.remove();
                    _0x36d280.fadeIn?.(300, 'block'), _0x36d280.setAttribute('data-mounted', 'true');
                }), _0x23fce1.mount();
            }
            if (typeof _0x2a7476 === 'function') {
                const _0x34a3ec = Object.keys(_0x4b4c66);
                if (_0x4b4c66.main && _0x4b4c66.nav) {
                    const _0x129c97 = _0x4b4c66.main,
                        _0x57d067 = _0x4b4c66.nav;
                    for (let _0x101fad = 0; _0x101fad < Math.min(_0x129c97.length, _0x57d067.length); _0x101fad++) {
                        _0x2a7476(_0x129c97[_0x101fad].instance, _0x57d067[_0x101fad].instance, [_0x129c97[_0x101fad].element, _0x57d067[_0x101fad].element]);
                    }
                }
                else {
                    if (_0x34a3ec.length === 1) {
                        const _0x273fd9 = _0x4b4c66[_0x34a3ec[0]];
                        for (let _0x2d1232 = 0; _0x2d1232 < _0x273fd9.length; _0x2d1232++) {
                            const _0x25ce89 = _0x273fd9[_0x2d1232];
                            _0x2a7476(_0x25ce89.instance, null, [_0x25ce89.element]);
                        }
                    }
                    else {
                        if (_0x34a3ec.length > 1) {
                            const _0x4135d0 = [],
                                _0x3aecb0 = [];
                            for (let _0x2eabb3 = 0; _0x2eabb3 < _0x34a3ec.length; _0x2eabb3++) {
                                const _0x290b25 = _0x34a3ec[_0x2eabb3];
                                for (const _0x320c08 of _0x4b4c66[_0x290b25]) {
                                    _0x4135d0.push(_0x320c08.instance), _0x3aecb0.push(_0x320c08.element);
                                }
                            }
                            _0x2a7476(..._0x4135d0, _0x3aecb0);
                        }
                    }
                }
            }
        });
    }

    function _0x1a9c8d(_0x22ab18) {
        const _0xff90f3 = _0x22ab18?.['offsetTop'],
            _0xe21a2d = (_0x15d2c2, _0x140081) => {
                let _0x2760d0, _0x2f5a4c, _0x2cb7aa;
                if (_0x15d2c2.startsWith('rgb')) [_0x2760d0, _0x2f5a4c, _0x2cb7aa] = _0x15d2c2.match(/\d+/g).map(Number);
                else {
                    if (_0x15d2c2.startsWith('#')) {
                        const _0x52cc0a = _0x15d2c2.length === 4 ? [..._0x15d2c2.slice(1)].map(_0x26056e => _0x26056e + _0x26056e).join('') : _0x15d2c2.slice(1);
                        [_0x2760d0, _0x2f5a4c, _0x2cb7aa] = [0, 2, 4].map(_0xa5d104 => parseInt(_0x52cc0a.slice(_0xa5d104, _0xa5d104 + 2), 16));
                    }
                    else return _0x15d2c2;
                }
                return 'rgba(' + _0x2760d0 + ',' + _0x2f5a4c + ',' + _0x2cb7aa + ',' + _0x140081 + ')';
            };
        window.addEventListener('scroll', () => {
            const _0x286501 = window.scrollY,
                _0x55a008 = document.querySelector('.head-down');
            if (_0x286501 > _0xff90f3) {
                _0x22ab18.classList.add('fixed'), _0x22ab18.style.backgroundColor = _0xe21a2d(getComputedStyle(_0x22ab18).backgroundColor, 0.95);
                if (!HeaderFixed && NavbarFixed && MenuFixed || HeaderFixed && NavbarFixed && MenuFixed || HeaderFixed || NavbarFixed) _0x55a008.classList.add('fixed');
            }
            else {
                _0x22ab18.classList.remove('fixed'), _0x22ab18.style.backgroundColor = '';
                if (!HeaderFixed && NavbarFixed && MenuFixed || HeaderFixed && NavbarFixed && MenuFixed || HeaderFixed || NavbarFixed) _0x55a008.classList.remove('fixed');
            }
        });
    }

    function _0x310007() {
        if (document.querySelector('#menu-bar ul li > a')) {
            const _0x30f4a4 = document.querySelectorAll('#menu-bar ul li:not(.homeicon) > a');
            for (let _0x7c2249 = 0, _0x29eae7 = _0x30f4a4.length; _0x7c2249 < _0x29eae7; _0x7c2249++) {
                const _0x44350a = _0x30f4a4[_0x7c2249].getAttribute('title');
                _0x30f4a4[_0x7c2249].setAttribute('title', _0x44350a.replace(/(<[^>]*>|_)/g, '').replace(/#/g, ''));
            }
        }
        if (document.querySelector('#menu-bar .subMenu a')) {
            const _0x5a4924 = document.querySelectorAll('#menu-bar .subMenu a');
            for (let _0x181b01 = 0, _0x23407c = _0x5a4924.length; _0x181b01 < _0x23407c; _0x181b01++) {
                _0x5a4924[_0x181b01].innerHTML = _0x5a4924[_0x181b01].innerHTML.replace(/_/g, '').replace(/#/g, '');
            }
        }
        if (document.querySelector('.nav-drawer #menu-bar .sub-menu > a')) {
            const _0x36a58a = document.querySelectorAll('.nav-drawer #menu-bar .sub-menu > a');
            for (let _0x1f5fb0 = 0, _0x3d1d4e = _0x36a58a.length; _0x1f5fb0 < _0x3d1d4e; _0x1f5fb0++) {
                _0x36a58a[_0x1f5fb0].addEventListener('click', function (_0x281867) {
                    _0x281867.preventDefault();
                    const _0x19e0ac = this.nextElementSibling;
                    if (window.getComputedStyle(_0x19e0ac).display === 'none') _0x19e0ac.slideDown(200, 'block'), this.classList.add('expanded');
                    else {
                        _0x19e0ac.slideUp(200), this.classList.remove('expanded');
                    }
                });
            }
        }

        function _0x1a1e08() {
            const _0x3f2f4c = document.querySelectorAll('.nav-drawer .MegaMenu a');
            for (let _0x4e6027 = 0, _0x3a2262 = _0x3f2f4c.length; _0x4e6027 < _0x3a2262; _0x4e6027++) {
                const _0x196b28 = _0x3f2f4c[_0x4e6027];
                if (_0x196b28.dataset.info) {
                    const _0x3357d2 = JSON.parse(_0x196b28.dataset.info),
                        _0x3f2f4d = _0x3357d2.mglabel;
                    _0x196b28.setAttribute('href', SearchUrl + '/label/' + encodeURIComponent(_0x3f2f4d) + '?max-results=' + getMaxResults), _0x196b28.removeAttribute('data-info');
                }
            }
        }
        document.addEventListener('click', function (_0x4f083a) {
            const _0x33c04a = _0x4f083a.target.closest('.openNavMobile');
            if (!_0x33c04a) return;
            _0x1a1e08();
        });
    }

    function _0x27744d(_0x1c4058, _0x233f65, _0x4f2e4d, _0x105f37) {
        const _0x19676d = [],
            _0x5454a2 = [];
        fetchData(BlogUrl + 'feeds/pages/default?alt=json', function () { }, function (_0x5f2f10) {
            _0x5f2f10.feed && _0x5f2f10.feed.entry && (_0x5f2f10.feed.entry.forEach(function (_0x16dee0) {
                if (!_0x16dee0.app$control) {
                    const _0x2ec160 = _0x16dee0.link.filter(function (_0x5dae76) {
                        return _0x5dae76.rel == 'alternate';
                    })[0].href;
                    _0x16dee0.content.$t.includes(_0x1c4058) && (_0x233f65 == 'link' && _0x19676d.push(_0x2ec160), _0x233f65 == 'content' && (_0x19676d.push(_0x16dee0.content.$t.replace(_0x1c4058, '<div class="redContent">' + _0x4f2e4d + '</div>')), _0x5454a2.push(_0x16dee0.title.$t.replace(/"/g, ''))));
                }
            }), _0x105f37(null, _0x19676d.join(', '), _0x5454a2.join(', ')));
        }, function () { });
    }

    function _0x2cb131(_0xc761e5) {
        const _0x4d27ed = {},
            _0x3d3ca3 = _0xc761e5.link.filter(function (_0x502018) {
                return _0x502018.rel == 'alternate';
            })[0].href;
        _0x4d27ed.Link = _0x3d3ca3.startsWith('http://') ? _0x3d3ca3.replace('http://', 'https://') : _0x3d3ca3, _0x4d27ed.Category = _0xc761e5.category?.[0]?.['term'] || '', _0x4d27ed.Categorys = _0xc761e5.category?.['map'](_0x173d7f => _0x173d7f.term) || [], _0x4d27ed.CategoryName = _0x4d27ed.Categorys.length > 0 ? '<span class="Category Categories cateback-' + Math.floor(42 * Math.random() + 1) + '">' + _0x4d27ed.Category + '</span>' : '', _0x4d27ed.CategoryLink = _0x4d27ed.Categorys.length > 0 ? '<a class="category-link Categories cateback-' + Math.floor(42 * Math.random() + 1) + '" href="/search/label/' + encodeURIComponent(_0x4d27ed.Category) + '?max-results=' + getMaxResults + '">' + _0x4d27ed.Category + '</a>' : '';
        if (_0x4d27ed.Link !== '') {
            _0x4d27ed.Title = _0xc761e5.title.$t, _0x4d27ed.FullTitle = _0xc761e5.title.$t;
            MaxTitle && _0x4d27ed.FullTitle.split(' ').length > MaxTitleNum && (_0x4d27ed.Title = _0x4d27ed.FullTitle.split(' ').slice(0, MaxTitleNum).join(' ') + '...');
            _0x4d27ed.Snippet = (_0xc761e5.summary?.['$t'] || _0xc761e5.content?.['$t'] || '').replace(/<\S[^>]*>/g, ''), _0x4d27ed.SnippetShorten = _0x4d27ed.Snippet.slice(0, snippetLength) + '...', _0x4d27ed.FullDate = _0xc761e5.published.$t, _0x4d27ed.UpDate = _0xc761e5.updated.$t, _0x4d27ed.Date = timeAgo ? langDate(_0x4d27ed.UpDate) : _0x4d27ed.FullDate.slice(8, 10) + ' ' + langDate(_0x4d27ed.FullDate) + ' ' + _0x4d27ed.FullDate.slice(0, 4), _0x4d27ed.Format = '' + BlogUrl + _0x4d27ed.FullDate.slice(0, 10).replace(/-/g, '_') + '_archive.html', _0x4d27ed.getDateElem = showTimestamp ? '<span class="post-date">' + TimeIcon + '<time datetime="' + _0x4d27ed.UpDate + '" title="' + _0x4d27ed.UpDate + '">' + _0x4d27ed.Date + '</time></span>' : '', _0x4d27ed.LinkDate = showTimestamp ? '<span><a class="post-date" href="' + _0x4d27ed.Format + '" datetime="' + _0x4d27ed.UpDate + '" title="' + _0x4d27ed.UpDate + '" rel="nofollow">' + TimeIcon + '<time datetime="' + _0x4d27ed.UpDate + '" title="' + _0x4d27ed.UpDate + '">' + _0x4d27ed.Date + '</time></a></span>' : '', _0x4d27ed.NumCom = _0xc761e5.thr$total?.['$t'] || '0', _0x4d27ed.NumComElem = _0xc761e5.thr$total && showCommentLink ? '<span class="icComments">' + CommentsIcon + _0x4d27ed.NumCom + '</span>' : '', _0x4d27ed.NumComUrl = _0xc761e5.thr$total && showCommentLink ? '<span class="icComments"><a class="comments" href="' + _0x4d27ed.Link + '#item-comments">' + CommentsIcon + _0x4d27ed.NumCom + '</a></span>' : '', _0x4d27ed.Author = _0xc761e5.author[0]?.['name']?.['$t'] || 'مجهول', _0x4d27ed.AuthTagNameElem = showAuthor ? '<span class="post-author">' + UserIcon + _0x4d27ed.Author + '</span>' : '', _0x4d27ed.AuthNameURL = _0xc761e5.author[0]?.['uri']?.['$t'] || '#';
            showAuthor ? _0x4d27ed.AuthNameLink = _0x4d27ed.AuthNameURL !== '#' ? '<span class="post-author"><a class="author-name" rel="nofollow noreferrer" target="_blank" href="' + _0x4d27ed.AuthNameURL + '">' + UserIcon + _0x4d27ed.Author + '</a></span>' : _0x4d27ed.AuthTagNameElem : _0x4d27ed.AuthNameLink = '';
            _0x4d27ed.Author_IMG = _0xc761e5.author[0]?.['gd$image']?.['src']['includes']('rounded.gif') || _0xc761e5.author[0]?.['gd$image']?.['src']['includes']('blogger_logo_round') || _0xc761e5.author[0]?.['gd$image']?.['src']['includes']('img1.blogblog.com') || _0xc761e5.author[0]?.['gd$image']?.['src']['includes']('blank.gif') ? AltAuthor : _0xc761e5.author[0]?.['gd$image']?.['src'], _0x4d27ed.AuthTagImageElem = showAuthor ? '<a class="author-img" aria-label="' + _0x4d27ed.Author + '" rel="nofollow noreferrer" target="_blank" href="' + _0x4d27ed.AuthNameURL + '"><span class="Lazy authImage"><img class="lazyload" data-sizes="auto" alt="Author Photo" data-src="' + _0x4d27ed.Author_IMG + '"/></span><span class="authName">' + _0x4d27ed.Author + '</span></a>' : '';
            const _0x435393 = _0xc761e5.media$thumbnail?.['url'] || (_0xc761e5.content?.['$t']['match'](/youtube\.com.*(\?v=|\/embed\/)(.{11})/) ? (_0x4d27ed.YoutubeId = _0xc761e5.content.$t.match(/youtube\.com.*(\?v=|\/embed\/)(.{11})/).pop(), _0x4d27ed.YoutubeId.length === 11 ? '//img.youtube.com/vi/' + _0x4d27ed.YoutubeId + '/0.jpg' : null) : _0xc761e5.content?.['$t']['match'](/src=(.+?[\.jpg|\.gif|\.png]")/) ? _0xc761e5.content.$t.match(/src=(.+?[\.jpg|\.gif|\.png]")/)[1] : AltImage);
            _0x4d27ed.ImgUrl = _0x435393.startsWith('http://') ? _0x435393.replace('http://', 'https://') : _0x435393, _0x4d27ed.PostId = _0xc761e5.id.$t.replace(/.+\-/g, '');
        }
        return _0x4d27ed;
    };
    let _0x298557 = 0;

    function _0x3582ed(_0x4b58f3, _0x3c6010) {
        _0x298557++;
        const _0x4888b0 = new Date().getTime(),
            _0x57c13e = 'ShareMenu_' + _0x4b58f3 + '_' + _0x4888b0 + '_' + _0x298557;
        return '<div class="ShareArea"> \n<button aria-label="Main Share Icon" data-alignment="' + endSide + '" class="ShareIcon dropdown-button tooltipped codi-btn" data-target="' + _0x57c13e + '" type="button" data-tooltip="مشاركة التدوينة">' + ShareIcon + '</button> \n<ul class="DropShareMenu dropdown-content social sub-drop" id="' + _0x57c13e + '"> \n<li> \n<button aria-label="Share the Post With Link" class="snackbar-btn ShareWithLink waves-effect" data-duration="4000" data-message="' + Msg.LinkCopied + '" data-type="success" type="button" data-share-link="' + _0x3c6010 + '" onclick="navigator.clipboard.writeText(this.getAttribute(\'data-share-link\'));"> \n' + CopyLinkIcon + ' \n<span>' + Msg.gtLink + '</span> \n</button> \n</li> \n<li><a class="mail waves-effect" rel="nofollow noreferrer" target="_blank" href="https://www.blogger.com/share-post.g?blogID=' + BlogId + '&postID=' + _0x4b58f3 + '&target=email">' + MailShareIcon + '<span>' + Msg.shMail + '</span></a></li> \n<li><a class="blog waves-effect" rel="nofollow noreferrer" target="_blank" href="https://www.blogger.com/share-post.g?blogID=' + BlogId + '&postID=' + _0x4b58f3 + '&target=blog">' + RewriteIcon + '<span>' + Msg.wrBlog + '</span></a></li> \n<li><a class="waves-effect" rel="nofollow noreferrer" target="_blank" href="https://www.blogger.com/share-post.g?blogID=' + BlogId + '&postID=' + _0x4b58f3 + '&target=facebook"><i class="fa fa-facebook facebook"></i><span>' + Msg.shFace + '</span></a></li> \n<li><a class="waves-effect" rel="nofollow noreferrer" target="_blank" href="https://www.blogger.com/share-post.g?blogID=' + BlogId + '&postID=' + _0x4b58f3 + '&target=twitter"><i class="fa fa-x-twitter x-twitter"></i><span>' + Msg.shTwit + '</span></a></li> \n<li><a class="waves-effect" rel="nofollow noreferrer" target="_blank" href="https://www.blogger.com/share-post.g?blogID=' + BlogId + '&postID=' + _0x4b58f3 + '&target=pinterest"><i class="fa fa-pinterest pinterest"></i><span>' + Msg.shPint + '</span></a></li> \n</ul> \n</div>';
    }

    function _0x1cce0d(_0x25aa9e, _0x44b3c4, _0x452bd2, _0x16cdeb = 0, _0x4c37a0 = 24, _0x51ffd4, _0x5d9307, _0x147ef6) {
        const _0x4870c7 = _0x452bd2.getAttribute('data-type').includes('mega'),
            _0x3e35d2 = _0x452bd2.getAttribute('data-type') === 'mega-2',
            _0x2755b = _0x452bd2.getAttribute('data-type') === 'mega-3',
            _0x17baa3 = _0x452bd2.getAttribute('data-type').includes('tikcernews'),
            _0x54e2d2 = _0x452bd2.getAttribute('data-type') === 'slider',
            _0xa8faf1 = _0x452bd2.getAttribute('data-type').includes('allcats'),
            _0x5c3bc4 = _0x452bd2.getAttribute('data-type').includes('sided'),
            _0x3cf6f6 = _0x452bd2.getAttribute('data-type').includes('timeline'),
            _0x4b66a2 = _0x452bd2.getAttribute('data-type').includes('cover'),
            _0x2a76b9 = _0x452bd2.getAttribute('data-type').includes('cover-ttb'),
            _0x2131f8 = _0x452bd2.getAttribute('data-type').includes('grid'),
            _0x1e2d27 = _0x452bd2.getAttribute('data-type').includes('video'),
            _0x3a24c9 = _0x452bd2.getAttribute('data-type').includes('small'),
            _0xda180 = _0x452bd2.getAttribute('data-type').includes('carousel'),
            _0x34a91e = _0x452bd2.getAttribute('data-type').includes('noimage'),
            _0xdc30ed = _0x452bd2.getAttribute('data-type').includes('splide-show'),
            _0x51e674 = _0x452bd2.getAttribute('data-type').includes('splideHtml'),
            _0x243e61 = _0x452bd2.getAttribute('data-type').includes('seealso-item'),
            _0x778830 = _0x452bd2.getAttribute('data-type').includes('RelatedPosts'),
            _0x1bbd7b = _0x17baa3 || _0x243e61 ? 'ul' : 'section',
            _0x2f1d8a = _0x17baa3 || _0x243e61 ? 'li' : 'article',
            _0x4c37aa = (_0x54e2d2 || _0x51e674) && _0x51ffd4 ? ' splide__list' : '',
            _0x44c25c = (_0x54e2d2 || _0x51e674) && _0x51ffd4 ? ' splide__slide' : '',
            _0x546cf5 = !_0x17baa3 && !_0x243e61 ? 'role="article"' : '',
            _0x1a97bd = !_0x17baa3 && !_0x243e61 ? 'role="feed"' : '',
            _0x46446c = (_0x452bd2.closest('.three-cols') || _0x452bd2.closest('.two-cols')) && (_0x2a76b9 || _0x4b66a2) ? 'sided' : _0x2131f8 || _0x1e2d27 ? 'gridVid ' + _0x452bd2.getAttribute('data-type') : _0x51e674 ? _0x452bd2.getAttribute('data-type').replace('splideHtml', 'splideArea') : _0x452bd2.getAttribute('data-type'),
            _0x45ae78 = _0x243e61 ? ' byPost' : '';
        _0xdc30ed && _0x452bd2.closest('.widget-content').classList.add('splideCss');
        if (_0x25aa9e && typeof _0x25aa9e === 'function') _0x25aa9e();
        let _0xb64476 = '',
            _0x189202 = '';
        _0x189202 += '<div class="SLIDENAV">', _0x189202 += '<div class="splideshow-nav splide">', _0x189202 += '<div class="splide__track">', _0x189202 += '<ul class="splide__list">', (_0xb64476 += _0x51e674 ? '<div class="splide splide-' + _0x452bd2.getAttribute('data-type') + '">' : '', _0xb64476 += _0x51e674 ? '<div class="splide__track">' : '', _0xb64476 += '<' + _0x1bbd7b + ' class="cates ' + _0x46446c + _0x4c37aa + _0x45ae78 + '" ' + _0x1a97bd + '>');
        if (_0xa8faf1) {
            const _0x427fdd = _0x452bd2.getAttribute('data-label') === 'TheRecent' ? 'أخر التدوينات' : _0x452bd2.getAttribute('data-label') === 'TheRandom' ? 'الأكثر زياØ±Ø©' : _0x452bd2.getAttribute('data-label'),
                _0x33d80d = _0x452bd2.getAttribute('data-label') === 'TheRecent' || _0x452bd2.getAttribute('data-label') === 'TheRandom' ? SearchUrl + ('?max-results=' + getMaxResults) : SearchUrl + ('/label/' + encodeURIComponent(_0x452bd2.getAttribute('data-label')) + '?max-results=' + getMaxResults);
            _0xb64476 += '<h3 role="heading" class="catstitle">', _0xb64476 += '<a class="image Lazy" href="' + _0x33d80d + '" title="' + _0x427fdd + '">', _0xb64476 += '<img alt="' + _0x427fdd + '" class="lazyload" data-sizes="auto" data-src="' + _0x2cb131(_0x44b3c4.feed.entry[0]).ImgUrl + '"/>', _0xb64476 += '<span class="catsname">' + _0x427fdd + '</span>', _0xb64476 += '</a>', _0xb64476 += '</h3>';
        }
        _0x3cf6f6 && (_0xb64476 += '<div class="timeline-line"></div>');
        for (let _0x38db74 = _0x16cdeb; _0x38db74 < _0x4c37a0 && _0x38db74 < _0x44b3c4.feed.entry.length; _0x38db74++) {
            const _0x3613f6 = _0x44b3c4.feed.entry[_0x38db74];
            let _0x4a88db = _0x2cb131(_0x3613f6);

            function _0x196727(_0x3d2de5, _0x3a1b29, _0x2a6e53) {
                let _0x2a0048 = '';
                return _0x2a0048 += '<div class="details">', _0x2a0048 += _0x3d2de5 ? _0x4a88db.AuthNameLink : '', _0x2a0048 += _0x4a88db.LinkDate, _0x2a0048 += _0x2a6e53 ? _0x4a88db.NumComUrl : '', _0x2a0048 + '</div>';
            }
            _0x189202 += '<li class="post post-' + _0x38db74 + _0x44c25c + '" ' + _0x546cf5 + ' data-item="' + _0x4a88db.PostId + '" data-cate="' + _0x4a88db.Category + '">', _0xb64476 += '<' + _0x2f1d8a + ' class="post post-' + _0x38db74 + _0x44c25c + '" ' + _0x546cf5 + ' data-item="' + _0x4a88db.PostId + '" data-cate="' + _0x4a88db.Category + '">';
            if (_0x4870c7) {
                _0xb64476 += '<div class="post-image">', _0xb64476 += '<a title="' + _0x4a88db.FullTitle + '" class="image Lazy" href="' + _0x4a88db.Link + '">', _0xb64476 += !_0x3e35d2 ? _0x4a88db.CategoryName : '', _0xb64476 += _0x2755b ? '<canvas id="bar" width="50" height="50"></canvas>' : '', _0xb64476 += _0x2755b ? '<i class="fa fa-video"></i>' : '', _0xb64476 += '<img alt="' + _0x4a88db.FullTitle + '" class="lazyload" data-sizes="auto" data-src="' + _0x4a88db.ImgUrl + '"/>', _0xb64476 += '</a>', _0xb64476 += '<button aria-label="Read it Later" class="snackbar-btn tooltipped postSave" data-tooltip="اقرأها لاحقا" type="button" data-duration="4000">', _0xb64476 += '<svg fill="none" height="16" stroke="var(--postsaveicon)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="16"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>', _0xb64476 += '</button>', _0xb64476 += '</div>';
                if (_0x3e35d2) {
                    _0xb64476 += '<div class="mginfo-wrap">';
                }
                _0xb64476 += _0x196727(false, true, true), _0xb64476 += '<h3 role="heading" class="post-title"><a title="' + _0x4a88db.FullTitle + '" href="' + _0x4a88db.Link + '">' + _0x4a88db.Title + '</a></h3>', _0x3e35d2 && (_0xb64476 += '</div>');
            }
            if (_0x17baa3) {
                _0xb64476 += '<h3 role="heading" class="post-title"><a title="' + _0x4a88db.FullTitle + '" href="' + _0x4a88db.Link + '">' + _0x4a88db.FullTitle + '</a></h3>';
            }
            if (_0x54e2d2 || _0x2131f8 || _0x1e2d27 || _0xda180 || _0x34a91e || _0x778830) {
                const _0x4dabb3 = _0xda180 || _0x34a91e ? false : true;
                if (_0x4dabb3) {
                    _0xb64476 += '<div class="post-image caption-img">', _0xb64476 += '<a title="' + _0x4a88db.FullTitle + '" class="image Lazy" href="' + _0x4a88db.Link + '">', _0xb64476 += _0x4a88db.CategoryName, _0xb64476 += '<img alt="' + _0x4a88db.FullTitle + '" class="lazyload" data-sizes="auto" data-src="' + _0x4a88db.ImgUrl + '"/>', _0xb64476 += '</a>', _0xb64476 += '<button aria-label="Read it Later" class="snackbar-btn tooltipped postSave" data-tooltip="اقرأها لاحقا" type="button" data-duration="4000">', _0xb64476 += '<svg fill="none" height="16" stroke="var(--postsaveicon)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="16"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>', _0xb64476 += '</button>';
                    if (_0x1e2d27) {
                        _0xb64476 += '<div class="player-wrapper">', _0xb64476 += '<div class="player-circles">', _0xb64476 += '<div class="circle c-1"></div>', _0xb64476 += '<div class="circle c-2"></div>', _0xb64476 += '<div class="circle c-3"></div>', _0xb64476 += '</div>', _0xb64476 += '<div class="player">', _0xb64476 += '<div class="controler"></div>', _0xb64476 += '</div>', _0xb64476 += '</div>';
                    }
                    _0xb64476 += '</div>', _0xb64476 += '<div class="caption" onclick="this.querySelector(\'h3 a\').click()">', _0xb64476 += _0x54e2d2 ? _0x196727(true, true, true) : _0x196727(false, true, false), _0xb64476 += '<h3 role="heading" class="post-title caption-title"><a title="' + _0x4a88db.FullTitle + '" href="' + _0x4a88db.Link + '">' + _0x4a88db.Title + '</a></h3>', _0xb64476 += _0x5d9307 ? '<p class="post-snippet">' + _0x4a88db.SnippetShorten + '</p>' : '', _0xb64476 += '</div>';
                }
                else {
                    if (_0xda180 || _0x34a91e) {
                        if (!_0x34a91e) {
                            _0xb64476 += '<div class="post-image">', _0xb64476 += '<a title="' + _0x4a88db.FullTitle + '" class="image Lazy" href="' + _0x4a88db.Link + '">', _0xb64476 += _0xda180 ? _0x4a88db.CategoryName : '', _0xb64476 += '<img alt="' + _0x4a88db.FullTitle + '" class="lazyload" data-sizes="auto" data-src="' + _0x4a88db.ImgUrl + '"/>', _0xb64476 += '</a>', _0xb64476 += '<button aria-label="Read it Later" class="snackbar-btn tooltipped postSave" data-tooltip="اقرأها لاحقا" type="button" data-duration="4000">', _0xb64476 += '<svg fill="none" height="16" stroke="var(--postsaveicon)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="16"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>', _0xb64476 += '</button>', _0xb64476 += '</div>';
                        }
                        _0x34a91e && (_0xb64476 += '<div class="postCount">' + (_0x38db74 >= 0 && _0x38db74 <= 8 ? '0' + (_0x38db74 + 1) : _0x38db74 + 1) + '</div>');
                        _0xb64476 += '<div class="caption-outside">', _0xb64476 += !_0xda180 ? _0x4a88db.CategoryLink : '', _0xb64476 += !_0x34a91e ? _0x196727(true, true, true) : _0x196727(false, true, false), _0xb64476 += '<h3 role="heading" class="post-title"' + (_0x34a91e ? ' data-altsrc="' + _0x4a88db.ImgUrl + '"' : '') + '>';
                        if (_0x34a91e) {
                            _0xb64476 += '<button aria-label="Read it Later" class="snackbar-btn tooltipped postSave" data-tooltip="اقرأها لاحقا" type="button" data-duration="4000">', _0xb64476 += '<svg fill="none" height="16" stroke="var(--postsaveicon)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="16"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>', _0xb64476 += '</button>';
                        }
                        _0xb64476 += '<a title="' + _0x4a88db.FullTitle + '" href="' + _0x4a88db.Link + '">' + _0x4a88db.Title + '</a>', _0xb64476 += '</h3>', _0xb64476 += '</div>';
                    }
                }
            }
            if (_0xa8faf1 || _0x3cf6f6) {
                const _0x5e5c7b = _0x38db74 + 1,
                    _0x4c2497 = _0xa8faf1 ? 'h4' : 'h3';
                _0xb64476 += _0x3cf6f6 ? '<div class="timeline-number">' + _0x5e5c7b + '</div>' : '', _0xb64476 += _0x196727(false, true, false), _0xb64476 += '<' + _0x4c2497 + ' role="heading" class="post-title" data-altsrc="' + _0x4a88db.ImgUrl + '">', (_0xb64476 += '<button aria-label="Read it Later" class="snackbar-btn tooltipped postSave" data-tooltip="اقرأها لاحقا" type="button" data-duration="4000">', _0xb64476 += '<svg fill="none" height="16" stroke="var(--postsaveicon)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="16"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>', _0xb64476 += '</button>'), (_0xb64476 += '<a title="' + _0x4a88db.FullTitle + '" href="' + _0x4a88db.Link + '">' + _0x4a88db.Title + '</a>', _0xb64476 += '</' + _0x4c2497 + '>');
            }
            if (_0x5c3bc4 || _0x4b66a2 || _0x2a76b9 || _0x3a24c9) {
                const _0x5cbe54 = _0x3a24c9 ? false : _0x38db74 === 0;
                _0xb64476 += '<div class="post-image">', _0xb64476 += '<a title="' + _0x4a88db.FullTitle + '" class="image Lazy" href="' + _0x4a88db.Link + '">', _0xb64476 += _0x5cbe54 ? _0x4a88db.CategoryName : '', _0xb64476 += '<img alt="' + _0x4a88db.FullTitle + '" class="lazyload" data-sizes="auto" data-src="' + _0x4a88db.ImgUrl + '"/>', _0xb64476 += '</a>', _0xb64476 += '<button aria-label="Read it Later" class="snackbar-btn tooltipped postSave" data-tooltip="اقرأها لاحقا" type="button" data-duration="4000">', _0xb64476 += '<svg fill="none" height="16" stroke="var(--postsaveicon)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="16"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>', _0xb64476 += '</button>', _0xb64476 += '</div>', _0xb64476 += '<div class="caption-outside">', _0xb64476 += _0x5cbe54 ? _0x196727(true, true, true) : _0x196727(false, true, true), _0xb64476 += '<h3 role="heading" class="post-title"><a title="' + _0x4a88db.FullTitle + '" href="' + _0x4a88db.Link + '">' + _0x4a88db.Title + '</a></h3>', _0xb64476 += _0x5cbe54 ? '<p class="post-snippet">' + _0x4a88db.SnippetShorten + '</p>' : '', _0x5cbe54 && (_0xb64476 += '<div class="addons-footer">', _0xb64476 += '<a class="read-more codi-btn" href="' + _0x4a88db.Link + '"><span>' + Msg.JumpButton + '</span></a>', _0xb64476 += showShareButtons ? _0x3582ed(_0x4a88db.PostId, _0x4a88db.Link) : '', _0xb64476 += '</div>'), _0xb64476 += '</div>';
            }
            _0xdc30ed && (_0xb64476 += '<div class="slide-prog"></div>', _0xb64476 += '<div class="post-image caption-img">', _0xb64476 += '<a title="' + _0x4a88db.FullTitle + '" class="image Lazy" href="' + _0x4a88db.Link + '">', _0xb64476 += _0x4a88db.CategoryName, _0xb64476 += '<img alt="' + _0x4a88db.FullTitle + '" class="lazyload" data-sizes="auto" data-src="' + _0x4a88db.ImgUrl + '"/>', _0xb64476 += '</a>', _0xb64476 += '<button aria-label="Read it Later" class="snackbar-btn tooltipped postSave" data-tooltip="اقرأها لاحقا" type="button" data-duration="4000">', _0xb64476 += '<svg fill="none" height="16" stroke="var(--postsaveicon)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="16"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>', _0xb64476 += '</button>', _0xb64476 += '</div>', _0xb64476 += '<div class="caption" onclick="this.querySelector(\'h3 a\').click()">', _0xb64476 += _0x196727(true, true, true), _0xb64476 += '<h3 role="heading" class="post-title caption-title"><a title="' + _0x4a88db.FullTitle + '" href="' + _0x4a88db.Link + '">' + _0x4a88db.Title + '</a></h3>', _0xb64476 += '<p class="post-snippet">' + _0x4a88db.SnippetShorten + '</p>', _0xb64476 += '</div>', _0x189202 += _0x196727(false, true, false) + '<h3 class="post-title"><a aria-disabled="true" onclick="event.preventDefault();" title="' + _0x4a88db.FullTitle + '" href="' + _0x4a88db.Link + '">' + _0x4a88db.Title + '</a></h3>');
            if (_0x243e61) {
                _0xb64476 += '<a href="' + _0x4a88db.Link + '">', _0xb64476 += '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"></path></svg>', _0xb64476 += _0x4a88db.FullTitle, _0xb64476 += '</a>';
            }
            _0xb64476 += '</' + _0x2f1d8a + '>';
        }
        _0xb64476 += _0x51e674 ? '</div>' : '', _0xb64476 += _0x51e674 ? '</div>' : '', (_0x189202 += '</div>', _0x189202 += '</div>', _0x189202 += '</div>', _0x189202 += '</ul>');
        const _0x456e53 = {};
        _0x456e53.html = _0xb64476 + ('</' + _0x1bbd7b + '>'), _0x456e53.nav = _0x189202 + '</li>';
        return _0x456e53;
        if (_0x147ef6 && typeof _0x147ef6 === 'function') _0x147ef6();
    }

    function _0x2794aa(_0x259c1a) {
        const _0x4ec8c6 = _0x259c1a.getElementsByTagName('canvas')[0],
            _0x3ca70d = _0x4ec8c6.width,
            _0x2c51f2 = _0x4ec8c6.height,
            _0xb022ba = _0x4ec8c6.getContext('2d');
        _0xb022ba.lineWidth = 3, _0xb022ba.strokeStyle = '#fff', _0xb022ba.shadowBlur = 1, _0xb022ba.shadowColor = 'rgba(0,0,0,0.3)';
        const _0x21085f = _0x3ca70d / 2,
            _0x5d3be7 = _0x2c51f2 / 2,
            _0x4cf36b = 20,
            _0x36b600 = 25,
            _0x39b62e = 0,
            _0x2ee56b = 100;
        let _0x21cce4 = 0;
        (function _0x3cf320(_0x53b282) {
            _0xb022ba.clearRect(0, 0, _0x3ca70d, _0x2c51f2), _0xb022ba.beginPath();
            _0xb022ba.arc(_0x21085f, _0x5d3be7, _0x4cf36b, _0x39b62e, _0x53b282, false);
            _0xb022ba.stroke(), _0x21cce4++;
            _0x21cce4 < _0x2ee56b + 1 && requestAnimationFrame(function () {
                _0x3cf320(_0x36b600 * _0x21cce4 / 100 + _0x39b62e);
            });
        })();
    }

    function _0x2eb3d5(_0x4c2daf) {
        if (!document.querySelector('.posts-from')) return;

        function _0x39a381(_0x250cee, _0xf262f6, _0x41374c, _0x4c8e75, _0x5adc80, _0x3db697, _0x19cc67) {
            return _0x1cce0d(_0x250cee, _0xf262f6, _0x41374c, _0x4c8e75, _0x5adc80, _0x3db697, _0x19cc67);
        }
        const _0xc154eb = document.querySelectorAll('.posts-from');
        for (let _0xf8384a = 0; _0xf8384a < _0xc154eb.length; _0xf8384a++) {
            const _0x1e29e1 = _0xc154eb[_0xf8384a],
                _0x173b84 = _0x1e29e1.getAttribute('data-label'),
                _0x19e96e = _0x1e29e1.getAttribute('data-number'),
                _0x5b04a3 = _0x1e29e1.getAttribute('data-index');
            let _0x75dfdf, _0x5f5584;
            if (_0x173b84 === 'TheRecent') {
                _0x75dfdf = BlogUrl + 'feeds/posts/summary/?alt=json&start-index=' + _0x5b04a3 + '&max-results=' + _0x19e96e, _0x5f5584 = SearchUrl + ('?max-results=' + getMaxResults);
            }
            else {
                if (_0x173b84 === 'TheRandom') {
                    const _0x25cde7 = Math.floor(PostCount / 2),
                        _0x66f682 = Math.abs(Math.floor(Math.random() * _0x25cde7 + 1));
                    _0x75dfdf = BlogUrl + '/feeds/posts/summary/?alt=json&start-index=' + _0x66f682 + '&max-results=' + _0x19e96e, _0x5f5584 = SearchUrl + ('?max-results=' + getMaxResults);
                }
                else {
                    if (_0x173b84 === 'randomPostLabel') {
                        const _0x51502e = _0x1e29e1.getAttribute('data-label-name'),
                            _0x59a5a2 = Math.floor(Q[_0x51502e] - _0x19e96e),
                            _0x174713 = Math.abs(Math.floor(Math.random() * _0x59a5a2 + 1));
                        _0x75dfdf = BlogUrl + 'feeds/posts/summary/-/' + encodeURIComponent(_0x51502e) + '?alt=json&start-index=' + _0x174713 + '&max-results=' + _0x19e96e;
                    }
                    else _0x75dfdf = BlogUrl + 'feeds/posts/summary/-/' + encodeURIComponent(_0x173b84) + '?alt=json&start-index=' + _0x5b04a3 + '&max-results=' + _0x19e96e, _0x5f5584 = SearchUrl + ('/label/' + encodeURIComponent(_0x173b84) + '?max-results=' + getMaxResults);
                }
            }

            function _0x47e4d6(_0x5d701e, _0x3e7f05) {
                fetchData(_0x75dfdf, function () {
                    _0x3e7f05 && !_0x3e7f05.querySelector('.LoaderCall') && _0x3e7f05.insertAdjacentHTML('beforeend', '<i class="LoaderCall"></i>');
                }, function (_0x50581e) {
                    const _0x55c757 = _0x5d701e.querySelector('.headline .MoreBtn'),
                        _0x355ee3 = _0x5d701e.querySelector('.headline a');
                    _0x55c757 && (_0x55c757.href = _0x355ee3.href = _0x5f5584, _0x5d701e.classList.add('post-from-tag'));
                    if (_0x1e29e1.getAttribute('data-type') === 'slider' && isHome) {
                        _0x1e29e1.closest('.top-section').querySelector('.last-box .one-box').innerHTML = _0x39a381(null, _0x50581e, _0x1e29e1, 0, 1, false, false).html;
                        _0x1e29e1.closest('.top-section').querySelector('.last-box .two-box').innerHTML = _0x39a381(null, _0x50581e, _0x1e29e1, 1, 2, false, false).html;
                        _0x1e29e1.closest('.top-section').querySelector('.last-box .three-box').innerHTML = _0x39a381(null, _0x50581e, _0x1e29e1, 2, 3, false, false).html;
                        _0x1e29e1.closest('.top-section').querySelector('.last-box .four-box').innerHTML = _0x39a381(null, _0x50581e, _0x1e29e1, 3, 4, false, false).html;
                        _0x1e29e1.parentElement.innerHTML = _0x39a381(null, _0x50581e, _0x1e29e1, 4, _0x50581e.feed.entry.length, true, true).html;
                        _0x123b94(
                            {
                                'slider': '.m-slider',
                                'widgetId': '#HTML3',
                                'direction': 'ttb',
                                'type': 'loop',
                                'perPage': 0x1,
                                'pagination': false,
                                'arrows': true,
                                'gap': 0xa,
                                'autoplay': true,
                                'fixedHeight': _0x1dd940 => parseFloat(window.getComputedStyle(_0x1dd940.querySelector('.post')).getPropertyValue('height')),
                                'height': _0x62bc7 => parseFloat(window.getComputedStyle(_0x62bc7).getPropertyValue('height')),
                                'options': []
                            });
                    }
                    _0x1e29e1.getAttribute('data-type') !== 'slider' && _0x1e29e1.getAttribute('data-type') !== 'tikcernews' && !_0x1e29e1.getAttribute('data-type').includes('splideHtml') && (_0x1e29e1.parentElement.innerHTML = _0x39a381(null, _0x50581e, _0x1e29e1, 0, _0x50581e.feed.entry.length, false, false).html);
                    if (_0x1e29e1.getAttribute('data-type').includes('splideHtml')) {
                        const _0x439683 = _0x39a381(null, _0x50581e, _0x1e29e1, 0, _0x50581e.feed.entry.length, true, false),
                            _0x1338ab = _0x1e29e1.getAttribute('data-type').includes('splide-show') ? _0x439683.html + _0x439683.nav : _0x439683.html;
                        _0x1e29e1.parentElement.innerHTML = _0x1338ab;
                        const _0x91743b = '.splide-' + _0x1e29e1.getAttribute('data-type').split(' ').slice(0, -1).join(' ');
                        if (_0x91743b !== '.splide-splide-show') {
                            function _0x5b92c8(_0x4a4669) {
                                let _0x27c287;
                                if (!_0x4a4669.closest('.middle-content')) {
                                    if (_0x4a4669.closest('.one-cols')) _0x27c287 = 4;
                                    else _0x4a4669.closest('.two-cols') ? _0x27c287 = 2 : _0x27c287 = 1;
                                }
                                else _0x4a4669.closest('.one-cols') ? _0x27c287 = _0x4a4669.classList.contains('splide-noimage') ? 2 : 3 : _0x27c287 = 1;
                                const _0x504af9 = {};
                                _0x504af9.cond = _0x27c287;
                                return _0x504af9;
                            }
                            _0x123b94(
                                {
                                    'slider': _0x91743b,
                                    'widgetId': '#' + document.querySelector(_0x91743b).closest('.widget').id,
                                    'type': 'loop',
                                    'perPage': _0x91743b === '.splide-RelatedPosts' ? 3 : _0x2728df => _0x5b92c8(_0x2728df).cond,
                                    'pagination': _0x91743b === '.splide-RelatedPosts' ? false : true,
                                    'arrows': true,
                                    'gap': _0x91743b === '.splide-RelatedPosts' ? 20 : 30,
                                    'autoplay': _0x91743b === '.splide-RelatedPosts' ? false : true,
                                    'rewind': false
                                });
                        }
                        else _0x123b94(
                            {
                                'slider': _0x91743b + ',.splideshow-nav',
                                'widgetId': '#' + document.querySelector(_0x91743b).closest('.widget').id,
                                'conditionalProps': [
                                    {
                                        'condition': _0x1378ef => !_0x1378ef.classList.contains('splideshow-nav'),
                                        'props':
                                        {
                                            'type': 'fade'
                                        }
                                    }],
                                'cover': _0x545fa5 => _0x545fa5.classList.contains('splideshow-nav') ? true : false,
                                'isNavigation': _0x34a152 => _0x34a152.classList.contains('splideshow-nav') ? true : false,
                                'direction': _0x5efbee => _0x5efbee.classList.contains('splideshow-nav') ? 'ttb' : BlogDirection,
                                'fixedHeight': _0x22a710 => _0x22a710.classList.contains('splideshow-nav') ? parseFloat(window.getComputedStyle(_0x22a710.querySelector('.post')).getPropertyValue('height')) : '',
                                'height': _0x359af7 => _0x359af7.classList.contains('splideshow-nav') ? parseFloat(window.getComputedStyle(_0x359af7).getPropertyValue('height')) : '',
                                'focus': _0x5cf867 => _0x5cf867.classList.contains('splideshow-nav') ? 'center' : 'center',
                                'perPage': 0x1,
                                'pagination': false,
                                'arrows': _0x1a54ec => _0x1a54ec.classList.contains('splideshow-nav') ? true : false,
                                'gap': 0xa,
                                'autoplay': true,
                                'rewind': true,
                                'pauseOnHover': false,
                                'resetProgress': false,
                                'options': [(_0x3453dc, _0x47238b, _0x17eb14) => {
                                    _0x3453dc.sync(_0x47238b);

                                    function _0x38e33d() {
                                        _0x3453dc.Components.Autoplay.pause(), _0x47238b.Components.Autoplay.pause();
                                    }

                                    function _0x273584() {
                                        _0x3453dc.Components.Autoplay.play(), _0x47238b.Components.Autoplay.play();
                                    }
                                    if (_0x17eb14 && _0x17eb14.length) {
                                        const _0x36595e = _0x17eb14[0],
                                            _0x3ade6d = _0x17eb14[1];
                                        _0x36595e.addEventListener('pointerover', _0x38e33d), _0x36595e.addEventListener('pointerout', _0x273584);
                                        for (let _0x249fef = 0; _0x249fef < _0x3ade6d.querySelectorAll('li').length; _0x249fef++) {
                                            const _0x31aecd = _0x3ade6d.querySelectorAll('li')[_0x249fef];
                                            _0x31aecd.addEventListener('pointerover', _0x38e33d), _0x31aecd.addEventListener('pointerout', _0x273584);
                                        }
                                        let _0x5a58b7 = null;
                                        _0x3453dc.on('autoplay:playing', function (_0xd2ab58) {
                                            if (!_0x3453dc.state.is(Splide.STATES.MOVING)) {
                                                if (_0x5a58b7) cancelAnimationFrame(_0x5a58b7);
                                                _0x5a58b7 = requestAnimationFrame(() => {
                                                    for (let _0x13f56a = 0; _0x13f56a < _0x36595e.querySelectorAll('.post').length; _0x13f56a++) {
                                                        const _0x5ce1ba = _0x36595e.querySelectorAll('.post')[_0x13f56a],
                                                            _0x179daf = _0x5ce1ba.querySelector('.slide-prog');
                                                        if (_0x179daf) {
                                                            _0x179daf.style.width = _0xd2ab58 * 100 + '%';
                                                        }
                                                    }
                                                });
                                            }
                                        });
                                    }
                                }]
                            });
                    }
                    _0x560ab7();
                    if (_0x4c2daf && _0x4c2daf.type === 'mouseenter' && document.querySelector('.MainMenu-Contianer .MegaMenu') && _0x1e29e1.getAttribute('data-type').includes('mega')) {
                        const _0xeabfb3 = document.querySelectorAll('.MainMenu-Contianer .MegaMenu');
                        for (let _0x53c675 = 0, _0x40cc34 = _0xeabfb3.length; _0x53c675 < _0x40cc34; _0x53c675++) {
                            const _0x3c0946 = _0xeabfb3[_0x53c675],
                                _0x56f3a2 = _0x3c0946.querySelectorAll('.mega-3 .post');
                            for (let _0xc0fb39 = 0, _0x3f8369 = _0x56f3a2.length; _0xc0fb39 < _0x3f8369; _0xc0fb39++) {
                                const _0x218146 = _0x56f3a2[_0xc0fb39];
                                _0x2794aa(_0x218146), _0x218146.querySelector('.fa-video').style.transform = 'scale(1)';
                            }
                            _0x3c0946.addEventListener('mouseenter', function () {
                                for (let _0xc554d2 = 0; _0xc554d2 < _0x56f3a2.length; _0xc554d2++) {
                                    _0x2794aa(_0x56f3a2[_0xc554d2]), _0x56f3a2[_0xc554d2].querySelector('.fa-video').style.transform = 'scale(1)';
                                }
                            }), _0x3c0946.addEventListener('mouseleave', function () {
                                for (let _0x3b382d = 0; _0x3b382d < _0x56f3a2.length; _0x3b382d++) {
                                    _0x56f3a2[_0x3b382d].querySelector('.fa-video').style.transform = 'scale(0)';
                                }
                            });
                        }
                    }
                    if (_0x4c2daf && (_0x4c2daf.type === 'scroll' || _0x4c2daf.type === 'run') && document.querySelector('#HTML2') && _0x1e29e1.getAttribute('data-type') === 'tikcernews') {
                        getScript('https://cdn.elbana.net/flaspeed/ticker.min.js?v=1', function () {
                            _0x1e29e1.parentElement.innerHTML = _0x39a381(null, _0x50581e, _0x1e29e1, 0, _0x50581e.feed.entry.length, false, false).html;
                            const _0x2215b0 = {};
                            _0x2215b0.anim_duration = 0xfa, _0x2215b0.reverse_elm = true, new elbananetTicker('.ticker-content', _0x2215b0);
                        });
                    }
                }, function (_0x5acfa3) {
                    _0x1e29e1.parentElement.innerHTML = '<div class="errorFetch">هناك خطأ مØ§...</div>';
                });
            }
            if (_0x4c2daf && (_0x4c2daf.type === 'run' || _0x4c2daf.type === 'mouseenter') && !_0x1e29e1.classList.contains('loadclass')) {
                _0x1e29e1.classList.add('loadclass');
                const _0x174a2c = _0x1e29e1.getAttribute('data-type').includes('mega') ? _0x1e29e1.closest('li') : _0x1e29e1.closest('.widget'),
                    _0x4515ea = _0x174a2c.classList.contains('MegaMenu') ? _0x174a2c.querySelector('.widget-content') : false;
                _0x47e4d6(_0x174a2c, _0x4515ea);
            }
            if (_0x4c2daf && _0x4c2daf.type === 'scroll' && !_0x1e29e1.classList.contains('loadclass')) {
                let _0xb3ceb6 = false;

                function _0x585a41() {
                    if (!_0x1e29e1.classList.contains('loadclass')) {
                        const _0x362184 = _0x1e29e1.closest('.widget'),
                            _0x46df98 = _0x362184.getBoundingClientRect();
                        _0x46df98.top < window.innerHeight && _0x46df98.bottom > 0 && (_0x1e29e1.classList.add('loadclass'), _0x47e4d6(_0x362184));
                    }
                    const _0x19a7a2 = Array.from(_0xc154eb).every(_0x2913a0 => _0x2913a0.classList.contains('loadclass'));
                    _0x19a7a2 && window.removeEventListener('scroll', _0x2e0144);
                    _0xb3ceb6 = false;
                }

                function _0x2e0144() {
                    if (!_0xb3ceb6) {
                        requestAnimationFrame(_0x585a41), _0xb3ceb6 = true;
                    }
                }
                window.addEventListener('scroll', _0x2e0144), _0x585a41();
            }
        }
    }
    if (document.querySelector('#menu-bar .MegaMenu')) {
        const _0x269796 = document.querySelectorAll('.MainMenu-Contianer .MegaMenu');
        for (let _0x146697 = 0; _0x146697 < _0x269796.length; _0x146697++) {
            (function (_0xf4b559) {
                _0xf4b559.addEventListener('mouseenter', function (_0x1caa4b) {
                    const _0x3c03a2 = _0xf4b559.querySelector('.mega-content');
                    if (_0x3c03a2) {
                        const _0x525816 = _0xf4b559.querySelector('a');
                        if (_0x525816.dataset.info) try {
                            const _0x2a8679 = JSON.parse(_0x525816.dataset.info);
                            _0x525816.href = SearchUrl + '/label/' + encodeURIComponent(_0x2a8679.mglabel) + '?max-results=' + getMaxResults, _0x3c03a2.setAttribute('data-label', _0x2a8679.mglabel), _0x3c03a2.setAttribute('data-type', _0x2a8679.mgstyle), _0x3c03a2.classList.add('posts-from');
                        }
                            finally {
                                _0x2eb3d5(_0x1caa4b), _0x525816.removeAttribute('data-info');
                            }
                    }
                });
            })(_0x269796[_0x146697]);
        }
    }
    let _0x4bcfb7 = {},
        _0x31c52f = false;
    document.getElementById('bookmark-count').classList.add('active'), document.getElementById('bookmark-count').textContent = '0';

    function _0x87605f(_0x4eed1f) {
        typeof Storage !== 'undefined' && localStorage.setItem('list', JSON.stringify(_0x4eed1f));
    }

    function _0x4c39c9() {
        const _0x26ef91 = document.querySelector('.bookmarks-list'),
            _0xdf486f = _0x26ef91.querySelector('.bm-posts'),
            _0x211276 = _0x26ef91.querySelector('.clearAll'),
            _0x1e66c2 = _0x26ef91.querySelector('.bmDetails');
        Object.keys(_0x4bcfb7).length > 0 ? (_0x211276.classList.remove('hide'), _0x1e66c2.classList.add('hide')) : (_0x211276.classList.add('hide'), _0x1e66c2.classList.remove('hide')), _0x211276.addEventListener('click', () => {
            _0x4bcfb7 = {}, _0xdf486f.innerHTML = '', _0x211276.classList.add('hide'), _0x1e66c2.classList.remove('hide'), localStorage.removeItem('list'), _0x5f402e();
            const _0x5ef064 = document.querySelectorAll('.post .postSave.filled');
            if (_0x5ef064.length > 0) {
                for (let _0x4c614c = 0; _0x4c614c < _0x5ef064.length; _0x4c614c++) {
                    _0x5ef064[_0x4c614c].classList.remove('filled');
                }
            }
        });
    }

    function _0x5f402e() {
        const _0x4296b4 = document.getElementById('bookmark-count'),
            _0x421989 = Object.keys(_0x4bcfb7).length;
        if (_0x421989 > 0) {
            if (!_0x4296b4.closest('.menubtn').classList.contains('active')) {
                _0x4296b4.parentElement.classList.add('an-extra-alt');
            }
            const _0x525f9e = document.createElement('i');
            _0x525f9e.className = 'fa fa-bookmark', _0x4296b4.nextElementSibling.replaceWith(_0x525f9e);
            if (_0x421989 < 10) {
                _0x4296b4.textContent = _0x421989;
            }
            else _0x4296b4.textContent = '+9';
        }
        else {
            _0x4296b4.parentElement.classList.remove('an-extra-alt');
            const _0x50af7b = document.createElement('i');
            _0x50af7b.className = 'fa fa-bookmark-slash', _0x4296b4.nextElementSibling.replaceWith(_0x50af7b), _0x4296b4.textContent = '0';
        }
    }

    function _0x560ab7() {
        const _0x35a0f6 = JSON.parse(localStorage.getItem('list'));
        if (!_0x35a0f6) return;
        const _0x5a0261 = document.querySelectorAll('.post');
        for (let _0x2c0364 = 0; _0x2c0364 < _0x5a0261.length; _0x2c0364++) {
            const _0x435d65 = _0x5a0261[_0x2c0364],
                _0x1740db = _0x435d65.getAttribute('data-item');
            if (_0x35a0f6[_0x1740db]) {
                const _0x22c0af = _0x435d65.querySelector('.postSave');
                if (_0x22c0af) _0x22c0af.classList.add('filled');
            }
        }
    }

    function _0xa53e9a() {
        const _0x559ad8 = document.querySelector('.bookmarks-list .bm-posts'),
            _0x18945e = JSON.parse(localStorage.getItem('list'));
        if (_0x18945e) {
            _0x4bcfb7 = _0x18945e, document.addEventListener('click', function (_0x18ca68) {
                const _0x4e6fad = _0x18ca68.target.closest('[data-target="vBookmarks"]');
                if (!_0x4e6fad) return;
                _0x4e6fad.classList.remove('an-extra-alt');
                const _0x21436f = Object.keys(_0x4bcfb7);
                for (let _0xe9c3da = 0; _0xe9c3da < _0x21436f.length; _0xe9c3da++) {
                    const _0x1b3b09 = _0x21436f[_0xe9c3da];
                    !_0x559ad8.innerHTML.includes(_0x1b3b09) && _0x4bcfb7[_0x1b3b09] && (_0x559ad8.innerHTML += _0x4bcfb7[_0x1b3b09]);
                }
            }), _0x5f402e(), _0x560ab7();
        }
        _0x4c39c9();
    }

    function _0x24d87c(_0x268bfd, _0x18fe7b, _0x47d0bb, _0x196d8e, _0x5b0ff9, _0x1f8dba, _0x37b0bc) {
        let _0xc7f0b2 = '<div class="post" data-item="' + _0x47d0bb + '">\n<button aria-label="Clear This Item" class="sp-btn snackbar-btn clearItem tooltipped" type="button" data-tooltip="حذف" data-duration="4000" data-type=\'error\'><i class="fa fa-trash"></i></button>\n<div class="post-image">\n<a href="' + _0x5b0ff9 + '" title="' + _0x37b0bc + '" class="image Lazy smimg">\n<img class="lazyload" alt="' + _0x37b0bc + '" data-src="' + _0x196d8e + '" data-sizes="auto">\n</a>\n</div>\n<div class="bookmark-details">\n' + (_0x1f8dba ? '<a class="category-link Categories cateback-' + Math.floor(42 * Math.random() + 1) + '" href="/search/label/' + encodeURIComponent(_0x1f8dba) + '?max-results=' + getMaxResults + '">' + _0x1f8dba + '</a>' : '') + '\n<h3 role="heading" class="post-title"><a title="' + _0x37b0bc + '" href="' + _0x5b0ff9 + '">' + _0x18fe7b + '</a></h3>\n</div>\n</div>';
        if (_0x4bcfb7[_0x47d0bb]) {
            delete _0x4bcfb7[_0x47d0bb], _0x87605f(_0x4bcfb7);
            for (let _0x48fbca = 0; _0x48fbca < document.querySelectorAll('.post[data-item=\'' + _0x47d0bb + '\'] .postSave').length; _0x48fbca++) {
                const _0x126871 = document.querySelectorAll('.post[data-item=\'' + _0x47d0bb + '\'] .postSave')[_0x48fbca];
                _0x126871.classList.remove('filled');
            }
            document.querySelector('.bookmarks-list .bm-posts .post[data-item=\'' + _0x47d0bb + '\']') && document.querySelector('.bookmarks-list .bm-posts .post[data-item=\'' + _0x47d0bb + '\']').remove();;
        }
        else {
            _0x4bcfb7[_0x47d0bb] = _0xc7f0b2, _0x87605f(_0x4bcfb7);
            for (let _0x1f38f4 = 0; _0x1f38f4 < document.querySelectorAll('.post[data-item=\'' + _0x47d0bb + '\'] .postSave').length; _0x1f38f4++) {
                const _0x16cb70 = document.querySelectorAll('.post[data-item=\'' + _0x47d0bb + '\'] .postSave')[_0x1f38f4];
                _0x16cb70.classList.add('filled');
            }
            _0xc7f0b2 ? document.querySelector('.bookmarks-list .bm-posts').innerHTML += _0xc7f0b2 : '';
        }
        document.addEventListener('click', function (_0x102931) {
            const _0x12c0ad = _0x102931.target.closest('[data-target="vBookmarks"]');
            if (!_0x12c0ad) return;
            _0x12c0ad.classList.remove('an-extra');
        }), _0x5f402e(), _0x4c39c9();
    }
    _0xa53e9a(), document.addEventListener('click', function (_0x19947c) {
        const _0x54745e = _0x19947c.target.closest('.postSave');
        if (!_0x54745e) return;
        const _0xb9cabb = _0x54745e.closest('.post');
        if (!_0xb9cabb) return;
        if (_0x54745e.classList.contains('filled')) {
            _0x54745e.setAttribute('data-type', 'error');
            if (Object.keys(_0x4bcfb7).length === 1) {
                _0x54745e.setAttribute('data-message', 'تم إلغاء حفظ جميع المشاركØ§Øª');
            }
            else _0x54745e.setAttribute('data-message', 'تم إلغاء الحفظ');
        }
        else _0x54745e.setAttribute('data-type', 'success'), _0x54745e.setAttribute('data-message', 'تم الحفظ بنجاح');
        const _0x5761d4 = _0xb9cabb.querySelector('.topic-title') ? _0xb9cabb.querySelector('.topic-title')?.['textContent']['trim']() : _0xb9cabb.querySelector('.post-title a')?.['textContent']['trim'](),
            _0x4fb118 = _0xb9cabb.querySelector('.topic-title') ? _0xb9cabb.querySelector('.topic-title')?.['textContent']['trim']() : _0xb9cabb.querySelector('.post-title a')?.['getAttribute']('title') || _0xb9cabb.querySelector('.post-title a')?.['dataset']['title'],
            _0x2ec9b2 = _0xb9cabb.dataset.item,
            _0x3e0cd6 = _0xb9cabb.querySelector('.post-body img') ? _0xb9cabb.querySelector('.post-body img').getAttribute('src') : _0xb9cabb.querySelector('.post-image img') ? _0xb9cabb.querySelector('.post-image img').getAttribute('src') : _0xb9cabb.querySelector('.post-title').getAttribute('data-altsrc'),
            _0x4bc232 = _0xb9cabb.querySelector('.topic-title') ? _0xb9cabb.querySelector('.topic-title')?.['dataset']['althref'] : _0xb9cabb.querySelector('.post-title a')?.['href'],
            _0x34a412 = _0xb9cabb.dataset.cate && _0xb9cabb.dataset.cate !== '' ? _0xb9cabb.dataset.cate : false;
        _0x24d87c(_0x54745e, _0x5761d4, _0x2ec9b2, _0x3e0cd6, _0x4bc232, _0x34a412, _0x4fb118);
    }), document.addEventListener('click', function (_0x194805) {
        const _0x416102 = _0x194805.target.closest('.clearItem');
        if (!_0x416102) return;
        const _0x5bd680 = _0x416102.closest('.post'),
            _0x5b6321 = _0x5bd680.dataset.item,
            _0x705e6e = Object.keys(_0x4bcfb7).length;
        if (_0x705e6e === 1) {
            _0x416102.setAttribute('data-message', 'تم إلغاء حفظ جميع المشاركØ§Øª');
            const _0xdd8716 = _0x5bd680.querySelector('.tooltipped').getAttribute('data-tooltip-id');
            document.querySelector('.bookmarks-list .clearAll').click();
            if (document.getElementById(_0xdd8716)) {
                document.getElementById(_0xdd8716).remove();
            };
        }
        else {
            if (_0x4bcfb7[_0x5b6321]) {
                delete _0x4bcfb7[_0x5b6321], _0x87605f(_0x4bcfb7), _0x416102.setAttribute('data-message', 'تم إلغاء الحفظ');
                for (let _0xb928d1 = 0; _0xb928d1 < document.querySelectorAll('.post[data-item=\'' + _0x5b6321 + '\'] .postSave.filled').length; _0xb928d1++) {
                    const _0x51f437 = document.querySelectorAll('.post[data-item=\'' + _0x5b6321 + '\'] .postSave.filled')[_0xb928d1];
                    _0x51f437.classList.remove('filled');
                }
                const _0x53812a = _0x5bd680.querySelector('.tooltipped').getAttribute('data-tooltip-id');
                _0x5bd680.remove();
                document.getElementById(_0x53812a) && document.getElementById(_0x53812a).remove();;
            }
            _0x5f402e();
        }
    });
    const _0x313839 = [];
    let _0x4c266e = false,
        _0xb5329b = null,
        _0x4e32e9 = 0,
        _0x587309 = 0;
    document.addEventListener('click', function (_0x5aa5dc) {
        const _0x45259d = _0x5aa5dc.target.closest('.snackbar-btn');
        if (!_0x45259d) return;
        const _0x20adfc = _0x45259d.getAttribute('data-message'),
            _0x354399 = _0x45259d.getAttribute('data-action') || '',
            _0x193a1f = parseInt(_0x45259d.getAttribute('data-duration')) || 5000,
            _0x513337 = _0x45259d.getAttribute('data-type') || 'neutral',
            _0x13575f = _0x45259d.getAttribute('data-handler') || null;
        _0x5a43b2(_0x20adfc, _0x354399, _0x13575f, _0x193a1f, _0x513337);
    });

    function _0x5a43b2(_0x21efd5, _0x182a61 = '', _0x44c59d = null, _0x4660e1 = 5000, _0x8676ef = 'neutral') {
        const _0x179822 = {};
        _0x179822.message = _0x21efd5, _0x179822.actionText = _0x182a61, _0x179822.actionHandler = _0x44c59d, _0x179822.duration = _0x4660e1, _0x179822.type = _0x8676ef;
        const _0x1cc2ba = _0x179822;
        if (_0x4c266e) {
            clearTimeout(_0xb5329b);
            const _0x3d4a90 = document.getElementById('snackbar');
            _0x3d4a90.classList.remove('show'), _0x3d4a90.parentElement.fadeOut('100'), _0x3d4a90.classList.add('hide'), setTimeout(() => {
                _0x3d4a90.className = '', _0x313839.unshift(_0x1cc2ba), _0x3ab5a4();
            }, 100), _0x4c266e = false;
        }
        else _0x313839.push(_0x1cc2ba), _0x3ab5a4();
    }

    function _0x3ab5a4() {
        if (_0x313839.length === 0) return;
        const
            {
                message: _0x24aa51,
                actionText: _0x118915,
                actionHandler: _0x5dd179,
                duration: _0x100654,
                type: _0x3f44ce
            } = _0x313839.shift();
        _0x4c266e = true;
        const _0x5f3f54 = document.getElementById('snackbar'),
            _0x307b34 = document.getElementById('snackbar-message'),
            _0x9068c4 = document.getElementById('snackbar-icon'),
            _0x5dc684 = document.getElementById('snackbar-action'),
            _0x4dd63c = document.getElementById('snackbar-close');
        const _0x4431e0 = {};
        _0x4431e0.success = '<i class="fa fa-badge-check"></i>', _0x4431e0.error = '<i class="fa fa-badge-xmark"></i>', _0x4431e0.warning = '<i class="fa fa-alert"></i>', _0x4431e0.gift = '<i class="fa fa-gift"></i>', _0x4431e0.neutral = '<i class="fa fa-info"></i>';
        const _0x1d6037 = _0x4431e0;
        _0x5f3f54.className = '';
        _0x5f3f54.parentElement.fadeIn('100', 'flex');
        _0x5f3f54.classList.add(_0x3f44ce, 'show'), _0x9068c4.innerHTML = _0x1d6037[_0x3f44ce] || '', _0x307b34.textContent = _0x24aa51, _0x118915 ? (_0x5dc684.textContent = _0x118915, _0x5dc684.style.display = 'inline', _0x5dc684.onclick = () => {
            _0x5dd179 && typeof window[_0x5dd179] === 'function' && window[_0x5dd179](), _0x20b8f7();
        }) : _0x5dc684.style.display = 'none', _0x4dd63c.onclick = _0x20b8f7, _0x587309 = _0x100654, _0x4e32e9 = Date.now() + _0x100654, clearTimeout(_0xb5329b), _0xb5329b = setTimeout(_0x20b8f7, _0x100654);
    }

    function _0x20b8f7() {
        const _0x45a8c7 = document.getElementById('snackbar');
        _0x45a8c7.classList.remove('show'), _0x45a8c7.parentElement.fadeOut('100'), _0x45a8c7.classList.add('hide');
        clearTimeout(_0xb5329b);
        _0x4c266e = false, setTimeout(() => {
            _0x45a8c7.className = '';
            if (_0x313839.length > 0) _0x3ab5a4();
        }, 300);
    }
    window.addEventListener('blur', () => {
        if (_0x4c266e && _0x4e32e9 > Date.now()) {
            _0x587309 = _0x4e32e9 - Date.now(), clearTimeout(_0xb5329b);
        }
    }), window.addEventListener('focus', () => {
        if (_0x4c266e && _0x587309 > 0) {
            _0x4e32e9 = Date.now() + _0x587309, _0xb5329b = setTimeout(_0x20b8f7, _0x587309), _0x587309 = 0;
        }
    });
    _0x3a6f87('#searchInput', '#search-results');

    function _0x3a6f87(_0x44e7f9, _0x5bcc80) {
        const _0x56844b = document.querySelector(_0x44e7f9),
            _0x5dc81f = document.querySelector(_0x5bcc80);
        let _0x527305 = false;
        _0x56844b && (_0x56844b.addEventListener('input', _0x298bb0(function () {
            _0x5e37d6();
        }, 500)), _0x56844b.addEventListener('focus', _0x5e37d6));
        document.addEventListener('click', function (_0x4114c9) {
            const _0x59c3a0 = _0x4114c9.target.closest('.search-open'),
                _0x1b4da5 = _0x4114c9.target.closest('.outer_overlay');
            if (_0x59c3a0) {
                document.querySelector('.head-down').slideToggle(200, 'block'), document.querySelector('.outer_overlay').fadeToggle(200, 'block'), document.querySelector('.inner-container').classList.toggle('filter'), document.querySelector('#footer').classList.toggle('filter');
            }
            else {
                if (_0x1b4da5) document.querySelector('.search-open').click();
                else return;
            }
        });

        function _0x5e37d6() {
            _0x527305 = true;
            const _0x2195bc = _0x56844b.value;
            if (!_0x2195bc) {
                _0x5dc81f.innerHTML = '', _0x5dc81f.classList.remove('search-active'), _0x5dc81f.fadeOut('100');
                return;
            }
            fetchData(BlogUrl + 'feeds/posts/summary/?alt=json&start-index=1&max-results=999999999', () => {
                !_0x5dc81f.querySelector('.LoaderCall') && (_0x5dc81f.innerHTML = '<i class="LoaderCall"></i>'), _0x5dc81f.classList.add('search-active'), _0x5dc81f.fadeIn('100', 'flex');
            }, _0x2db439 => {
                const _0x5c948f = _0x2db439.feed.entry,
                    _0x5b541f = _0xba12bf(_0x5c948f, _0x2195bc);
                _0x19a36c(_0x5b541f, _0x5dc81f, _0x2195bc);
            }, _0x3e0576 => {
                _0x5dc81f.textContent = Msg.noResultsFound;
                _0x5dc81f.classList.add('search-active');
                _0x5dc81f.fadeIn('100', 'flex');
            });
        }
        document.addEventListener('click', function (_0x3a0c37) {
            _0x56844b && _0x5dc81f && !_0x3a0c37.target.closest(_0x44e7f9) && !_0x3a0c37.target.closest(_0x5bcc80) && _0x5dc81f.classList.contains('search-active') && (_0x527305 = false, _0x5dc81f.innerHTML = '', _0x5dc81f.classList.remove('search-active'), _0x5dc81f.fadeOut(100));
        });

        function _0xba12bf(_0x3868b6, _0x5bd01c) {
            return _0x3868b6.filter(_0x3dbc8d => {
                const _0x1c379b = _0x3dbc8d.title.$t.toLowerCase();
                const _0x1406fa = _0x5bd01c.toLowerCase();
                return _0x1c379b.includes(_0x1406fa);
            });
        }

        function _0x4eacae(_0x46573b, _0x204a76) {
            const _0x2bddf3 = new RegExp('(' + _0x204a76 + ')', 'gi');
            return _0x46573b.replace(_0x2bddf3, '<span class="search-highlight">$1</span>');
        }

        function _0x19a36c(_0x8b45f2, _0x14e78f, _0x3eeae0) {
            _0x14e78f.innerHTML = '';
            if (_0x8b45f2.length === 0) _0x14e78f.textContent = Msg.noResultsFound, _0x14e78f.classList.add('search-active'), _0x14e78f.fadeIn('100', 'flex');
            else {
                for (let _0x1b1268 = 0, _0x1b855e = _0x8b45f2.length; _0x1b1268 < _0x1b855e; _0x1b1268++) {
                    const _0x4910f9 = _0x8b45f2[_0x1b1268],
                        _0x52cc9d = _0x2cb131(_0x4910f9),
                        _0x184727 = _0x4eacae(_0x52cc9d.FullTitle, _0x3eeae0),
                        _0x3c5b5f = '\n<div class="search-result">\n<a title="' + _0x52cc9d.FullTitle + '" href="' + _0x52cc9d.Link + '">\n<div class="image Lazy smimg">\n  <img class="lazyload" data-sizes="auto" data-src="' + _0x52cc9d.ImgUrl + '" alt="' + _0x52cc9d.FullTitle + '"/>\n</div>\n<h3 role="heading" class="post-title">' + _0x184727 + '</h3>\n</a>\n</div>\n';
                    _0x14e78f.insertAdjacentHTML('beforeend', _0x3c5b5f);
                }
                _0x14e78f.classList.add('search-active'), _0x14e78f.fadeIn('100', 'flex');
            }
        }
    }

    function _0x41d00b() {
        const _0x47747c = document.querySelector('#LinkList3');
        if (!_0x47747c) return;
        const _0x590fac = document.querySelectorAll('#LinkList3 li a');
        for (let _0x55987b = 0; _0x55987b < _0x590fac.length; _0x55987b++) {
            const _0x55d61e = _0x590fac[_0x55987b],
                _0x5e4f7c = _0x55d61e.dataset.link;
            if (_0x5e4f7c) {
                const [_0x2bf2cb, _0x22b7ee, _0x293193] = _0x5e4f7c.split('+').map(_0x1201de => _0x1201de.trim());
                !_0x55d61e.querySelector('.service-title') && _0x55d61e.insertAdjacentHTML('beforeend', '<span class=\'service-title an-up\'>' + _0x2bf2cb + '</span>');
                !_0x55d61e.querySelector('.service-description') && _0x55d61e.insertAdjacentHTML('beforeend', '<span class=\'service-description an-up\'>' + _0x22b7ee + '</span>');
                if (_0x293193) {
                    _0x55d61e.setAttribute('href', _0x293193);
                    const _0x444931 = ['aria-disabled', 'role', 'onclick'];
                    for (let _0x2c04d1 = 0; _0x2c04d1 < _0x444931.length; _0x2c04d1++) {
                        _0x55d61e.removeAttribute(_0x444931[_0x2c04d1]);
                    }
                }
                _0x55d61e.removeAttribute('data-link'), _0x55d61e.getAttribute('href') === '#' && _0x55d61e.classList.add('nolink-service');
            }
        }
        ServiceGrid && (_0x47747c.querySelector('.posts-loading') && _0x47747c.querySelector('.posts-loading').remove(), _0x47747c.querySelector('.services-wrapper').fadeIn(300, 'block'));
    }
    if (isMultipleItems) {
        function _0x33f77b(_0x2aa4c9) {
            let _0x1ab799;
            const _0x1a591c = document.querySelector('.blog-posts'),
                _0x2d4a2a = _0x1a591c.querySelectorAll('.post-outer').length,
                _0x2abc4c = document.createElement('div');
            _0x2abc4c.innerHTML = _0x2aa4c9;
            const _0x33ee80 = _0x2abc4c.querySelector('.blog-posts');
            if (!_0x33ee80 || !_0x33ee80.querySelectorAll('.post-outer').length) {
                document.querySelector('.loadMore').setAttribute('disabled', 'disabled');
                document.querySelector('.nomore-posts').classList.remove('hide');
                document.querySelector('.loadmore-text').classList.add('hide');
                document.querySelector('.loading-text').classList.add('hide');
                document.querySelector('.loading-post').classList.add('hide');
                return;
            }
            if (_0x12460f.getAttribute('data-fetch')) {
                _0x1ab799 = _0x2abc4c, _0x12460f = _0x1ab799.querySelector('.loadMore'), _0x1ab799 = _0x1ab799.querySelector('.blog-posts').innerHTML, _0x1a591c.insertAdjacentHTML('beforeend', _0x1ab799), document.querySelector('.loading-text').classList.add('hide'), document.querySelector('.loading-post').classList.add('hide'), document.querySelector('.loadmore-text').classList.remove('hide'), requestAnimationFrame(() => {
                    const _0x59c569 = _0x1a591c.querySelectorAll('.post-outer'),
                        _0x45f1fa = _0x59c569[_0x2d4a2a];
                    _0x45f1fa && scrollToElement(_0x45f1fa);
                });
            }
            else document.querySelector('.nomore-posts').classList.add('hide'), document.querySelector('.loadmore-text').classList.remove('hide');
            const _0x50d717 = document.querySelectorAll('.blog-posts .post-outer');
            for (let _0x15b090 = 0; _0x15b090 < _0x50d717.length; _0x15b090++) {
                const _0x8c6c14 = _0x50d717[_0x15b090],
                    _0x252367 = _0x8c6c14.querySelector('.dateSpesh') ? _0x8c6c14.querySelector('.dateSpesh') : null;
                if (_0x252367) {
                    const _0x3436f4 = _0x252367.querySelector('time').getAttribute('datetime');
                    _0x252367.querySelector('time').innerHTML = timeAgo ? langDate(_0x3436f4) : _0x3436f4.slice(8, 10) + ' ' + langDate(_0x3436f4) + ' ' + _0x3436f4.slice(0, 4);
                }
            }
            _0x560ab7();
        }
        let _0x12460f = document.querySelector('.loadMore');
        document.querySelector('.blog-posts .post-outer') && _0x12460f && _0x12460f.getAttribute('data-fetch').replace('http://', 'https://') && _0x12460f.addEventListener('click', function () {
            _0x12460f && _0x12460f.getAttribute('data-fetch').replace('http://', 'https://') ? (document.querySelector('.loading-text').classList.remove('hide'), document.querySelector('.loading-post').classList.remove('hide'), document.querySelector('.loadmore-text').classList.add('hide'), loadFun(_0x12460f.getAttribute('data-fetch').replace('http://', 'https://'), _0x33f77b)) : (document.querySelector('.loadMore').setAttribute('disabled', 'disabled'), document.querySelector('.nomore-posts').classList.remove('hide'), document.querySelector('.loadmore-text').classList.add('hide'));
        });
    }

    function _0x123179() {
        _0x1bd254(), _0x1b18fc(), _0x47f91a();

        function _0x1bd254() {
            if (document.querySelector('.separator a'))
                for (let _0x99e2a7 = 0; _0x99e2a7 < document.querySelectorAll('.separator a').length; _0x99e2a7++) {
                    const _0x17b842 = document.querySelectorAll('.separator a')[_0x99e2a7];
                    _0x17b842.addEventListener('click', function (_0x4bf4e1) {
                        _0x4bf4e1.preventDefault();
                    });
                }
            if (document.querySelector('.separator a:not([href*=\'bp.blogspot.com\']):not([href*=\'googleusercontent\'])'))
                for (let _0x2ee8ce = 0; _0x2ee8ce < document.querySelectorAll('.separator a:not([href*=\'bp.blogspot.com\']):not([href*=\'googleusercontent\'])').length; _0x2ee8ce++) {
                    const _0x2fb565 = document.querySelectorAll('.separator a:not([href*=\'bp.blogspot.com\']):not([href*=\'googleusercontent\'])')[_0x2ee8ce];
                    _0x2fb565.onclick = function (_0x589453) {
                        _0x2fb565.getAttribute('target') == '_blank' ? window.open(_0x2fb565.href) : location.href = _0x2fb565.href;
                    };
                }
            if (document.querySelector('.post-body a'))
                for (let _0x5acb6a = 0; _0x5acb6a < document.querySelectorAll('.post-body a').length; _0x5acb6a++) {
                    const _0x4da619 = document.querySelectorAll('.post-body a')[_0x5acb6a];
                    if (!_0x4da619.closest('#redirect-page') && !_0x4da619.closest('.separator') && !_0x4da619.classList.contains('hidden-link') && !_0x4da619.classList.contains('elbananet-button') && !_0x4da619.querySelector('img')) {
                        _0x4da619.hasAttribute('target') && _0x4da619.getAttribute('target') === '_blank' ? _0x4da619.classList.add('external-elbananetlink') : _0x4da619.classList.add('internal-elbananetlink');
                    }
                }
        }

        function _0x1b18fc() {
            function _0x45c348(_0x3f547f) {
                return _0x3f547f.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            }

            function _0x3e3cc1() {
                document.querySelectorAll('.post-body .search-highlight').forEach(_0x2be23c => {
                    const _0x4855f8 = _0x2be23c.parentNode;
                    if (_0x4855f8) _0x4855f8.replaceChild(document.createTextNode(_0x2be23c.textContent), _0x2be23c);
                    _0x4855f8.normalize();
                });
            }

            function _0x4d2713(_0x3a787a, _0x3dd50c) {
                let _0x1056af;
                return function () {
                    clearTimeout(_0x1056af);
                    _0x1056af = setTimeout(() => _0x3a787a.apply(this, arguments), _0x3dd50c);
                };
            }

            function _0x5f5e9f(_0x4dedfc, _0x29f5bb) {
                const _0x4a28ea = document.createTreeWalker(_0x4dedfc, NodeFilter.SHOW_TEXT, null, false);
                let _0x2c2565 = [],
                    _0x418cc9 = '',
                    _0x2b18a8;
                while (_0x2b18a8 = _0x4a28ea.nextNode()) {
                    const _0x5b91c4 = {};
                    _0x5b91c4.node = _0x2b18a8, _0x5b91c4.start = _0x418cc9.length, _0x2c2565.push(_0x5b91c4), _0x418cc9 += _0x2b18a8.textContent;
                }
                const _0x51918f = _0x418cc9.toLowerCase().indexOf(_0x29f5bb.toLowerCase());
                if (_0x51918f === -1) return false;
                const _0x25f4e5 = _0x51918f + _0x29f5bb.length;
                let _0x319d75 = 0;
                while (_0x319d75 < _0x2c2565.length && _0x2c2565[_0x319d75].start + _0x2c2565[_0x319d75].node.textContent.length < _0x51918f) _0x319d75++;
                let _0x3954af = [];
                while (_0x319d75 < _0x2c2565.length && _0x2c2565[_0x319d75].start < _0x25f4e5) {
                    const _0x440111 = _0x2c2565[_0x319d75],
                        _0x1bbad8 = _0x440111.node.textContent,
                        _0xf40e7 = Math.max(0, _0x51918f - _0x440111.start),
                        _0x21b1ad = Math.min(_0x1bbad8.length, _0x25f4e5 - _0x440111.start),
                        _0x4ca0f0 = {};
                    _0x4ca0f0.node = _0x440111.node, _0x4ca0f0.start = _0xf40e7, _0x4ca0f0.end = _0x21b1ad, _0x3954af.push(_0x4ca0f0), _0x319d75++;
                }
                return _0x3954af.reverse().forEach((
                    {
                        node: _0x5f50d1,
                        start: _0x10cff9,
                        end: _0x287188
                    }) => {
                    const _0x3e597b = _0x5f50d1.textContent,
                        _0x18f43b = _0x3e597b.slice(0, _0x10cff9),
                        _0x16b6d7 = _0x3e597b.slice(_0x10cff9, _0x287188),
                        _0x51debe = _0x3e597b.slice(_0x287188),
                        _0x2d53af = _0x5f50d1.parentNode,
                        _0x26fb6f = document.createDocumentFragment();
                    if (_0x18f43b) _0x26fb6f.appendChild(document.createTextNode(_0x18f43b));
                    const _0x204491 = document.createElement('span');
                    _0x204491.className = 'search-highlight', _0x204491.textContent = _0x16b6d7, _0x26fb6f.appendChild(_0x204491);
                    if (_0x51debe) _0x26fb6f.appendChild(document.createTextNode(_0x51debe));
                    _0x2d53af.replaceChild(_0x26fb6f, _0x5f50d1);
                }), true;
            }
            document.querySelector('#SearchInputPost').addEventListener('input', _0x4d2713(function () {
                const _0x52bcb3 = document.querySelector('.post-body'),
                    _0x32bbf6 = this.value.trim();
                _0x3e3cc1();
                if (_0x32bbf6.length > 0) {
                    const _0x5f2858 = _0x5f5e9f(_0x52bcb3, _0x32bbf6);
                    if (_0x5f2858) {
                        const _0x1fa7a6 = document.querySelector('.post-body .search-highlight');
                        _0x1fa7a6 && scrollToElement(_0x1fa7a6);
                    }
                }
            }, 500));
            document.querySelector('.post-outer') && document.querySelectorAll('.post-outer').forEach(_0x3433df => {
                _0x3433df.addEventListener('click', _0x4db874 => {
                    _0x4db874.target.closest('.ResetPostsSearch') && (scrollToElement(document.querySelector('#searchpost')), document.querySelector('#SearchInputPost').value = '', _0x3e3cc1(), document.querySelector('#SearchInputPost').focus());
                });
            });
            if (!document.querySelector('#authors-page')) {
                _0x2ab557();
            }

            function _0x2ab557() {
                const _0x3a7443 = ':empty,br,.redNumperContent,.separator,.separator *,code,code *';
                let _0x2ad830 = 0;
                document.addEventListener('click', function (_0x53d1f3) {
                    const _0x4da022 = _0x53d1f3.target.closest('.topic-options li:not(:first-of-type) button');
                    if (!_0x4da022) return;
                    const _0x464fc1 = document.querySelector('.post-body');
                    if (!_0x464fc1) return;
                    if (_0x4da022.classList.contains('text-increase')) _0x2ad830 += 1;
                    else {
                        if (_0x4da022.classList.contains('text-decrease')) _0x2ad830 -= 1;
                        else _0x4da022.classList.contains('text-normal') && (_0x2ad830 = 0);
                    }
                    _0x2d48bb(_0x464fc1, _0x2ad830, _0x3a7443);
                });
            }

            function _0x2d48bb(_0x4b3e00, _0x377e1e, _0x172749) {
                _0x33c00e(_0x4b3e00);
                if (_0x377e1e === 0) return;
                _0x3faa84(_0x4b3e00, _0x377e1e, _0x172749);
            }

            function _0x3faa84(_0x177c60, _0x5a40f4, _0x5b5165) {
                const _0x4d1cf7 = _0x177c60.querySelectorAll('*:not(' + _0x5b5165 + ')');
                for (let _0x10bcbd = 0; _0x10bcbd < _0x4d1cf7.length; _0x10bcbd++) {
                    let _0x5605d9 = _0x4d1cf7[_0x10bcbd];
                    _0x5605d9.childNodes.length > 0 && _0x367abe(_0x5605d9, _0x5a40f4);
                }
                const _0x3b78fd = _0x129d00(_0x177c60);
                let _0xae9426;
                while (_0xae9426 = _0x3b78fd.nextNode()) {
                    if (_0x551f6e(_0xae9426, _0x5b5165)) continue;
                    _0x11523c(_0xae9426, _0x177c60) && _0x2b7f0b(_0xae9426, _0x5a40f4);
                }
            }

            function _0x551f6e(_0x25ab04, _0x2eb283) {
                if (_0x25ab04.nodeValue.trim() === '') return true;
                if (_0x25ab04.parentNode.style && _0x25ab04.parentNode.style.fontSize) return true;
                if (_0x25ab04.parentNode.closest && _0x25ab04.parentNode.closest(_0x2eb283)) return true;
                return _0x25ab04.parentNode.classList && _0x25ab04.parentNode.classList.contains('redNumperContent');
            }

            function _0x11523c(_0x193d3a, _0x234183) {
                const _0x3b48b7 = _0x193d3a.parentNode;
                return _0x3b48b7.nodeName === 'DIV' || _0x3b48b7.nodeName === 'P' || _0x3b48b7 === _0x234183;
            }

            function _0x129d00(_0xc6b591) {
                return document.createTreeWalker(_0xc6b591, NodeFilter.SHOW_TEXT,
                    {
                        'acceptNode': function (_0x154118) {
                            return _0x154118.nodeValue.trim() === '' ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
                        }
                    }, false);
            }

            function _0x2b7f0b(_0x3100e3, _0x30832) {
                const _0xcc4927 = document.createElement('span');
                const _0x372ed0 = _0x3100e3.parentNode;
                _0xcc4927.dataset.origSize = _0xda2e14(_0x372ed0, 'font-size'), _0xcc4927.dataset.origLineHeight = _0xda2e14(_0x372ed0, 'line-height');
                _0xcc4927.dataset.isTextWrapper = 'true', _0xcc4927.textContent = _0x3100e3.nodeValue;
                _0x367abe(_0xcc4927, _0x30832), _0x3100e3.parentNode.replaceChild(_0xcc4927, _0x3100e3);
            }

            function _0xda2e14(_0x2bf63f, _0x2b7f50) {
                const _0x2c9f90 = 'data-orig-' + (_0x2b7f50 === 'font-size' ? 'size' : 'line-height');
                if (_0x2bf63f.hasAttribute(_0x2c9f90)) return _0x2bf63f.getAttribute(_0x2c9f90);
                const _0x343081 = window.getComputedStyle(_0x2bf63f),
                    _0x3e0177 = _0x343081.getPropertyValue(_0x2b7f50);
                if (_0x48cd22(_0x2bf63f, _0x2b7f50)) return _0x3e0177;
                const _0x39b469 = document.querySelector('.post-body');
                return _0x39b469 ? window.getComputedStyle(_0x39b469).getPropertyValue(_0x2b7f50) : _0x3e0177;
            }

            function _0x48cd22(_0x396c92, _0x3c7aa9) {
                const _0x298e24 = _0x3c7aa9.replace(/-([a-z])/g, _0x21f576 => _0x21f576[1].toUpperCase());
                if (_0x396c92.style && _0x396c92.style[_0x298e24]) {
                    return true;
                }
                for (let _0x10417b = 0; _0x10417b < document.styleSheets.length; _0x10417b++) {
                    let _0x51ebf0 = document.styleSheets[_0x10417b];
                    try {
                        if (!_0x51ebf0.cssRules) continue;
                        for (let _0x2fba7c of _0x51ebf0.cssRules) {
                            if (_0x2fba7c.selectorText && _0x396c92.matches(_0x2fba7c.selectorText)) {
                                if (_0x2fba7c.style && _0x2fba7c.style[_0x298e24]) {
                                    return true;
                                }
                            }
                        }
                    }
                    catch (_0x2cb4ff) {
                        continue;
                    }
                }
                return false;
            }

            function _0x367abe(_0xcaac95, _0x2d784c) {
                !_0xcaac95.dataset.origSize && (_0xcaac95.dataset.origSize = _0xda2e14(_0xcaac95, 'font-size'));
                if (!_0xcaac95.dataset.origLineHeight) {
                    _0xcaac95.dataset.origLineHeight = _0xda2e14(_0xcaac95, 'line-height');
                }
                const _0x1fc733 = parseFloat(_0xcaac95.dataset.origSize),
                    _0x2d1d9c = parseFloat(_0xcaac95.dataset.origLineHeight);
                const _0x1dc4f4 = _0x1fc733 + _0x2d784c;
                _0xcaac95.style.fontSize = _0x1dc4f4 + 'px';
                if (!isNaN(_0x2d1d9c)) {
                    const _0x35397a = _0x1dc4f4 / _0x1fc733;
                    _0xcaac95.style.lineHeight = _0x2d1d9c * _0x35397a + 'px';
                }
            }

            function _0x33c00e(_0x71ca1b) {
                const _0x4fdaab = _0x71ca1b.querySelectorAll('*[data-orig-size]');
                for (let _0x25245d = 0; _0x25245d < _0x4fdaab.length; _0x25245d++) {
                    let _0x447670 = _0x4fdaab[_0x25245d];
                    _0x447670.style.fontSize = _0x447670.dataset.origSize, _0x447670.style.lineHeight = _0x447670.dataset.origLineHeight;
                }
                const _0x29633e = _0x71ca1b.querySelectorAll('[data-is-text-wrapper="true"]');
                for (let _0x57f4e0 = 0; _0x57f4e0 < _0x29633e.length; _0x57f4e0++) {
                    let _0x3c8fb9 = _0x29633e[_0x57f4e0];
                    const _0x224254 = document.createTextNode(_0x3c8fb9.textContent);
                    _0x3c8fb9.parentNode.replaceChild(_0x224254, _0x3c8fb9);
                }
            }
        }
        let _0x3cc65e;
        if (wdHref.includes('?') && wdHref.includes('&') && localStorage.getItem('lock-' + itemId) === 'true') {
            const _0xa01e06 = wdHref.split('?')[1].split('&'),
                _0x2d3f77 = _0xa01e06.find(_0x56a034 => _0x56a034.split('=')[0] === 'id'),
                _0x30884e = _0xa01e06.find(_0x195193 => _0x195193.split('=')[0] === 'referrer'),
                _0x1f7b8c = _0x30884e !== undefined ? _0x30884e.split('=')[1] : undefined,
                _0x1b8e9a = _0x2d3f77 !== undefined ? _0x2d3f77.split('=')[1] : undefined,
                _0x4617b6 = document.referrer;
            _0x1b8e9a == itemId && (_0x1f7b8c == 'facebook' || _0x1f7b8c == 'X') && (_0x4617b6.includes('facebook.com') || _0x4617b6.includes('t.co')) ? (localStorage.setItem('lock-' + itemId, 'false'), _0x3cc65e = 'false') : (localStorage.setItem('lock-' + itemId, 'true'), _0x3cc65e = 'true');
        }
        else _0x3cc65e = localStorage.getItem('lock-' + itemId) === 'false' ? 'false' : (() => {
            localStorage.setItem('lock-' + itemId, 'true');
            return 'true';
        })();
        const _0x5517e5 = document.querySelector('.hiddenContent');
        if (_0x5517e5) {
            if (_0x3cc65e === 'true') {
                const _0x31b3f6 = document.querySelector('.post-body .hiddenContent');
                _0x31b3f6 && document.querySelectorAll('.post-body .hiddenContent').forEach(_0x3cafa8 => {
                    const _0x464839 = 'https://www.facebook.com/sharer.php?u=' + encodeURIComponent(wdHref + '?id=' + itemId + '&referrer=facebook'),
                        _0x1a87f8 = 'https://x.com/intent/post?url=' + encodeURIComponent(wdHref + '?id=' + itemId + '&referrer=X');
                    let _0x3b24eb = '\n<h6 class="hdContent-title">\n<i class="fa fa-face-hand-peeking" aria-hidden="true"></i>\nالمحتوى مخفي\n</h6>\n<span class="hdContent-desc">قم بمشاركة الموضوع وأعد الدخول عبر الرابط المنشور لإظهار المحتوى</span>\n<a data-tooltip="مشاركة عبØ± ' + socialNames('facebook') + '" target="blank" href="' + _0x464839 + '" class="tooltipped hidden-link hidden-link-facebook">\n<i class="fa fa-facebook"></i>' + socialNames('facebook') + '\n</a>\n<a data-tooltip="مشاركة عبر ' + socialNames('x-twitter') + '" target="blank" href="' + _0x1a87f8 + '" class="tooltipped hidden-link hidden-link-X">\n<i class="fa fa-x-twitter"></i>' + socialNames('x-twitter') + '\n</a>\n';
                    _0x3cafa8.style.display = 'block', _0x3cafa8.innerHTML = _0x3b24eb;
                });
            }
            else _0x3cc65e === 'false' && document.querySelector('.hiddenContent')?.['classList']['remove']('hiddenContent');
        }

        function _0x47f91a() {
            const _0xeb60a6 = Array.from(document.querySelectorAll('.post-body *')).concat(Array.from(document.querySelectorAll('.post-body'))).map(_0x5419d6 => Array.from(_0x5419d6.childNodes)).flat(),
                _0x4a8884 = _0xeb60a6.filter(_0x5bc499 => _0x5bc499.nodeType === 8 && _0x5bc499.textContent.startsWith('video') && _0x5bc499.textContent.includes('iframe'));
            _0x4a8884.forEach(function (_0x77cea0) {
                const _0x15adc3 = _0x77cea0.previousElementSibling || _0x77cea0.parentNode;
                window.addEventListener('scroll', _0x532c90);

                function _0x532c90() {
                    window.scrollY >= _0x15adc3.getBoundingClientRect().top - 500 && (_0x494c39(_0x77cea0), window.removeEventListener('scroll', _0x532c90));
                }
            });

            function _0x494c39(_0x17bc54) {
                const _0xaf4c4b = document.createElement('div');
                _0xaf4c4b.classList.add('video-wrapper'), _0xaf4c4b.innerHTML = _0x17bc54.textContent.replace('video', '').trim(), _0x17bc54.after(_0xaf4c4b), _0x17bc54.remove();
            }
        }
        if (document.querySelectorAll('.post-body pre').length !== 0) {
            getScript('https://cdn.elbana.net/flaspeed/prism.min.js', function () {
                const _0x59c368 = document.querySelectorAll('.elbananet-pre');
                for (let _0x3ebbfe = 0; _0x3ebbfe < _0x59c368.length; _0x3ebbfe++) {
                    const _0x1432b1 = _0x59c368[_0x3ebbfe],
                        _0x3e9232 = _0x1432b1.querySelector('.code-header'),
                        _0x2d3612 = _0x1432b1.querySelector('code');
                    if (!_0x3e9232 || !_0x2d3612) continue;
                    const _0x33d272 = 'copycode-' + _0x3ebbfe;
                    !_0x3e9232.querySelector('.copycode-btn') && (_0x2d3612.id = _0x33d272, _0x3e9232.insertAdjacentHTML('beforeend', '\n<button class="copycode-btn snackbar-btn waves-effect tooltipped" data-duration="2000" data-message="' + Msg.copyToClipboard + '" data-type="success" data-tooltip="' + Msg.copyToClipboard + '" type="button" aria-label="Copy Code" data-target="' + _0x33d272 + '">\n<i class="fa fa-copy"></i>\n</button>\n'));
                    const _0xc9cdc7 = _0x1432b1.querySelector('.copycode-btn');

                    function _0x5da09b(_0x3913fd) {
                        const _0x101918 = document.createRange();
                        _0x101918.selectNodeContents(_0x3913fd);
                        const _0x34767c = window.getSelection();
                        _0x34767c.removeAllRanges(), _0x34767c.addRange(_0x101918);
                    }

                    function _0x57fcf2(_0x32f17) {
                        navigator.clipboard.writeText(_0x32f17.textContent).catch(console.error);
                    }
                    _0xc9cdc7?.['addEventListener']('click', () => {
                        _0x5da09b(_0x2d3612), _0x57fcf2(_0x2d3612);
                    });
                    let _0x4bc9d1 = 0;
                    _0x2d3612.addEventListener('click', () => {
                        const _0x1aeca6 = Date.now();
                        _0x1aeca6 - _0x4bc9d1 < 300 ? _0x5da09b(_0x2d3612) : _0x57fcf2(_0x2d3612), _0x4bc9d1 = _0x1aeca6;
                    });
                }
            }, 'anysc');
        }
        _0x3a5c7e();
    }

    function _0x31a70c() {
        const _0x1c61e5 = document.querySelectorAll('.nextTopic, .prevTopic');
        if (_0x1c61e5.length === 0) return;
        _0x1c61e5.forEach(_0x4984d8 => {
            const _0x5ded0f = _0x4984d8.classList.contains('prevTopic'),
                _0x2e1f14 = _0x4984d8.querySelector('meta[name="' + (_0x5ded0f ? 'postOlderHref' : 'postNewerHref') + '"]')?.['getAttribute']('content'),
                _0xbdda3e = _0x5ded0f ? 'المقال السابق' : 'المقال التالي',
                _0x57404c = _0x5ded0f ? 'prev' : 'next';
            if (!_0x2e1f14) return;
            loadFun(_0x2e1f14, _0x5b2133 => {
                const _0x31bdcf = new DOMParser().parseFromString(_0x5b2133, 'text/html'),
                    _0x5a621b = _0x31bdcf.querySelector('meta[name="postPoster"]')?.['getAttribute']('content') || AltImage,
                    _0x4e4fa8 = _0x31bdcf.querySelector('meta[name="postTitle"]')?.['getAttribute']('content') || '',
                    _0x5f0f7c = '\n<div class="post-image">\n<a class="topic-img image Lazy smimg" href="' + _0x2e1f14 + '" title="' + _0x4e4fa8 + '">\n<img class="lazyload" data-sizes="auto" data-src="' + _0x5a621b + '" alt="' + _0x4e4fa8 + '"/>\n</a>\n</div>\n<div class="nxpvContent">\n<span class="' + _0x57404c + '-text">' + _0xbdda3e + '</span>\n<h3 class="post-title">\n<a href="' + _0x2e1f14 + '">' + _0x4e4fa8 + '</a>\n</h3>\n</div>\n';
                _0x4984d8.insertAdjacentHTML('beforeend', _0x5f0f7c);
                const _0x43dc86 = document.querySelector('.nooldposts, .nonewposts');
                _0x43dc86 && (_0x43dc86.style.display = 'flex');
            });
        });
    }

    function _0x2b0c48() {
        const _0x2e524b = typeof AuthorsInfo !== 'undefined' && typeof AuthorName !== 'undefined' ? AuthorsInfo.find(_0x54d39c => _0x54d39c.name === AuthorName) : null,
            _0x5c88c3 = _0x2e524b ? _0x2e524b.provided : false,
            _0x36873b = _0x2e524b && _0x5c88c3 && Object.keys(_0x2e524b.ADS).length > 0 ? _0x2e524b.ADS : typeof AuthorsInfo !== 'undefined' ? AuthorsInfo :
                {},
            _0x247630 = _0x23b80a(),
            _0x1b3fa7 = (_0x9cb879, _0x1ca526 = false, _0x256bcd) => {
                try {
                    let _0x385d9c = {};
                    const _0x54c194 = _0x31fa41 => {
                        _0x31fa41 && typeof _0x31fa41 === 'object' && Object.keys(_0x31fa41).forEach(_0x951583 => {
                            !_0x385d9c[_0x951583] && (_0x385d9c[_0x951583] = _0x31fa41[_0x951583]);
                        });
                    };
                    typeof _0x36873b !== 'undefined' && _0x54c194(_0x36873b);
                    if (typeof AuthorsInfo !== 'undefined') {
                        if (Array.isArray(AuthorsInfo)) AuthorsInfo.forEach(_0x36104c => _0x54c194(_0x36104c));
                        else {
                            _0x54c194(AuthorsInfo);
                        }
                    }
                    Object.keys(_0x385d9c).filter(_0x38535d => {
                        return _0x9cb879.some(_0x2b1649 => {
                            return _0x1ca526 ? _0x38535d === _0x2b1649 : _0x38535d.startsWith(_0x2b1649);
                        });
                    }).forEach(_0x4b7b48 => {
                        try {
                            const _0x4379cf = _0x4b7b48.split('-').pop(),
                                _0x512466 = _0x385d9c[_0x4b7b48];
                            _0x512466 && _0x512466.trim() !== '' && _0x256bcd(_0x4b7b48, _0x512466, _0x4379cf);
                        }
                        catch (_0x12daaf) {
                            console.error('Error processing ad key ' + _0x4b7b48 + ':', _0x12daaf);
                        }
                    });
                }
                catch (_0x5efe99) {
                    console.error('Error in processKeysWithConditions:', _0x5efe99);
                }
            };
        (() => {
            try {
                (typeof PagedPost === 'undefined' || !PagedPost) && _0x1b3fa7(['topic-ad-p-', 'topic-ad-h2-', 'topic-ad-h3-', 'topic-ad-h4-', 'topic-ad-bq-'], false, (_0x10e1b7, _0x4e7fb4, _0x56f40b) => {
                    try {
                        const _0x133ca6 = parseInt(_0x56f40b) - 1,
                            _0x38d3fb = _0x10e1b7.includes('-p-') ? 'p' : _0x10e1b7.includes('-h2-') ? 'h2' : _0x10e1b7.includes('-h3-') ? 'h3' : _0x10e1b7.includes('-h4-') ? 'h4' : 'blockquote',
                            _0x263030 = _0x10e1b7.includes('-p-') || _0x10e1b7.includes('-bq-') ? 'after' : 'before',
                            _0x54bf1b = _0x10e1b7.includes('-p-') ? 'paragraph-ad ph-' : _0x10e1b7.includes('-h') ? 'headline-ad h-' : 'blockquote-ad bq-',
                            _0x4242eb = document.querySelectorAll('.post-body ' + _0x38d3fb);
                        _0x4242eb && _0x4242eb[_0x133ca6] && _0x4242eb[_0x133ca6].textContent && _0x4242eb[_0x133ca6].textContent.trim() !== '' && _0x4242eb[_0x133ca6].appendElements('<div class="inside-ad ' + _0x54bf1b + 'ad-' + _0x56f40b + '">' + _0x4e7fb4 + '</div>', _0x263030);
                    }
                    catch (_0x2f68f3) {
                        console.error('Error inserting content ad ' + _0x10e1b7 + ':', _0x2f68f3);
                    }
                }), _0x1b3fa7(['top-ad', 'mid-ad', 'bot-ad', 'str-ad', 'divider-ad', 'rlt-ad', 'cmt-ad', 'end-ad', 'spc-ad'], true, (_0x2df954, _0x38ad9d, _0x19c85c) => {
                    try {
                        if (_0x2df954 === 'spc-ad') {
                            const _0x2e8fe6 = Array.from(document.querySelectorAll('.post-body *')).find(_0x1087a6 => _0x1087a6.textContent && _0x1087a6.textContent.trim() === '$$');
                            if (_0x2e8fe6) {
                                _0x2e8fe6.outerHTML = '<div class="spc-ad"></div>';
                                const _0x2342b3 = document.querySelectorAll('.spc-ad');
                                _0x2342b3.length > 0 && _0x2342b3.forEach(_0x2f6abe => {
                                    _0x2f6abe.appendElements(_0x38ad9d, 'append');
                                });
                            }
                            return;
                        }
                        if (typeof PagedPost !== 'undefined' && PagedPost && _0x2df954 === 'divider-ad') {
                            const _0x4adea3 = document.querySelector('.post-pages');
                            if (_0x4adea3) {
                                _0x4adea3.insertAdjacentHTML('afterend', '<div class="article-ad divider-ad"></div>');
                                const _0x148f23 = document.querySelector('.divider-ad');
                                _0x148f23 && _0x148f23.appendElements(_0x38ad9d, 'append');
                            }
                            return;
                        }
                        if ((typeof PagedPost === 'undefined' || !PagedPost) && _0x2df954 === 'mid-ad' && _0x247630) {
                            _0x247630.appendElements('<div class="Middle-Ad">' + _0x38ad9d + '</div>', 'after');
                            return;
                        }
                        const _0x1226ba = {};
                        _0x1226ba['str-ad'] = '.str-ad', _0x1226ba['top-ad'] = '.top-ad', _0x1226ba['bot-ad'] = '.bot-ad', _0x1226ba['rlt-ad'] = '.rlt-ad', _0x1226ba['cmt-ad'] = '.cmt-ad', _0x1226ba['end-ad'] = '.end-ad';
                        const _0x1afff7 = _0x1226ba,
                            _0x85b93e = _0x1afff7[_0x2df954];
                        if (_0x85b93e) {
                            const _0x2fadd6 = document.querySelector(_0x85b93e);
                            _0x2fadd6 && _0x2fadd6.appendElements(_0x38ad9d, 'append');
                        }
                    }
                    catch (_0x5de0bf) {
                        console.error('Error processing static ad ' + _0x2df954 + ':', _0x5de0bf);
                    }
                }), setTimeout(() => {
                    try {
                        const _0x560431 = document.querySelectorAll('ins.adsbygoogle:empty');
                        _0x560431.length > 0 && _0x560431.forEach((_0x2b3dde, _0x560dab) => {
                            try {
                                !_0x2b3dde.dataset.adsbygoogleStatus && !_0x2b3dde.dataset.adLoaded && (_0x2b3dde.dataset.adLoaded = 'processing', (window.adsbygoogle = window.adsbygoogle || []).push(
                                    {}));
                            }
                            catch (_0xcbbae) {
                                console.error('Error loading empty ad ' + _0x560dab + ':', _0xcbbae);
                            }
                        });
                    }
                    catch (_0x13895e) {
                        console.error('Error processing empty Google ads:', _0x13895e);
                    }
                }, 1500);
            }
            catch (_0x3df623) {
                console.error('Critical error in ad loading system:', _0x3df623);
            }
        })(), setTimeout(() => {
            _0x4c2f49();
        }, 3000);
        if (_0x2e524b && _0x5c88c3) {
            _0x27744d('<div id="authors-page"></div>', 'link', null, (_0x61d2fe, _0x1d93e3) => {
                if (_0x61d2fe === null) {
                    const _0x56755a = document.querySelector('.authorDesc');
                    _0x1d93e3 !== '' && _0x56755a && _0x56755a.insertAdjacentHTML('beforeend', '<a class="author-profile" title="' + AuthorName + ' profile" href="' + _0x1d93e3 + '?name=' + encodeURI(AuthorName) + '">الملف الشخصي</a>');
                }
            });
            const _0x4f003b = document.querySelector('.topic-author .rank');
            _0x2e524b.rank && _0x4f003b && (_0x4f003b.innerHTML = _0x2e524b.rank);
            const _0x172db4 = document.querySelector('.topic-author .author-about');
            if (_0x172db4) {
                _0x172db4.innerHTML = _0x2e524b.about || '';
            }
            const _0x16f4d1 = document.querySelector('.topic-author .social');
            _0x16f4d1 && _0x2e524b.links && Object.keys(_0x2e524b.links).forEach(_0xf59f3a => {
                const _0x37e27c = '<li><a target=\'_blank\' aria-label=\'' + _0xf59f3a + '\' class=\'' + _0xf59f3a + ' tooltipped\' href=\'' + _0x2e524b.links[_0xf59f3a] + '\' data-tooltip=\'' + socialNames(_0xf59f3a) + '\'><i class=\'fa fa-' + _0xf59f3a + '\'></i></a></li>';
                _0x16f4d1.insertAdjacentHTML('beforeend', _0x37e27c);
            });
            const _0x3b7af0 = document.querySelector('.topic-author');
            _0x3b7af0 && (_0x3b7af0.style.display = 'grid');
        }
    }

    function _0x3a5c7e() {
        const _0x1f4531 = typeof AllowNew !== 'undefined' ? AllowNew : false,
            _0x1e786f = typeof AllowComments !== 'undefined' ? AllowComments : false,
            _0x361bf6 = document.getElementById('item-comments');
        let _0x3f351f = false;
        if (_0x1e786f) {
            let _0x250ad6 = false;
            if (HideDefComments) {
                _0x361bf6.style.display = 'none';
                const _0x58b7d2 = document.createElement('button');
                _0x58b7d2.classList.add('toggle-comments'), _0x58b7d2.textContent = Msg.postAComment, _0x58b7d2.onclick = _0x4d6ebb, _0x361bf6.parentNode.insertBefore(_0x58b7d2, _0x361bf6);
            }
            else window.addEventListener('scroll', () => {
                !_0x250ad6 && window.scrollY > _0x361bf6.getBoundingClientRect().top - 500 && (_0x250ad6 = true, _0x4d6ebb());
            });
        }
        else {
            _0x361bf6 && _0x361bf6.remove();
            return;
        }

        function _0x4d6ebb() {
            if (HideDefComments) {
                _0x361bf6.offsetParent ? _0x361bf6.slideUp() : _0x361bf6.slideDown(300, 'block');
            }
            if (_0x3f351f) return;
            _0x3f351f = true;
            CR.platformComm.forEach((_0x540077, _0x5ef6c5) => {
                const _0x1f65da = _0x320b01 => {
                    return BlogDirection === 'rtl' ? Msg.comments + ' ' + _0x320b01 : _0x320b01 + ' ' + Msg.comments;
                };
                let _0x563a5e = '<li class="list-tab" role="tab" tabindex="' + _0x5ef6c5 + '">';
                if (_0x540077 === 'blogger') {
                    _0x563a5e += '<button data-bar=\'blogger\' type=\'button\'><span class=\'nm-tab\'>' + _0x1f65da('Blogger') + '</span></button>';
                    const _0x4b6ab6 = document.querySelector('.comments-tabs'),
                        _0x1d08e1 = document.createElement('li');
                    _0x1d08e1.className = 'blogger-content', _0x1d08e1.setAttribute('role', 'tabpanel'), _0x4b6ab6.appendChild(_0x1d08e1);
                    const _0x5158a4 = document.querySelector('div.comments#comments');
                    _0x1d08e1.appendChild(_0x5158a4);
                }
                else {
                    if (_0x540077 === 'facebook') {
                        _0x563a5e += '<button onclick=\'load_facebook()\' data-bar=\'facebook\' type=\'button\'><span class=\'nm-tab\'>' + _0x1f65da('Facebook') + '</span></button>';
                        const _0x44d33d = document.querySelector('.comments-tabs'),
                            _0x10263c = document.createElement('li');
                        _0x10263c.className = 'facebook-content', _0x10263c.setAttribute('role', 'tabpanel'), _0x10263c.innerHTML = '<div class=\'fb-comments\' data-href=\'' + CanUrl + '\' data-width=\'100%\' data-numposts=\'5\'></div>', _0x44d33d.appendChild(_0x10263c);
                    }
                    else {
                        if (_0x540077 === 'disqus') {
                            _0x563a5e += '<button onclick=\'load_disqus()\' data-bar=\'disqus\' type=\'button\'><span class=\'nm-tab\'>' + _0x1f65da('Disqus') + '</span></button>';
                            const _0x5b11db = document.querySelector('.comments-tabs'),
                                _0xfe49ce = document.createElement('li');
                            _0xfe49ce.className = 'disqus-content', _0xfe49ce.setAttribute('role', 'tabpanel'), _0xfe49ce.innerHTML = '<div id=\'disqus_thread\'></div>', _0x5b11db.appendChild(_0xfe49ce);
                        }
                    }
                }
                _0x563a5e += '</li>';
                const _0x459774 = document.getElementById('HTML7');
                if (_0x459774) {
                    const _0x496566 = document.querySelector('.commentsType');
                    if (_0x496566.textContent !== 'blogger' && _0x496566.textContent !== 'facebook[' + CR.fbId + ']' && _0x496566.textContent !== 'disqus[' + CR.disId + ']') {
                        document.querySelector('.comments-bar').insertAdjacentHTML('beforeend', _0x563a5e);
                    }
                }
                else document.querySelector('.comments-bar').classList.add('hide');
            });
            const _0x465a42 = document.querySelectorAll('.comments-bar .list-tab button[data-bar]'),
                _0x25a846 = document.querySelectorAll('.comments-tabs > li');
            if (_0x465a42.length) {
                _0x465a42[0].classList.add('active');
                const _0xccc419 = _0x465a42[0].dataset.bar;
                document.querySelector('.comments-tabs .' + _0xccc419 + '-content')?.['classList']['add']('active'), document.addEventListener('click', function (_0x2f534a) {
                    const _0x1121fb = _0x2f534a.target.closest('button[data-bar]');
                    if (!_0x1121fb) return;
                    _0x465a42.forEach(_0x393f65 => _0x393f65.classList.remove('active')), _0x1121fb.classList.add('active');
                    const _0x2cbd61 = _0x1121fb.dataset.bar;
                    _0x25a846.forEach(_0x35a03a => _0x35a03a.classList.remove('active')), document.querySelector('.comments-tabs .' + _0x2cbd61 + '-content')?.['classList']['add']('active');
                    console.clear();
                });
            }
            else _0x25a846[0]?.['classList']['add']('active');
            if (!CR.platformComm.includes('blogger')) {
                const _0xf3425c = document.querySelector('#comments.comments');
                if (_0xf3425c) _0xf3425c.remove();
            }
            else _0x4c89d8();
            const _0x2121cf = document.querySelector('.commentsType');
            if (_0x2121cf) {
                if (_0x2121cf.textContent === 'facebook[' + CR.fbId + ']' || document.querySelector('.comments-bar button') && document.querySelectorAll('.comments-bar button')[0].getAttribute('data-bar') === 'facebook') {
                    load_facebook();
                }
                else (_0x2121cf.textContent === 'disqus[' + CR.disId + ']' || document.querySelector('.comments-bar button') && document.querySelectorAll('.comments-bar button')[0].getAttribute('data-bar') === 'disqus') && load_disqus();
            }

            function _0x4c89d8() {
                if (_0x1f4531) {
                    document.querySelector('#item-comments').addEventListener('click', _0x2c034c => {
                        if (_0x2c034c.target && _0x2c034c.target.classList.contains('comment-reply')) {
                            const _0x214e52 = _0x2c034c.target,
                                _0x4f68c2 = _0x214e52.getAttribute('data-comment-id'),
                                _0x22e4de = document.querySelector('#comment-editor');
                            _0x214e52.closest('.comment').appendChild(_0x22e4de), _0x22e4de.src = _0x22e4de.src + '&parentID=' + _0x4f68c2;
                        }
                    });
                }
                else {
                    const _0x1f0c0f = document.querySelectorAll('.comment-reply');
                    _0x1f0c0f.length && _0x1f0c0f.forEach(_0x258cae => _0x258cae.remove());
                }

                function _0x59c1b8(_0x367b9b) {
                    !NovidOrPhotoComments && (_0x367b9b.innerHTML = _0x367b9b.innerHTML.replace(/(https?:\/\/[^\s]+)/g, _0x8caa54 => {
                        const _0x39a053 = /\.(jpeg|webp|jpg|gif|png)(\?[^\s]*)?$/i.test(_0x8caa54);
                        const _0x1e63d9 = /https:\/\/(?:[0-4]\.)?bp\.blogspot\.com[^\s]*/.test(_0x8caa54) || /https:\/\/(?:lh[3-6]\.)?googleusercontent\.com[^\s]*/.test(_0x8caa54) || /https:\/\/blogger\.googleusercontent\.com[^\s]*/.test(_0x8caa54);
                        if (_0x39a053 || _0x1e63d9) return '<div class=\'post-image\'><div class=\'image\'><img title=\'comment photo\' alt=\'comment photo\' src=\'' + _0x8caa54 + '\'/></div></div>';
                        return _0x8caa54;
                    }), _0x367b9b.innerHTML = _0x367b9b.innerHTML.replace(/(https:\/\/)(www.youtube|youtube|youtu)(.com\/|.be\/).+?(\s|<br.*?>|$)/g, _0x1b167b => {
                        _0x1b167b.includes('watch?v') && (_0x1b167b = _0x1b167b.replace('watch?v=', 'embed/'));
                        _0x1b167b.includes('youtu.be') && (_0x1b167b = 'https://www.youtube.com/embed/' + _0x1b167b.split('be/')[1]);
                        return _0x1b167b.includes('&amp;') ? _0x1b167b.replace('&amp;', '?') : '<iframe title=\'youtube video\' src=\'' + _0x1b167b + '\'></iframe>';
                    }));
                    const _0x4ff0d5 = _0x582a01 => {
                        const _0x2460bb = document.createElement('textarea');
                        return _0x2460bb.innerHTML = _0x582a01, _0x2460bb.value;
                    },
                        _0x393a45 = _0x4ff0d5(_0x367b9b.innerHTML);
                    _0x367b9b.innerHTML = _0x393a45.replace(/(https?:\/\/[^\s<>"']+)/g, function (_0x220110) {
                        const _0x454c41 = new RegExp('<a[^>]*?href=["\']' + _0x220110 + '["\'][^>]*?>', 'i').test(_0x393a45);
                        if (_0x454c41) return _0x220110;
                        const _0x6c1d16 = _0x40b5c8 => /\.(jpeg|jpg|webp|gif|png)(\?[^\s]*)?$/i.test(_0x40b5c8) || /https:\/\/(?:[0-4]\.)?bp\.blogspot\.com[^\s]*/.test(_0x40b5c8) || /https:\/\/(?:lh\d?\.)?googleusercontent\.com[^\s]*/.test(_0x40b5c8) || /https:\/\/blogger\.googleusercontent\.com[^\s]*/.test(_0x40b5c8),
                            _0x2ce36b = _0x3663bd => /https:\/\/(?:www\.)?(youtube\.com\/embed\/|youtu\.be\/)[^\s<]+/.test(_0x3663bd);
                        if (_0x6c1d16(_0x220110) || _0x2ce36b(_0x220110)) return _0x220110;
                        return '<a class="elbananetlink" href="' + _0x220110 + '" rel="nofollow noreferrer noopener" target="_blank">' + ExtLink + '</a>';
                    });
                    const _0x42d9fe = _0x367b9b.querySelectorAll('a');
                    if (_0x42d9fe.length) {
                        _0x42d9fe.forEach(_0x950923 => {
                            if (!_0x950923.classList.contains('elbananetlink')) {
                                _0x950923.classList.add('elbananetlink');
                            }
                        });
                    }
                }

                function _0x4620fb(_0x5ea679) {
                    console.clear();
                    const _0x16a0db = document.getElementById('loadmore-comments');
                    if (_0x5ea679.length < 200 && _0x16a0db) {
                        _0x16a0db.remove();
                    }
                    _0x5ea679.forEach(_0xb89487 => {
                        const _0x252be8 = document.querySelector('.comments-list > ul > li.comment:last-of-type'),
                            _0x5d197d = _0x252be8.outerHTML,
                            _0x30d210 = new DOMParser(),
                            _0x2a0419 = _0x30d210.parseFromString(_0x5d197d, 'text/html'),
                            _0x5a0562 = _0x2a0419.querySelector('li'),
                            _0x257ea2 = _0x5a0562.querySelector('.comment-replies ul');
                        if (_0x257ea2) _0x257ea2.innerHTML = '';
                        const _0x5cdef6 = _0x5a0562.querySelector('.avatar-image-container img');
                        let _0x53f17e = _0xb89487.authorPhoto ? _0xb89487.authorPhoto.thumbUrl : _0xb89487.authorAvatarSrc.includes('blank.gif') || _0xb89487.authorAvatarSrc.includes('rounded.gif') || _0xb89487.authorAvatarSrc.includes('blogger_logo_round') || _0xb89487.authorAvatarSrc.includes('img1.blogblog.com') ? AltAuthor : _0xb89487.authorAvatarSrc;
                        _0x53f17e = _0xb89487.inReplyTo ? resizeImg(_0x53f17e, 40, 40, true) : resizeImg(_0x53f17e, 72, 72, true);
                        _0x5a0562.setAttribute('id', _0xb89487.anchorName);
                        const _0x500d7b = _0x5a0562.querySelector('.user a');
                        _0x500d7b.setAttribute('href', _0xb89487.authorUrl), _0x500d7b.textContent = _0xb89487.author, _0x5cdef6.setAttribute('src', _0x53f17e), _0x5cdef6.setAttribute('alt', _0xb89487.author + '\'s avatar'), _0x5cdef6.setAttribute('title', _0xb89487.author + '\'s avatar');
                        const _0x4563c7 = _0x5a0562.querySelector('.com-date');
                        _0x4563c7.setAttribute('data-date', _0xb89487.timestampAbs), _0x4563c7.textContent = _0xb89487.timestamp;
                        const _0x51e586 = _0x5a0562.querySelector('.comment-content');
                        _0x51e586.innerHTML = _0xb89487.body, _0x59c1b8(_0x51e586);
                        const _0x55b58a = _0x5a0562.querySelector('.comment-reply');
                        _0x55b58a.setAttribute('data-comment-id', _0xb89487.id);
                        const _0x280ae5 = _0x5a0562.querySelector('.blog-admin');
                        _0x280ae5.className = 'blog-admin ' + _0xb89487.commentAuthorClass;
                        const _0x49f4bc = _0x5a0562.querySelector('.blog-admin a');
                        _0x49f4bc.setAttribute('href', _0xb89487.deleteUrl);
                        if (_0xb89487.inReplyTo) {
                            const _0x432b80 = _0x5a0562.querySelector('.comment-reply').parentElement;
                            if (_0x432b80) _0x432b80.remove();
                            let _0x47e20f = document.querySelector('#c' + _0xb89487.inReplyTo + ' .comment-replies ul');
                            if (_0x47e20f) {
                                if (_0x47e20f.length) _0x47e20f = _0x47e20f[0];
                                _0x47e20f.appendChild(_0x5a0562);
                            }
                        }
                        else {
                            if (!document.querySelector('#' + _0xb89487.anchorName)) {
                                document.querySelector('.comments-list > ul').appendChild(_0x5a0562);
                            }
                        }
                    });
                }
                const _0xc953b3 = document.querySelectorAll('.comments-show button');
                if (_0xc953b3.length) {
                    _0xc953b3.forEach(_0x375fcb => {
                        _0x375fcb.addEventListener('click', function () {
                            const _0x3d255b = this,
                                _0x21a432 = document.querySelectorAll('.comment-replies'),
                                _0x4af3a6 = Array.from(_0x3d255b.parentNode.children).filter(_0x8a302e => _0x8a302e !== _0x3d255b);
                            _0x4af3a6.forEach(_0xb55a6 => _0xb55a6.classList.remove('active')), _0x3d255b.classList.add('active');
                            if (_0x3d255b.classList.contains('comments-only')) {
                                _0x21a432.forEach(_0x3a6867 => {
                                    _0x3a6867.slideUp(300);
                                });
                            }
                            else _0x21a432.forEach(_0x3cb9cb => {
                                _0x3cb9cb.slideDown(300, 'block');
                            });
                        });
                    });
                }
                if (_0x1f4531 && (document.getElementById('HTML7') && document.querySelector('.commentsType').textContent.includes('blogger') || document.querySelectorAll('#HTML7').length === 0)) {
                    const _0x491242 = document.querySelector('.go-respond');
                    _0x491242 && _0x491242.addEventListener('click', () => {
                        const _0x2e1df5 = document.getElementById('comment-editor');
                        _0x2e1df5.src.includes('parentID') && (_0x2e1df5.src = _0x2e1df5.src.replace(/\&parent.*/, ''), document.getElementById('comments-respond').appendChild(_0x2e1df5));
                    });
                }
                const _0x2ea18a = document.querySelectorAll('.noimg');
                _0x2ea18a.length && _0x2ea18a.forEach(_0x2755c3 => {
                    const _0x42b8a8 = document.createElement('img');
                    _0x42b8a8.setAttribute('title', 'user avatar'), _0x42b8a8.setAttribute('alt', 'user avatar'), _0x42b8a8.dataset.sizes = 'auto', _0x42b8a8.classList = 'lazyload', _0x42b8a8.setAttribute('data-src', AltAuthor), _0x2755c3.parentNode.insertBefore(_0x42b8a8, _0x2755c3.nextSibling), _0x2755c3.remove();
                });
                const _0x3a2c46 = document.querySelectorAll('.comment-content');
                if (_0x3a2c46.length) {
                    _0x3a2c46.forEach(_0x863744 => {
                        _0x59c1b8(_0x863744);
                    });
                }
                const _0x317e68 = document.getElementById('loadmore-comments');
                _0x317e68 && _0x317e68.addEventListener('click', function () {
                    _WidgetManager._HandleControllerResult = function (_0x37c40a, _0x5d2fbf, _0x32eb24) {
                        _0x4620fb(_0x32eb24.comments);
                    };
                    const _0x29f99a = document.querySelectorAll('.com-date'),
                        _0x538042 = _0x29f99a[_0x29f99a.length - 1].getAttribute('data-date'),
                        _0x24af95 = location.pathname + '?action=getComments&widgetId=Blog1&widgetType=Blog&responseType=js&postId=' + itemId + '&publishedMin=' + _0x538042 + '&xssi_token=' + window.__wavt;
                    getScript(_0x24af95, function () { });
                });
                const _0x30bee8 = document.querySelectorAll('.avatar-image-container img');
                if (_0x30bee8.length) {
                    _0x30bee8.forEach(_0x3d3f8e => {
                        if (_0x3d3f8e.src.includes('blogger_logo_round') || _0x3d3f8e.src.includes('blank.gif') || _0x3d3f8e.src.includes('rounded.gif') || _0x3d3f8e.src.includes('img1.blogblog.com')) {
                            _0x3d3f8e.src = _0x3d3f8e.src.replace(/\/img\/.+?\//, '/img/');
                        }
                    });
                }
                if (_0x1f4531) {
                    const _0x217918 = document.getElementById('comment-editor');
                    _0x217918.src = _0x217918.getAttribute('data-src');
                    const _0x483dae = document.querySelector('#comments-respond noscript').textContent,
                        _0x47976a = _0x483dae.match(/('|\")http.*?\/\/.*?(\'|\")/),
                        _0x235ebd = _0x47976a[0].replace(/('|\")/g, '');
                    getScript(_0x235ebd, function () {
                        BLOG_CMT_createIframe('https://www.blogger.com/rpc_relay.html'), document.getElementById('comments-respond').appendChild(document.querySelector('#comment-editor'));
                    });
                }
            }
        }
    }
    if (isSingleItem) {
        function _0x50298d() {
            coloris(document.querySelectorAll('.categories-wrapper .category a'));
        }
        const _0x3c0d79 = {};
        _0x3c0d79.slider = '.categories-wrapper', _0x3c0d79.widgetId = '#Label2', _0x3c0d79.type = 'slider', _0x3c0d79.perPage = 0x4, _0x3c0d79.pagination = true, _0x3c0d79.arrows = false, _0x3c0d79.gap = 0x14, _0x3c0d79.options = [_0x50298d], _0x123b94(_0x3c0d79);
    }
    if (isHome) {
        !ServiceGrid ? _0x123b94(
            {
                'slider': '.services-wrapper',
                'widgetId': '#LinkList3',
                'type': 'slide',
                'perPage': 0x5,
                'pagination': true,
                'arrows': false,
                'gap': 0x14,
                'options': [_0x41d00b]
            }) : _0x41d00b();
    }

    function _0x42396d() {
        if (document.querySelector('#archive-page')) {
            Object.keys(_0xd63660).forEach((_0x546625, _0x1897ba) => {
                const _0x7328da = _0xd63660[_0x546625],
                    _0x2050d1 = Math.ceil(_0x7328da / 150),
                    _0x3a96ea = decodeURI(_0x546625);
                document.querySelector('.post-body').insertAdjacentHTML('beforeend', '<div class="arp-label" id="label-' + _0x1897ba + '"><div class="arp-label-name"><b class="arp-b">' + _0x3a96ea + '</b><span class="arp-label-count">' + _0x7328da + ' <u>مشاركة</u></span></div></div>'), FeedEnabled && !isPrivate ? _0x2e4f41(_0x1897ba, 0, _0x3a96ea, _0x2050d1) : document.querySelector('#archive-page').innerHTML = _0xc490eb[1];
            });

            function _0x2e4f41(_0x371271, _0x33c308, _0x1931d5, _0x1f5d2d) {
                fetchData(BlogUrl + 'feeds/posts/summary/-/' + encodeURIComponent(_0x1931d5) + '?alt=json&max-results=150&start-index=' + (_0x33c308 * 150 + 1), () => {
                    !document.querySelector('#archive-page').querySelector('.posts-loading') && document.querySelector('#archive-page').insertAdjacentHTML('afterbegin', '<span class="posts-loading"><i class="LoaderCall an-up"></i></span>');
                }, _0x39bf4a => {
                    _0x39bf4a.feed.entry.forEach(_0xcdc8ad => {
                        if (!_0xcdc8ad.app$control) {
                            const _0x18d036 = _0x2cb131(_0xcdc8ad);
                            let _0x17d204 = '';
                            _0x17d204 += '<div class="arp-item">', _0x17d204 += '<div class="post-image">', _0x17d204 += '<a class="image" href="' + _0x18d036.Link + '" title="' + _0x18d036.Title + '">', _0x17d204 += '<img class="arp-thumb" src="' + resizeImg(_0x18d036.ImgUrl, 85, 85, true) + '"/>', _0x17d204 += '</a>', _0x17d204 += '</div>', _0x17d204 += '<div class="arp-info">', _0x17d204 += '<span class="arp-date">' + _0x18d036.Date + '</span>';
                            _0xcdc8ad.category[1] !== undefined && (_0x17d204 += '<span class="arp-cate">' + _0xcdc8ad.category.filter(_0x41ad59 => _0x41ad59.term != _0x1931d5)[0].term + '</span>');
                            _0x17d204 += '<a class="arp-link" href="' + _0x18d036.Link + '">' + _0x18d036.Title + '</a>', _0x17d204 += '</div>', _0x17d204 += '</div>', document.querySelector('#label-' + _0x371271).insertAdjacentHTML('beforeend', _0x17d204);
                            const _0x415654 = document.querySelector('#archive-page .posts-loading');
                            document.querySelector('#archive-page') && _0x415654 && _0x415654.remove();
                            const _0xf92063 = document.querySelector('#archive-page');
                            _0xf92063 && _0xf92063.remove();
                        }
                    }), _0x33c308 = _0x33c308 + 1, _0x33c308 != _0x1f5d2d && _0x2e4f41(_0x371271, _0x33c308, _0x1931d5, _0x1f5d2d);
                }, () => {
                    document.querySelector('#archive-page').innerHTML = '<div class="errorFetch">هناك خطأ مØ§...</div>';
                });
            }
        }
        document.querySelectorAll('.arp-label').forEach(_0x43a482 => {
            _0x43a482.fadeIn(300, 'block');
        });
    }

    function _0x371d26() {
        if (document.querySelector('#authors-page')) {
            const _0x581d6d = new URLSearchParams(location.search);
            if (_0x581d6d.get('name')) {
                window.Aup_Posts_Content = '', window.Aup_Name = decodeURI(_0x581d6d.get('name')).replace(/\+/g, ' '), window.Aup_Info = AuthorsInfo.filter(_0x342143 => _0x342143.name === Aup_Name)[0];
                if (!window.Aup_Info) return;
                window.Aup_avatar = Aup_Info.avatar || AltAuthor, Aup_avatar = resizeImg(Aup_avatar, 160, 160, true), document.title = Aup_Name;
                let _0x536474 = '\n<div class="aup-wrapper">\n<fieldset class="an-up">\n' + (Aup_Info && Aup_Info.rank ? '<legend class="aup-title">' + Aup_Info.rank + '</legend>' : '') + '\n<div class="aup-head">\n<div class="aup-photo" style="background-image:url(' + Aup_avatar + ')"></div>\n</div>\n<h1 class="aup-name">' + Aup_Name + '</h1>\n' + (Aup_Info && Aup_Info.about ? '<p class="aup-about">' + Aup_Info.about + '</p>' : '') + '\n' + (Aup_Info && Aup_Info.links ? '<ul class="aup-social social byPost"></ul>' : '') + '\n' + (Aup_Info && Aup_Info.SKILLS ? '<span class="skills-title-wrap"><b class="aup-skills-title">مهاراتي</b></span>' : '') + '\n' + (Aup_Info && Aup_Info.SKILLS ? '<ul class="aup-skills byPost"></ul>' : '') + '\n</fieldset>\n<div class="aup-posts" role="feed"></div>\n</div>\n';
                const _0x303540 = document.querySelector('.post-body');
                if (_0x303540) {
                    _0x303540.innerHTML = _0x536474;
                }
                if (Aup_Info) {
                    if (Aup_Info.SKILLS) {
                        const _0x3ab592 = document.querySelector('.aup-skills');
                        if (_0x3ab592) {
                            for (const _0x1b9e5e in Aup_Info.SKILLS) {
                                const _0xe33696 = _0x1b9e5e.split('-')[1],
                                    _0x261f23 = '<li><span class="skill-name">' + _0xe33696 + '</span><div class="skill-wrap"><span class="bar-wrap"><span class="skill-bar"></span></span><span class="skill-value"></span></div></li>';
                                _0x3ab592.insertAdjacentHTML('beforeend', _0x261f23);
                            }
                        }
                        document.querySelectorAll('.aup-skills li').forEach((_0x41f446, _0x1b78e5) => {
                            const _0x2a98e3 = Aup_Info.SKILLS[Object.keys(Aup_Info.SKILLS)[_0x1b78e5]],
                                _0x323a5b = _0x41f446.querySelector('.skill-bar'),
                                _0x1fda1e = _0x41f446.querySelector('.skill-value'),
                                _0x70b306 = BlogDirection === 'rtl' ? 'right' : 'left',
                                _0x24171b = BlogDirection === 'rtl' ? 'left' : 'right';
                            let _0x224050, _0x1777db, _0x15c202;
                            if (_0x2a98e3 <= 30) _0x224050 = 'linear-gradient(to ' + _0x24171b + ', #910606, red)', _0x1777db = 'red', _0x15c202 = 'rgb(255 0 0 / 18%)';
                            else {
                                if (_0x2a98e3 <= 50) _0x224050 = 'linear-gradient(to ' + _0x24171b + ', orange, #ffd270)', _0x1777db = 'orange', _0x15c202 = 'rgb(255 129 0 / 18%)';
                                else _0x2a98e3 <= 80 ? (_0x224050 = 'linear-gradient(to ' + _0x24171b + ', rgb(255, 79, 0), rgb(255 129 0))', _0x1777db = 'rgb(255, 79, 0)', _0x15c202 = 'rgb(255 79 0 / 18%)') : (_0x224050 = 'linear-gradient(to ' + _0x24171b + ', green, #26d726)', _0x1777db = 'green', _0x15c202 = 'rgb(0 128 0 / 18%)');
                            }
                            if (_0x323a5b) _0x323a5b.style.background = _0x224050;
                            if (_0x323a5b && _0x323a5b.parentElement) _0x323a5b.parentElement.style.background = _0x15c202;
                            if (_0x1fda1e) _0x1fda1e.style.color = _0x1777db;
                            let _0x52d991 = 0;
                            const _0x350b4e = setInterval(() => {
                                if (_0x52d991 >= _0x2a98e3) clearInterval(_0x350b4e);
                                else {
                                    _0x52d991++;
                                    if (_0x323a5b) _0x323a5b.style.width = _0x52d991 + '%';
                                    if (_0x1fda1e) {
                                        _0x1fda1e.style[_0x70b306] = 'auto', _0x1fda1e.style[_0x24171b] = 100 - _0x52d991 + '%', _0x1fda1e.textContent = _0x52d991 + '%';
                                    }
                                }
                            }, 20);
                        });
                    }
                    if (Aup_Info.links && Object.keys(Aup_Info.links).length > 0) {
                        const _0x1b02c4 = document.querySelector('.aup-social');
                        if (_0x1b02c4) {
                            for (const _0x2ea81d in Aup_Info.links) {
                                const _0x4d4478 = '<li><a class="' + _0x2ea81d + ' tooltipped" href="' + Aup_Info.links[_0x2ea81d] + '" target="_blank" rel="nofollow" data-tooltip="' + socialNames(_0x2ea81d) + '"><i class="fa fa-' + _0x2ea81d + '"></i></a></li>';
                                _0x1b02c4.insertAdjacentHTML('beforeend', _0x4d4478);
                            }
                        }
                    }
                }
                const _0x3b0acb = document.querySelector('.aup-posts');
                if (FeedEnabled && !isPrivate) _0x5a809b();
                else _0x3b0acb && (_0x3b0acb.innerHTML = _0xc490eb[1]);
            }
            else {
                const _0x1ae4e2 = document.querySelector('#authors-page');
                if (FeedEnabled && !isPrivate) _0x4d5f57();
                else _0x1ae4e2 && (_0x1ae4e2.innerHTML = _0xc490eb[1]);
            }
        }
    }

    function _0x4d5f57() {
        if (_0x4f0e0b === feed_count) {
            const _0x482e86 = document.querySelector('.post-body');
            _0x482e86 && (_0x482e86.innerHTML = '<div class="blog-authors"></div>');
            const _0x24d067 = document.querySelector('.blog-authors');
            if (_0x24d067) {
                AuthorsInfo.forEach(_0x519ae5 => {
                    const _0x584d55 = _0x519ae5.avatar || AltAuthor,
                        _0x195c60 = location.pathname + '?name=' + encodeURIComponent(_0x519ae5.name);
                    let _0x1d5779 = '\n<div class="blog-author-card an-up" data-blog-author="' + _0x519ae5.name + '">\n<div class="blog-author-card-info">\n<fieldset>\n' + (_0x519ae5.rank ? '<legend class="blog-author-rank">' + _0x519ae5.rank + '</legend>' : '') + '\n<div class="blog-author-card-info-person">\n<div class="blog-author-avatar"><img class="author-ph" src="' + resizeImg(_0x584d55, 120, 120, true) + '" alt="' + _0x519ae5.name + '"/></div>\n<div class="footer-author"><b class="blog-author-count">' + _0x519ae5.count + ' مشاركة</b><a href="' + _0x195c60 + '" class="blog-author-link">الملف الشخصي</a></div>\n</div>\n<div class="blog-author-card-info-about">\n<b class="blog-author-name">' + _0x519ae5.name + '</b>\n' + (_0x519ae5.SKILLS ? '<b class="blog-author-skills-title">مهاراتي</b>' : '') + '\n' + (_0x519ae5.SKILLS ? '<ul class="blog-author-skills byPost"></ul>' : '') + '\n' + (_0x519ae5.links ? '<ul class="blog-author-social social byPost"></ul>' : '') + '\n</div>\n</fieldset>\n</div>\n</div>\n';
                    _0x24d067.insertAdjacentHTML('beforeend', _0x1d5779);
                    if (_0x519ae5.SKILLS) {
                        const _0x49b97a = document.querySelector('[data-blog-author="' + _0x519ae5.name + '"] .blog-author-skills');
                        if (_0x49b97a) {
                            for (const _0xef126c in _0x519ae5.SKILLS) {
                                const _0x561b7b = _0xef126c.split('-')[1],
                                    _0x14d725 = '<li><span class="skill-name">' + _0x561b7b + '</span><div class="skill-wrap"><span class="bar-wrap"><span class="skill-bar"></span></span><span class="skill-value"></span></div></li>';
                                _0x49b97a.insertAdjacentHTML('beforeend', _0x14d725);
                            }
                        }
                        document.querySelectorAll('[data-blog-author="' + _0x519ae5.name + '"] .blog-author-skills li').forEach((_0x5ae33e, _0x43515b) => {
                            const _0x5c9073 = _0x519ae5.SKILLS[Object.keys(_0x519ae5.SKILLS)[_0x43515b]],
                                _0x3cdeea = _0x5ae33e.querySelector('.skill-bar'),
                                _0xd197f3 = _0x5ae33e.querySelector('.skill-value'),
                                _0x2fddf8 = BlogDirection === 'rtl' ? 'right' : 'left',
                                _0x47028f = BlogDirection === 'rtl' ? 'left' : 'right';
                            let _0x1fac1a, _0x411b92, _0x2e72ea;
                            if (_0x5c9073 <= 30) _0x1fac1a = 'linear-gradient(to ' + _0x47028f + ', #910606, red)', _0x411b92 = 'red', _0x2e72ea = 'rgb(255 0 0 / 18%)';
                            else {
                                if (_0x5c9073 <= 50) {
                                    _0x1fac1a = 'linear-gradient(to ' + _0x47028f + ', orange, #ffd270)', _0x411b92 = 'orange', _0x2e72ea = 'rgb(255 129 0 / 18%)';
                                }
                                else _0x5c9073 <= 80 ? (_0x1fac1a = 'linear-gradient(to ' + _0x47028f + ', rgb(255, 79, 0), rgb(255 129 0))', _0x411b92 = 'rgb(255, 79, 0)', _0x2e72ea = 'rgb(255 79 0 / 18%)') : (_0x1fac1a = 'linear-gradient(to ' + _0x47028f + ', green, #26d726)', _0x411b92 = 'green', _0x2e72ea = 'rgb(0 128 0 / 18%)');
                            }
                            if (_0x3cdeea) _0x3cdeea.style.background = _0x1fac1a;
                            if (_0x3cdeea && _0x3cdeea.parentElement) _0x3cdeea.parentElement.style.background = _0x2e72ea;
                            if (_0xd197f3) _0xd197f3.style.color = _0x411b92;
                            let _0x970b6f = 0;
                            const _0x9143f7 = setInterval(() => {
                                if (_0x970b6f >= _0x5c9073) clearInterval(_0x9143f7);
                                else {
                                    _0x970b6f++;
                                    if (_0x3cdeea) _0x3cdeea.style.width = _0x970b6f + '%';
                                    _0xd197f3 && (_0xd197f3.style[_0x2fddf8] = 'auto', _0xd197f3.style[_0x47028f] = 100 - _0x970b6f + '%', _0xd197f3.textContent = _0x970b6f + '%');
                                }
                            }, 20);
                        });
                    }
                    if (_0x519ae5.links) {
                        const _0x515015 = document.querySelector('[data-blog-author="' + _0x519ae5.name + '"] .blog-author-social');
                        if (_0x515015)
                            for (const _0x10b1ca in _0x519ae5.links) {
                                const _0x2496e3 = '<li><a class="' + _0x10b1ca + ' tooltipped" href="' + _0x519ae5.links[_0x10b1ca] + '" target="_blank" rel="nofollow" data-tooltip="' + socialNames(_0x10b1ca) + '"><i class="fa fa-' + _0x10b1ca + '"></i></a></li>';
                                _0x515015.insertAdjacentHTML('beforeend', _0x2496e3);
                            }
                    }
                });
            }
        }
        else fetchData(BlogUrl + 'feeds/posts/summary?alt=json&max-results=150&start-index=' + (_0x4f0e0b * 150 + 1), function () { }, _0x3f6d45 => {
            _0x3f6d45 && _0x3f6d45.feed && _0x3f6d45.feed.entry && _0x3f6d45.feed.entry.forEach(_0x13c786 => {
                const _0x9ff031 = _0x13c786.author && _0x13c786.author[0] && _0x13c786.author[0].name && _0x13c786.author[0].name.$t ? _0x13c786.author[0].name.$t.toString() : 'Unknown Author',
                    _0x5efc22 = AuthorsInfo.find(_0x47fccf => _0x47fccf.name === _0x9ff031);
                if (_0x5efc22) {
                    _0x5efc22.count += 1;
                }
                else {
                    const _0x1ad477 = {
                        'name': _0x9ff031,
                        'avatar': _0x13c786.author[0]?.['gd$image']?.['src']['includes']('rounded.gif') || _0x13c786.author[0]?.['gd$image']?.['src']['includes']('blogger_logo_round') || _0x13c786.author[0]?.['gd$image']?.['src']['includes']('img1.blogblog.com') || _0x13c786.author[0]?.['gd$image']?.['src']['includes']('blank.gif') ? AltAuthor : _0x13c786.author[0]?.['gd$image']?.['src'],
                        'count': 0x1,
                        'provided': false
                    };
                    AuthorsInfo.push(_0x1ad477);
                }
            }), _0x4f0e0b += 1, _0x4d5f57();
        }, function () { });
    }

    function _0x5a809b() {
        if (_0x4f0e0b === feed_count) {
            const _0x33148e = document.querySelectorAll('.timeline-month'),
                _0x42283c = document.querySelectorAll('.timeline-item');
            _0x42283c.forEach(_0xb634f2 => {
                const _0x23f032 = _0xb634f2.getAttribute('data-month'),
                    _0x1c607a = Array.from(_0x33148e).find(_0x4fa3be => _0x4fa3be.getAttribute('data-month') === _0x23f032);
                _0x1c607a && (_0x1c607a.insertAdjacentHTML('beforeend', _0xb634f2.outerHTML), _0xb634f2.remove());
            }), _0x33148e.forEach(_0x2d9dca => {
                _0x2d9dca.querySelector('.timeline-item') ? _0x2d9dca.querySelectorAll('.timeline-month-name').forEach(_0x644394 => {
                    _0x644394.classList.remove('hide');
                }) : _0x2d9dca.remove();
            });
        }
        else {
            const _0x279541 = document.querySelector('.aup-posts');
            fetchData(BlogUrl + 'feeds/posts/summary?alt=json&max-results=150&start-index=' + (_0x4f0e0b * 150 + 1), () => {
                _0x279541 && !_0x279541.querySelector('.posts-loading') && _0x279541.insertAdjacentHTML('afterbegin', '<span class="posts-loading"><i class="LoaderCall an-up"></i></span>');
            }, _0x129663 => {
                if (_0x129663 && _0x129663.feed && _0x129663.feed.entry) {
                    _0x129663.feed.entry.forEach(_0x1db8f1 => {
                        if (!_0x1db8f1.app$control) {
                            const _0x17afb3 = _0x2cb131(_0x1db8f1);
                            if (_0x17afb3.Author === Aup_Name) {
                                const _0x55fb4a = _0x4ddfc6 => {
                                    const _0x5d3aa5 = new Date(_0x4ddfc6);
                                    return _0x5d3aa5.toLocaleString(BlogLang || 'default',
                                        {
                                            'month': 'long'
                                        });
                                },
                                    _0x53d9fb = _0x17afb3.FullDate.substring(0, 4),
                                    _0x129a9c = _0x55fb4a(_0x17afb3.FullDate),
                                    _0x47768a = _0x129a9c + ' ' + _0x53d9fb;
                                Aup_Posts_Content += '\n<div class="timeline-month" data-month="' + _0x47768a + '">\n<div class="timeline-month-name hide"><span>' + _0x47768a + '</span></div>\n<div class="timeline-item an-up" role="article" data-month="' + _0x47768a + '">\n<div class="timeline-image">\n<img class="timeline-thumb" src="' + resizeImg(_0x17afb3.ImgUrl, 72, 72, true) + '" alt="Post thumbnail"/>\n</div>\n<span class="timeline-date">\n<div class="timeline-image inside">\n<img class="timeline-thumb" src="' + resizeImg(_0x17afb3.ImgUrl, 72, 72, true) + '" alt="Post thumbnail"/>\n</div>\n' + (timeAgo ? '<b class="date-b">' + langDate(_0x17afb3.UpDate).split(' ')[0] + '</b>\n<i>' + langDate(_0x17afb3.UpDate).split(' ').slice(1).join(' ') + '</i>' : '<b>' + _0x17afb3.FullDate.substring(8, 10) + '</b>\n<i>' + _0x129a9c + ' ' + _0x53d9fb + '</i>') + '\n</span>\n<div class="timeline-content">\n<a class="timeline-title" href="' + _0x17afb3.Link + '" title="' + _0x17afb3.Title + '">' + _0x17afb3.Title + '</a>\n<p class="timeline-snippet">' + (_0x17afb3.Snippet ? _0x17afb3.Snippet.substring(0, 120) : '') + '...</p>\n</div>\n</div>\n</div>\n';
                            }
                        }
                    });
                }
                _0x279541 && Aup_Posts_Content && _0x279541.insertAdjacentHTML('beforeend', Aup_Posts_Content);
                Aup_Posts_Content = '', _0x4f0e0b += 1, _0x5a809b();
                const _0x309544 = _0x279541 ? _0x279541.querySelector('.posts-loading') : null;
                _0x309544 && _0x309544.remove();
            }, () => {
                const _0x193847 = document.querySelector('.aup-wrapper');
                _0x193847 && (_0x193847.innerHTML = '<div class="errorFetch">هناك خطأ مØ§...</div>');
                const _0x2c76d4 = document.querySelector('.aup-posts .posts-loading');
                _0x2c76d4 && _0x2c76d4.remove();
            });
        }
    }

    function _0x18ed78() {
        stred = stred ||
            {};
        const _0x5636f6 = stred.wait !== undefined ? stred.wait : 'جاري تهيئة الراØ¨Ø·',
            _0x5d4c8b = stred.ready !== undefined ? stred.ready : 'الرابط جاهØ²',
            _0x597e01 = stred.damged !== undefined ? stred.damged : 'الرابط معطÙ„',
            _0x1f0f00 = stred.autotext !== undefined ? stred.autotext : 'جاري إعادة التوجيه التلقاØ¦ÙŠ',
            _0x198a88 = stred.timer !== undefined ? stred.timer : 10,
            _0x2c1f3f = stred['url-ex'] !== undefined ? stred['url-ex'] : '',
            _0x1daba0 = stred.auto !== undefined ? stred.auto : false,
            _0x4abeb2 = stred.inside !== undefined ? stred.inside : false,
            _0x1804c7 = stred['r-my-domains'] !== undefined ? stred['r-my-domains'] : false,
            _0x11fc75 = '\n<div class="redirect-info">\n<div class="info-item">\n<div class="info-icon">\n<svg viewBox="0 0 512 512"><path d="M243.5 37.3c8-3.4 17-3.4 25 0l176.7 75c11.3 4.8 18.9 15.5 18.8 27.6c-.5 94-39.4 259.8-195.5 334.5c-7.9 3.8-17.2 3.8-25.1 0C87.3 399.6 48.5 233.8 48 139.8c-.1-12.1 7.5-22.8 18.8-27.6l176.7-75zM281 7.8c-16-6.8-34-6.8-50 0L54.3 82.8c-22 9.3-38.4 31-38.3 57.2c.5 99.2 41.3 280.7 213.6 363.2c16.7 8 36.1 8 52.8 0C454.7 420.7 495.5 239.2 496 140c.1-26.2-16.3-47.9-38.3-57.2L281 7.8zm82.3 195.5c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L224 297.4l-52.7-52.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l64 64c6.2 6.2 16.4 6.2 22.6 0l128-128z" fill="currentColor"/></svg>\n</div>\n<div class="info-text">\n<span>الروابط آمنة</span>\n<p class="info-snippet">نقوم بفحص جميع الروابط للتأكد من سلامتها قبل التحويل</p>\n</div>\n</div>\n<div class="info-item">\n<div class="info-icon">\n<svg viewBox="0 0 512 512"><path d="M256 480a224 224 0 1 0 0-448 224 224 0 1 0 0 448zM256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zm24 96a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zM224 352a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm-32 0c0-35.3 28.7-64 64-64c17.5 0 33.4 7 44.9 18.4l106.9-64.1c7.6-4.5 17.4-2.1 22 5.5s2.1 17.4-5.5 22L317.4 333.8c1.7 5.8 2.6 11.9 2.6 18.2c0 35.3-28.7 64-64 64s-64-28.7-64-64zM392 144a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zM96 232a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm72-88a24 24 0 1 1 -48 0 24 24 0 1 1 48 0z" fill="currentColor"/></svg>\n</div>\n<div class="info-text">\n<span>سرعة التحويل</span>\n<p class="info-snippet">تمتع بأسرع عملية تحويل مع خوادم عالية الأداء</p>\n</div>\n</div>\n<div class="info-item">\n<div class="info-icon">\n<svg viewBox="0 0 640 512"><path d="M128 128a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0A128 128 0 1 0 96 128a128 128 0 1 0 256 0zM32 480c1.2-79.7 66.2-144 146.3-144l91.4 0c19.4 0 37.9 3.8 54.9 10.6c-2.2-12.4-3.5-24.3-4.1-35.3c-16.1-4.8-33.1-7.3-50.7-7.3l-91.4 0C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c1.8 0 3.5-.2 5.3-.5c-13.4-9.7-25.1-20.3-35.5-31.5L32 480zm352-178.6L480 263l0 208.4c-73.4-40.5-94.6-117.1-95.9-170zm223.9 0c-1.3 53-22.6 129.5-95.9 170L512 263l95.9 38.4zm-103-75.7c-5.7-2.3-12.1-2.3-17.8 0l-120 48C358 277.4 352 286.2 352 296c0 63.3 25.9 168.8 134.8 214.2c5.9 2.5 12.6 2.5 18.5 0C614.1 464.8 640 359.3 640 296c0-9.8-6-18.6-15.1-22.3l-120-48z" fill="currentColor"/></svg>\n</div>\n<div class="info-text">\n<span>حماية الخصوصية</span>\n<p class="info-snippet">نحن لا نتتبع المعلومات الشخصية أثناء التحويل</p>\n</div>\n</div>\n</div>';
        class _0xe1d5d4 {
            constructor() {
                this.seconds = 0;
                this.count = 0;
                this.interval = null;
                this.timerContainer = null;
                this.numberElement = null;
                this.reloadLink = null;
                this.squareContainer = null;
                this.originLink = null;
                this.progressCircle = null;
                this.isWindowFocused = true;
                this.hasStarted = false;
                this.timerHTML = '\n<div class="clom radialtimer">\n<div class="redNumper"><span class="redNumperContent">' + _0x198a88 + '</span></div>\n<svg class="redirectProgg" width="200" height="200">\n<circle class="progress-circle" stroke="var(--key)" r="94" cx="100" cy="100"></circle>\n</svg>\n</div>\n<div class="clom radialbtn">\n<div class="square-container">\n<div class="square square1">&nbsp;</div>\n<div class="square square2">&nbsp;</div>\n<div class="square square3">&nbsp;</div>\n<div class="square square4">&nbsp;</div>\n<div class="square square5">&nbsp;</div>\n</div>\n<a class="areload disabled waves-effect">' + _0x5636f6 + '</a>\n</div>';
                this.bindWindowEvents();
            }
            ['bindWindowEvents']() {
                this.isWindowFocused = document.hasFocus() && !document.hidden, window.addEventListener('focus', () => {
                    this.isWindowFocused = true;
                    this.hasStarted && !this.interval && this.count < this.seconds && this.resumeTimer();
                }), window.addEventListener('blur', () => {
                    this.isWindowFocused = false;
                    this.pauseTimer();
                }), document.addEventListener('visibilitychange', () => {
                    document.hidden ? (this.isWindowFocused = false, this.pauseTimer()) : (this.isWindowFocused = true, this.hasStarted && !this.interval && this.count < this.seconds && this.resumeTimer());
                }), this.focusChecker = setInterval(() => {
                    const _0x438510 = document.hasFocus() && !document.hidden;
                    if (_0x438510 !== this.isWindowFocused) {
                        this.isWindowFocused = _0x438510;
                        if (_0x438510) {
                            if (this.hasStarted && !this.interval && this.count < this.seconds) {
                                this.resumeTimer();
                            }
                        }
                        else {
                            this.pauseTimer();
                        }
                    }
                }, 250), this.addActivityListeners();
            }
            ['pauseTimer']() {
                this.interval && (clearInterval(this.interval), this.interval = null);
            }
            ['resumeTimer']() {
                !this.interval && this.count < this.seconds && (this.interval = setInterval(() => this.updateTimer(), 1000));
            }
            ['updateTimer']() {
                this.numberElement.querySelector('span').innerHTML = String(this.seconds - 1 - this.count);
                this.count++;
                this.count >= this.seconds && (clearInterval(this.interval), this.interval = null);
                const _0x12e888 = 2 * Math.PI * this.progressCircle.r.baseVal.value,
                    _0x2e5487 = _0x12e888 - this.count / this.seconds * _0x12e888;
                this.progressCircle.style.strokeDashoffset = '' + _0x2e5487;
                this.seconds === this.count && this.ranQuerybtn();
            }
            ['ranQuerybtn']() {
                if (this.originLink && this.originLink !== 'null') {
                    this.reloadLink.classList.remove('disabled'), this.reloadLink.classList.add('an-extra'), this.reloadLink.setAttribute('href', this.originLink), this.reloadLink.setAttribute('target', '_blank'), this.squareContainer.classList.add('hd'), this.squareContainer.fadeOut(300), this.reloadLink.classList.add('vs');
                    if (_0x1daba0) this.getUriDownload(this.originLink), this.reloadLink.innerHTML = _0x1f0f00;
                    else {
                        this.reloadLink.innerHTML = _0x5d4c8b;
                    }
                }
                else {
                    this.progressCircle.classList.add('damaged');
                    this.reloadLink.innerHTML = _0x597e01;
                    this.reloadLink.classList.add('damaged');
                    this.reloadLink.classList.remove('disabled');
                    this.numberElement.querySelector('span').classList.add('damaged');
                    this.numberElement.querySelector('span').textContent = '!';
                    this.numberElement.classList.add('damaged');
                    this.squareContainer.classList.add('hd');
                    this.squareContainer.fadeOut(300);
                    this.reloadLink.setAttribute('onclick', 'event.preventDefault()');
                    this.reloadLink.setAttribute('aria-disabled', 'true');
                }
            }
            ['start']() {
                this.seconds = parseInt(_0x198a88);
                const _0xf476d5 = 2 * Math.PI * this.progressCircle.r.baseVal.value;
                this.progressCircle.style.strokeDasharray = '' + _0xf476d5, this.progressCircle.style.strokeDashoffset = '' + _0xf476d5, this.count = 0, this.hasStarted = true;
                this.isWindowFocused ? this.interval = setInterval(() => this.updateTimer(), 1000) : this.waitForFocus();
            }
            ['waitForFocus']() {
                const _0x1a0759 = () => {
                    if (this.isWindowFocused && !this.interval && this.count < this.seconds) this.interval = setInterval(() => this.updateTimer(), 1000);
                    else !this.isWindowFocused && setTimeout(_0x1a0759, 100);
                };
                _0x1a0759();
            }
            ['addActivityListeners']() {
                const _0x22f46b = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart', 'click'];
                _0x22f46b.forEach(_0x2b9cd6 => {
                    const _0x32e4ee = {};
                    _0x32e4ee.passive = true, document.addEventListener(_0x2b9cd6, () => {
                        !this.isWindowFocused && document.hasFocus() && !document.hidden && (this.isWindowFocused = true, this.hasStarted && !this.interval && this.count < this.seconds && this.resumeTimer());
                    }, _0x32e4ee);
                });
            }
            ['destroy']() {
                this.interval && clearInterval(this.interval);
                if (this.focusChecker) {
                    clearInterval(this.focusChecker);
                }
            }
            ['getUriDownload'](_0x2e90fd) {
                _0x2e90fd && setTimeout(() => {
                    window.location.href = _0x2e90fd;
                }, 10);
            }
            ['init'](_0x54bb2f, _0x12441b) {
                this.timerContainer = !_0x4abeb2 ? _0x54bb2f : document.querySelector('#modal-red .modalred-content'), this.originLink = _0x12441b;
                const _0x4c636b = () => {
                    this.numberElement = this.timerContainer.querySelector('.redNumper');
                    this.reloadLink = this.timerContainer.querySelector('.areload');
                    this.squareContainer = this.timerContainer.querySelector('.square-container');
                    this.progressCircle = this.timerContainer.querySelector('.progress-circle');
                    !_0x4abeb2 ? this.timerContainer.insertAdjacentHTML('beforeend', _0x11fc75) : this.timerContainer.querySelector('.redContent').insertAdjacentHTML('beforeend', _0x11fc75);
                    this.start();
                };
                if (!_0x4abeb2) this.timerContainer.innerHTML = this.timerHTML, _0x4c636b();
                else {
                    _0x27744d('<div id="redirect-page"></div>', 'content', this.timerHTML, (_0x4840e4, _0x2746b4, _0x1dcbea) => {
                        if (_0x4840e4 == null) {
                            this.timerContainer.innerHTML = '<div class="post-body">' + _0x2746b4 + '</div>';
                            const _0x4d6fa2 = this.timerContainer.closest('.modal');
                            if (_0x4d6fa2) {
                                const _0x3e51c4 = _0x4d6fa2.querySelector('h2');
                                if (_0x3e51c4) _0x3e51c4.textContent = _0x1dcbea;
                            }
                            _0x4c636b();
                            const _0x1add8b = new DOMParser(),
                                _0xeaf60b = _0x1add8b.parseFromString(_0x2746b4, 'text/html');
                            _0xeaf60b.querySelectorAll('ins').forEach(() => {
                                (window.adsbygoogle = window.adsbygoogle || []).push(
                                    {});
                            });
                        }
                    });
                }
            }
        }
        if (!_0x4abeb2 && document.querySelector('#redirect-page')) {
            const _0x54177b = _0x434b8b => {
                try {
                    return new TextDecoder().decode(Uint8Array.from(atob(_0x434b8b), _0x2e3e27 => _0x2e3e27.charCodeAt(0)));
                }
                catch (_0x522368) {
                    return console.error('Failed to decode base64 string:', _0x434b8b, _0x522368), null;
                }
            },
                _0x145ded = new URLSearchParams(location.search),
                _0x340e79 = _0x145ded.get('link');
            let _0x352bd5 = _0x340e79 ? _0x54177b(_0x340e79) : sessionStorage.getItem('link');
            _0x145ded.delete('link');
            const _0x305cba = _0x145ded.toString() ? '?' + _0x145ded.toString() : '';
            sessionStorage.setItem('link', _0x352bd5), history.replaceState('', '', '' + location.origin + location.pathname + _0x305cba);
            const _0x2bcde2 = new _0xe1d5d4();
            _0x2bcde2.init(document.querySelector('#redirect-page'), _0x352bd5);
        }
        const _0x5e2d93 = document.querySelectorAll('.post-body a[href]:not([href^=\'https://twitter.com/\'],[href^=\'javascript:\'],[href^=\'#\'])');
        _0x5e2d93.length > 0 && _0x5e2d93.forEach(_0x42f80f => {
            const _0x3e3595 = _0x42f80f.href;
            if (!_0x3e3595 || _0x3e3595 === 'javascript:void(0)' || _0x3e3595.startsWith('#')) return;
            const _0xe445bf = new URL(location.href).hostname;
            let _0x243952 = ['blogger.com', 'googleusercontent.com', 'bp.blogspot.com', 'whatsapp:', 'mailto:', 'javascript:', '#'];
            !_0x1804c7 && _0x243952.push(_0xe445bf);
            _0x2c1f3f && (_0x243952 = _0x243952.concat(_0x2c1f3f.split('|').map(_0x141d87 => _0x141d87.trim()).filter(_0x35f5c4 => _0x35f5c4)));
            const _0x502db6 = !_0x243952.some(_0x2bc409 => {
                if (!_0x2bc409) return false;
                return _0x3e3595.includes(_0x2bc409);
            });
            if (_0x502db6 && !_0x42f80f.closest('.hiddenContent')) {
                if (_0x4abeb2) {
                    _0x42f80f.removeAttribute('href'), _0x42f80f.setAttribute('data-toggle', 'modal-red'), _0x42f80f.classList.add('modal-btn');
                    if (_0x42f80f.hasAttribute('target')) {
                        _0x42f80f.removeAttribute('target');
                    }
                    _0x42f80f.onclick = () => {
                        const _0x402dbf = document.getElementById('redirect-page') || document.querySelector('#modal-red .modalred-content'),
                            _0x25f3bb = new _0xe1d5d4();
                        _0x25f3bb.init(_0x402dbf, _0x3e3595);
                    };
                }
                else {
                    const _0x382c79 = _0x3041f7 => {
                        try {
                            return btoa(String.fromCharCode(...new TextEncoder().encode(_0x3041f7)));
                        }
                        catch (_0x442ca7) {
                            return console.error('Failed to encode to base64:', _0x3041f7, _0x442ca7), null;
                        }
                    };
                    _0x27744d('<div id="redirect-page"></div>', 'link', null, (_0x53ceaa, _0x322d76) => {
                        if (_0x53ceaa == null && _0x322d76 !== '') {
                            const _0x3aba39 = _0x382c79(_0x3e3595);
                            _0x3aba39 && (_0x42f80f.href = _0x322d76 + '?link=' + _0x3aba39);
                        }
                    });
                }
            }
        });
    }
    Element.prototype.showWithTransformNone = function (_0x2be647, _0x105bc8, _0x4ccdbb, _0x54accb, _0x3f302a) {
        const _0x3bf1d6 = this,
            _0x2b38b = {};
        switch (_0x2be647) {
            case 'show':
                _0x2b38b.transition = (_0x105bc8 || 300) + 'ms linear', _0x2b38b.display = _0x54accb, Object.keys(_0x2b38b).forEach(_0x173398 => {
                    _0x3bf1d6.style[_0x173398] = _0x2b38b[_0x173398];
                }), setTimeout(function () {
                    _0x3bf1d6.style.transform = _0x4ccdbb;
                    if (_0x3f302a) _0x3f302a(_0x3bf1d6);
                }, _0x105bc8);
                break;
            case 'hide':
                _0x2b38b.transition = (_0x105bc8 || 300) + 'ms linear', _0x2b38b.transform = _0x4ccdbb, Object.keys(_0x2b38b).forEach(_0x3888ed => {
                    _0x3bf1d6.style[_0x3888ed] = _0x2b38b[_0x3888ed];
                }), setTimeout(function () {
                    _0x3bf1d6.style.display = _0x54accb;
                    if (_0x3f302a) _0x3f302a(_0x3bf1d6);
                }, _0x105bc8);
                break;
        }
    };
    let _0x299916 = false,
        _0x1fb3bc = false;
    document.addEventListener('pointerdown', _0x388b53 => {
        _0x299916 = false;
        _0x1fb3bc = !_0x388b53.target.closest('.modal') && !_0x388b53.target.closest('.modal-btn');
    }), document.addEventListener('pointermove', _0x17ac0e => {
        _0x299916 = true;
    }), document.addEventListener('click', _0x3fd6f8 => {
        const _0x3ed27a = _0x3fd6f8.target;
        if (_0x3fd6f8.button === 0) {
            if (_0x3ed27a.closest('.modal-btn')) {
                const _0x40edd3 = _0x3ed27a.closest('.modal-btn'),
                    _0x3ac814 = _0x40edd3.getAttribute('data-toggle'),
                    _0x94d446 = document.querySelector('#' + _0x3ac814),
                    _0x3053f4 = _0x94d446.closest('.modal_outer');
                _0x3fd6f8.stopPropagation();
                if (document.querySelector('.modal')) {
                    document.querySelectorAll('.modal').forEach(_0x36cdba => {
                        _0x94d446 !== _0x36cdba ? _0x36cdba.showWithTransformNone('hide', 300, 'scale(0)', 'none') : _0x36cdba.showWithTransformNone('show', 0, 'none', 'block');
                    });
                }
                _0x3053f4.fadeIn(0, 'flex', _0x4e6370 => _0x4e6370.classList.add('outer_ov'));
            }
            _0x3ed27a.closest('.modal-close') && document.querySelector('.modal') && document.querySelectorAll('.modal').forEach(_0x19f134 => {
                _0x19f134.showWithTransformNone('hide', 300, 'scale(0)', 'none');
                if (_0x19f134.parentElement.classList.contains('outer_ov')) {
                    _0x19f134.closest('.modal_outer').fadeOut(300, _0x5e6e1b => _0x5e6e1b.classList.remove('outer_ov'));
                }
            }), _0x1fb3bc && !_0x3ed27a.closest('.modal') && !_0x3ed27a.closest('.modal-btn') && document.querySelector('.modal') && document.querySelectorAll('.modal').forEach(_0x12e9ab => {
                if (window.getComputedStyle(_0x12e9ab).display.indexOf('block') != -1) {
                    _0x12e9ab.id !== 'modal-adblock' && (_0x12e9ab.showWithTransformNone('hide', 300, 'scale(0)', 'none'), _0x12e9ab.parentElement.classList.contains('outer_ov') && _0x12e9ab.closest('.modal_outer').fadeOut(300, _0x5a2837 => _0x5a2837.classList.remove('outer_ov')));
                }
            });
        }
    });

    function _0x50d243() {
        (function () {
            const _0x1f33c6 = document,
                _0xf6d777 = _0x1f33c6.head,
                _0x4e4cb4 = 'pointer-events: none; height: 1px; width: 0; opacity: 0; visibility: hidden; position: fixed; bottom: 0;',
                _0xad3a82 = _0x1f33c6.createElement('div'),
                _0x1cfc53 = _0x1f33c6.createElement('div'),
                _0xf66bc2 = _0x1f33c6.createElement('ins');
            _0xad3a82.id = 'div-gpt-ad-3061307416813-0', _0xad3a82.style = _0x4e4cb4, _0x1cfc53.className = 'textads banner-ads banner_ads ad-unit ad-zone ad-space adsbox ads', _0x1cfc53.style = _0x4e4cb4, _0xf66bc2.className = 'adsbygoogle', _0xf66bc2.style = 'display: none;';
            const _0x880b77 = {};
            _0x880b77.allowed = null, _0x880b77.elements = [_0xad3a82, _0x1cfc53, _0xf66bc2];
            const _0x2518d9 = _0x880b77;
            this.checkAdsStatus = function (_0x4e71f9) {
                const _0x2c30be = _0x1f33c6.body;
                'function' == typeof _0x4e71f9 && ('boolean' == typeof _0x2518d9.allowed ? _0x4e71f9(_0x2518d9) : (_0x2c30be.appendChild(_0xad3a82), _0x2c30be.appendChild(_0x1cfc53), _0x2c30be.appendChild(_0xf66bc2), setTimeout(function () {
                    if (0 === _0xad3a82.offsetHeight || 0 === _0x1cfc53.offsetHeight || _0xf66bc2.firstElementChild) _0x2518d9.allowed = false, _0x4e71f9(_0x2518d9);
                    else {
                        const _0x54959f = _0x1f33c6.createElement('script');
                        _0x54959f.async = true, _0x54959f.crossOrigin = 'anonymous', _0x54959f.onload = function () {
                            _0x2518d9.allowed = true, _0x4e71f9(_0x2518d9);
                        }, _0x54959f.onerror = function () {
                            _0x2518d9.allowed = false, _0x4e71f9(_0x2518d9);
                        }, _0xf6d777.appendChild(_0x54959f);
                    }
                    _0xad3a82.remove(), _0x1cfc53.remove(), _0xf66bc2.remove();
                }, 40)));
            };
        }).call(this);

        function _0x1b5d92() {
            window.checkAdsStatus(function (_0x3f0ba6) {
                if (!_0x3f0ba6.allowed) {
                    const _0x47fd82 = '<svg style=\'stroke:none;fill:currentColor!important\' viewBox=\'0 0 24 24\'><path d=\'M12.2 9L10.2 7H13C14.1 7 15 7.9 15 9V11.8L13 9.8V9H12.2M23 9V7H19C17.9 7 17 7.9 17 9V11C17 12.1 17.9 13 19 13H21V15H18.2L20.2 17H21C22.1 17 23 16.1 23 15V13C23 11.9 22.1 11 21 11H19V9H23M22.1 21.5L20.8 22.8L14.4 16.4C14.1 16.7 13.6 17 13 17H9V10.9L7 8.9V17H5V13H3V17H1V9C1 7.9 1.9 7 3 7H5.1L1.1 3L2.4 1.7L22.1 21.5M5 9H3V11H5V9M13 14.9L11 12.9V15H13V14.9Z\'/></svg>',
                        _0x5b2ef9 = 'من فضلك عطل مانع الإعلانات لديÙƒ',
                        _0x4c006c = '<p>لقد تم اكتشاف استخدامك لإضافة مانع الإعلانات في متصفحك، إيراداتنا من الإعلانات تساهم في تشغيل هذا الموقع، نرجو منك تعطيل مانع الإعلانات لموقعنا.</p>';
                    document.body.insertAdjacentHTML('beforeend', '<button class=\'modal-btn hide\' data-toggle=\'modal-adblock\'></button><div class=\'modal_outer\'><div class=\'modal\' id=\'modal-adblock\'>' + _0x47fd82 + '<h2>' + _0x5b2ef9 + '</h2><div class=\'popCo\'>' + _0x4c006c + '</div></div></div>'), document.querySelector('[data-toggle="modal-adblock"]').click();
                }
            }), document.removeEventListener('DOMContentLoaded', _0x1b5d92);
        };
        if (document.readyState === 'complete' || document.readyState !== 'loading') _0x1b5d92();
        else {
            document.addEventListener('DOMContentLoaded', _0x1b5d92);
        }
    }

    function _0x298bb0(_0x4c5a98, _0x14f423) {
        let _0x504d23;
        return function () {
            clearTimeout(_0x504d23), _0x504d23 = setTimeout(() => {
                _0x4c5a98.apply(this, arguments);
            }, _0x14f423);
        };
    }

    function _0x30b3ef(_0x40808b, _0x161754) {
        try {
            if (!_0x40808b || !_0x40808b.offsetWidth) return _0x40808b;
            _0x161754 = _0x161754 - 10;
            if (_0x40808b.offsetWidth < _0x161754) return _0x40808b.parentElement ? _0x30b3ef(_0x40808b.parentElement, _0x161754) : _0x40808b;
            else {
                const _0xe7b842 = document.createElement('div');
                _0xe7b842.style.width = '100%', _0xe7b842.style.height = '1px', _0xe7b842.style.visibility = 'hidden';
                if (_0x40808b.nextSibling) {
                    _0x40808b.parentNode.insertBefore(_0xe7b842, _0x40808b.nextSibling);
                }
                else _0x40808b.parentNode.appendChild(_0xe7b842);
                const _0x516684 = _0xe7b842.offsetWidth;
                _0xe7b842.remove();
                if (_0x516684 < _0x161754) {
                    return _0x40808b.parentElement ? _0x30b3ef(_0x40808b.parentElement, _0x161754) : _0x40808b;
                }
                else return _0x40808b;
            }
        }
        catch (_0x2ef3e0) {
            return console.error('Error in findSuitableElement:', _0x2ef3e0), _0x40808b;
        }
    }

    function _0x23b80a() {
        try {
            const _0x556f49 = document.querySelector('.post-body');
            if (!_0x556f49) {
                return null;
            }
            const _0x2a5417 = _0x556f49.offsetWidth,
                _0x131991 = ['pre', 'pre *', 'ins', 'ins *', 'iframe', 'iframe *', 'blockquote', 'blockquote *', 'ul', 'ul *', 'ol', 'ol *', '.separator', '.separator *', 'br', 'table', 'table *', '.ContactForm', '.ContactForm *', '.hiddenContent', '.hiddenContent *', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'h1 *', 'h2 *', 'h3 *', 'h4 *', 'h5 *', 'h6 *', '.Middle-Ad', '.Middle-Ad *', '.inside-ad', '.inside-ad *', 'script', 'style', 'noscript'].join(', '),
                _0x4a4697 = _0x556f49.querySelectorAll(_0x131991);
            _0x4a4697.forEach(_0x4c0a76 => {
                _0x4c0a76 && _0x4c0a76.classList && _0x4c0a76.classList.add('no-sl');
            });
            const _0x4bb274 = _0x556f49.querySelectorAll('*:not(.no-sl)');
            if (_0x4bb274.length === 0) return _0x556f49;
            const _0x5b8e00 = Math.floor(_0x4bb274.length / 2),
                _0x50634c = _0x4bb274[_0x5b8e00];
            return _0x30b3ef(_0x50634c, _0x2a5417);
        }
        catch (_0x590322) {
            return console.error('Error in findMiddleElement:', _0x590322), document.querySelector('.post-body');
        }
    }

    function _0x3698f4() {
        try {
            const _0x2d4d7e = document.querySelectorAll('ins.adsbygoogle:empty:not([data-ad-loaded])'),
                _0x4e471b = document.querySelectorAll('ins.adsbygoogle[data-ad-loaded=\'processing\']:empty');
            let _0x10bc39 = 0;
            return _0x2d4d7e.forEach((_0x531937, _0x1cb41b) => {
                try {
                    _0x531937.dataset.adLoaded = 'retry', (window.adsbygoogle = window.adsbygoogle || []).push(
                        {}), _0x10bc39++;
                }
                catch (_0x492b52) {
                    console.error('Error retrying failed ad ' + _0x1cb41b + ':', _0x492b52);
                }
            }), _0x4e471b.forEach((_0x3bc4f3, _0x5bf5f8) => {
                try {
                    _0x3bc4f3.dataset.adLoaded = 'retry-processing', (window.adsbygoogle = window.adsbygoogle || []).push(
                        {}), _0x10bc39++;
                }
                catch (_0x5ee47f) {
                    console.error('Error retrying processing ad ' + _0x5bf5f8 + ':', _0x5ee47f);
                }
            }), _0x10bc39;
        }
        catch (_0x4050a1) {
            return console.error('Error in retryFailedAds:', _0x4050a1), 0;
        }
    }

    function _0x4c2f49() {
        let _0x3828d5 = 0;
        const _0x9df34e = 6,
            _0x209f8a = setInterval(() => {
                try {
                    _0x3828d5++;
                    const _0x414a4c = document.querySelectorAll('ins.adsbygoogle:empty').length;
                    _0x414a4c > 0 && _0x3828d5 <= _0x9df34e && _0x3698f4(), (_0x3828d5 >= _0x9df34e || _0x414a4c === 0) && clearInterval(_0x209f8a);
                }
                catch (_0x221f6f) {
                    console.error('Error in periodic ad check:', _0x221f6f), clearInterval(_0x209f8a);
                }
            }, 2000);
    }
    async function _0x465fe7(_0x5880ac, _0x563023, _0x7969e, _0x5e44aa) {
        try {
            if (_0x563023 && typeof _0x563023 === 'function') {
                _0x563023();
            }
            const _0xd49807 = await fetch(_0x5880ac);
            if (!_0xd49807.ok) throw new _0xc490eb('HTTP error! status: ' + _0xd49807.status);
            const _0x3e6423 = await _0xd49807.json();
            _0x7969e && typeof _0x7969e === 'function' && _0x7969e(_0x3e6423);
        }
        catch (_0x250be8) {
            if (_0x5e44aa && typeof _0x5e44aa === 'function') {
                _0x5e44aa(_0x250be8);
            }
        }
    }
})();
