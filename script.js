// Register Service Worker (PWA)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js').catch(() => {});
    });
}

// Mobile menu toggle with hamburger animation
(function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            const isOpen = navMenu.classList.toggle('active');
            menuToggle.classList.toggle('active');
            menuToggle.setAttribute('aria-expanded', isOpen);
        });

        // Close menu on link click
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                menuToggle.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }
})();

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Navbar scroll shadow effect
(function() {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 10) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }, { passive: true });
    }
})();

// Intersection observer for section fade-in
(function() {
    const sections = document.querySelectorAll('section');
    if (sections.length && 'IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        sections.forEach(section => observer.observe(section));
    }
})();

// Scroll-to-top button
(function() {
    const btn = document.createElement('button');
    btn.className = 'scroll-top-btn';
    btn.innerHTML = '&#x2191;';
    btn.setAttribute('aria-label', 'Przewin do gory');
    btn.style.cssText = 'position:fixed;bottom:2rem;right:5rem;width:44px;height:44px;border-radius:50%;border:none;background:var(--primary-color,#FF7900);color:white;font-size:1.3rem;cursor:pointer;opacity:0;visibility:hidden;transition:opacity 0.3s,visibility 0.3s;z-index:999;box-shadow:0 2px 8px rgba(0,0,0,0.2);';
    document.body.appendChild(btn);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            btn.style.opacity = '1';
            btn.style.visibility = 'visible';
        } else {
            btn.style.opacity = '0';
            btn.style.visibility = 'hidden';
        }
    }, { passive: true });

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
})();

// Hero subtitle typing effect
(function() {
    const subtitle = document.querySelector('.hero-subtitle');
    if (subtitle && subtitle.closest('.hero') && !subtitle.dataset.typed) {
        subtitle.dataset.typed = 'true';
        const text = subtitle.textContent;
        subtitle.textContent = '';
        subtitle.style.visibility = 'visible';
        let i = 0;
        function type() {
            if (i < text.length) {
                subtitle.textContent += text.charAt(i);
                i++;
                setTimeout(type, 40);
            }
        }
        setTimeout(type, 300);
    }
})();

// Button ripple effect
document.addEventListener('click', function(e) {
    const btn = e.target.closest('.btn');
    if (!btn) return;

    const ripple = document.createElement('span');
    const rect = btn.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    ripple.style.cssText = 'position:absolute;border-radius:50%;background:rgba(255,255,255,0.4);pointer-events:none;transform:scale(0);animation:ripple-anim 0.6s ease-out;width:' + size + 'px;height:' + size + 'px;left:' + (e.clientX - rect.left - size / 2) + 'px;top:' + (e.clientY - rect.top - size / 2) + 'px;';
    btn.style.position = 'relative';
    btn.style.overflow = 'hidden';
    btn.appendChild(ripple);
    ripple.addEventListener('animationend', () => ripple.remove());
});

// Add ripple keyframes
(function() {
    const style = document.createElement('style');
    style.textContent = '@keyframes ripple-anim{to{transform:scale(4);opacity:0}}';
    document.head.appendChild(style);
})();

// Cal.com embed error handler - show placeholder on error
(function() {
    const iframe = document.getElementById('calcomEmbed');
    const placeholder = document.getElementById('bookingPlaceholder');
    if (iframe && placeholder) {
        iframe.addEventListener('error', () => {
            iframe.style.display = 'none';
            placeholder.style.display = 'flex';
        });
        // Fallback: if iframe doesn't load within 10s
        setTimeout(() => {
            try {
                if (iframe.contentDocument && !iframe.contentDocument.body.innerHTML) {
                    iframe.style.display = 'none';
                    placeholder.style.display = 'flex';
                }
            } catch (e) {
                // cross-origin, iframe loaded fine
            }
        }, 10000);
    }
})();
