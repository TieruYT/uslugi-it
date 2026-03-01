// Site Firebase integration - reads promo banners and prices
(function() {
    // Skip if Firebase config not set
    if (typeof firebaseConfig === 'undefined' || firebaseConfig.apiKey === 'ZASTAP_SWOIM_API_KEY') return;

    try {
        // Initialize Firebase (if not already initialized)
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }
        var db = firebase.database();

        // ============ PROMO BANNER ============
        var banner = document.getElementById('promoBanner');
        var bannerText = document.getElementById('promoBannerText');

        if (banner && bannerText) {
            db.ref('promo').on('value', function(snapshot) {
                var promo = snapshot.val();
                if (!promo || !promo.active || !promo.text) {
                    banner.style.display = 'none';
                    document.body.classList.remove('has-promo');
                    return;
                }

                // Check expiry
                if (promo.expiry) {
                    var expiry = new Date(promo.expiry + 'T23:59:59');
                    if (new Date() > expiry) {
                        banner.style.display = 'none';
                        document.body.classList.remove('has-promo');
                        return;
                    }
                }

                // Set color
                var colors = {
                    orange: '#FF7900',
                    green: '#16a34a',
                    blue: '#2563eb',
                    red: '#dc2626'
                };
                banner.style.background = colors[promo.color] || colors.orange;

                // Set text (with optional link)
                if (promo.link) {
                    bannerText.innerHTML = '<a href="' + promo.link + '" style="color:white;text-decoration:underline">' + promo.text + '</a>';
                } else {
                    bannerText.textContent = promo.text;
                }

                banner.style.display = 'block';
                document.body.classList.add('has-promo');

                // Handle close button - also remove body class
                var closeBtn = banner.querySelector('.promo-banner-close');
                if (closeBtn) {
                    closeBtn.onclick = function() {
                        banner.style.display = 'none';
                        document.body.classList.remove('has-promo');
                    };
                }
            });
        }

        // ============ DYNAMIC PRICES (only on uslugi.html) ============
        var pricingCards = document.querySelectorAll('.pricing-card');
        if (pricingCards.length > 0) {
            db.ref('services').on('value', function(snapshot) {
                var services = snapshot.val();
                if (!services) return;

                // Map pricing cards to service keys
                var cardMap = {
                    'Korepetycje': 'korepetycje',
                    'Nowy telefon': 'nowy-telefon',
                    'Serwis komputera': 'serwis-pc',
                    'Konfiguracja urządzeń': 'konfiguracja',
                    'Kamery domowe': 'kamery',
                    'Pakiet kompleksowy': 'pakiet'
                };

                pricingCards.forEach(function(card) {
                    var h3 = card.querySelector('.pricing-header h3');
                    if (!h3) return;
                    var key = cardMap[h3.textContent.trim()];
                    if (!key || !services[key]) return;

                    var amountEl = card.querySelector('.amount');
                    if (amountEl) {
                        amountEl.textContent = services[key].price + ' zl';
                    }

                    var periodEl = card.querySelector('.period');
                    if (periodEl && services[key].unit === 'zl/h') {
                        periodEl.textContent = '/ godzina';
                    }

                    // Update order button data
                    var btn = card.querySelector('.btn-order');
                    if (btn) {
                        btn.setAttribute('data-price', services[key].price + ' ' + services[key].unit);
                    }
                });
            });
        }

    } catch (e) {
        // Firebase not available - site works with static content
    }
})();
