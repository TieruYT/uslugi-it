// Site Firebase integration - promo banner only
(function() {
    if (typeof firebaseConfig === 'undefined') return;

    // Initialize Firebase if not already initialized
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }

    var db = firebase.database();

    // Promo banner
    db.ref('promo').on('value', function(snapshot) {
        var promo = snapshot.val();
        var banner = document.getElementById('promoBanner');
        var bannerText = document.getElementById('promoBannerText');
        if (!banner || !bannerText) return;

        if (promo && promo.active) {
            // Check expiry
            if (promo.expiry) {
                var now = new Date();
                var expiry = new Date(promo.expiry);
                if (now > expiry) {
                    banner.style.display = 'none';
                    return;
                }
            }

            // Set text and optional link
            if (promo.link) {
                bannerText.innerHTML = '<a href="' + promo.link + '" style="color:inherit;text-decoration:underline;">' + promo.text + '</a>';
            } else {
                bannerText.textContent = promo.text;
            }

            // Set color
            if (promo.color) {
                var colors = {
                    orange: '#FF7900',
                    green: '#16a34a',
                    blue: '#2563eb',
                    red: '#dc2626'
                };
                banner.style.background = colors[promo.color] || promo.color;
            }

            banner.style.display = 'block';
        } else {
            banner.style.display = 'none';
        }
    });

    // Promo banner close button
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('promo-banner-close')) {
            var banner = document.getElementById('promoBanner');
            if (banner) banner.style.display = 'none';
        }
    });
})();
