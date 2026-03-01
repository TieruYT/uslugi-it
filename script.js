// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');

    // Animate hamburger menu
    const spans = menuToggle.querySelectorAll('span');
    if (navMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const spans = menuToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// Smooth scroll for same-page anchor links only
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        // Only handle pure anchors (#something), not links to other pages
        if (href.startsWith('#') && href.length > 1) {
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.15)';
    }

    lastScroll = currentScroll;
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections for fade-in effect
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Form handling (Getform) - only on pages with contact form
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

if (contactForm && formStatus) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(contactForm);
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.textContent;

        submitButton.disabled = true;
        submitButton.textContent = 'Wysyłanie...';

        try {
            const response = await fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                formStatus.className = 'form-status success';
                formStatus.textContent = '✓ Dziękuję za wiadomość! Odezwę się jak najszybciej.';
                formStatus.style.display = 'block';
                contactForm.reset();
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            formStatus.className = 'form-status error';
            formStatus.textContent = '✗ Wystąpił błąd. Spróbuj ponownie lub skontaktuj się bezpośrednio przez email/telefon.';
            formStatus.style.display = 'block';
        } finally {
            submitButton.disabled = false;
            submitButton.textContent = originalButtonText;

            setTimeout(() => {
                formStatus.style.display = 'none';
            }, 5000);
        }
    });
}

// Add scroll-to-top button
const scrollTopButton = document.createElement('button');
scrollTopButton.innerHTML = '↑';
scrollTopButton.className = 'scroll-top-btn';
scrollTopButton.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: var(--primary-color);
    color: white;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 999;
    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
`;

document.body.appendChild(scrollTopButton);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopButton.style.opacity = '1';
        scrollTopButton.style.visibility = 'visible';
    } else {
        scrollTopButton.style.opacity = '0';
        scrollTopButton.style.visibility = 'hidden';
    }
});

scrollTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

scrollTopButton.addEventListener('mouseenter', () => {
    scrollTopButton.style.transform = 'scale(1.1)';
});

scrollTopButton.addEventListener('mouseleave', () => {
    scrollTopButton.style.transform = 'scale(1)';
});

// Typing effect for hero subtitle
const heroSubtitle = document.querySelector('.hero-subtitle');
if (heroSubtitle) {
    const originalText = heroSubtitle.textContent;
    heroSubtitle.textContent = '';
    let i = 0;

    const typeWriter = () => {
        if (i < originalText.length) {
            heroSubtitle.textContent += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    };

    setTimeout(typeWriter, 500);
}

// Add ripple effect to buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.cssText = `
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.6);
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            pointer-events: none;
            animation: ripple 0.6s ease-out;
        `;

        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    });
});

// Add ripple animation to CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        from {
            transform: scale(0);
            opacity: 1;
        }
        to {
            transform: scale(2);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Cal.com embed - show placeholder if not configured yet
const calcomEmbed = document.getElementById('calcomEmbed');
const bookingPlaceholder = document.getElementById('bookingPlaceholder');

if (calcomEmbed) {
    const calSrc = calcomEmbed.getAttribute('src');
    if (calSrc.includes('TWOJ-USERNAME')) {
        calcomEmbed.style.display = 'none';
        bookingPlaceholder.classList.add('active');
    } else {
        calcomEmbed.addEventListener('error', () => {
            calcomEmbed.style.display = 'none';
            bookingPlaceholder.classList.add('active');
        });
    }
}

// Cookie Banner Functionality
const cookieBanner = document.getElementById('cookieBanner');
const cookieAccept = document.getElementById('cookieAccept');
const cookieReject = document.getElementById('cookieReject');

if (cookieBanner && !localStorage.getItem('cookieConsent')) {
    setTimeout(() => {
        cookieBanner.classList.add('show');
    }, 1000);
}

if (cookieAccept) {
    cookieAccept.addEventListener('click', () => {
        localStorage.setItem('cookieConsent', 'accepted');
        cookieBanner.classList.remove('show');
        if (typeof loadGoogleAnalytics === 'function') {
            loadGoogleAnalytics();
        }
    });
}

if (cookieReject) {
    cookieReject.addEventListener('click', () => {
        localStorage.setItem('cookieConsent', 'rejected');
        cookieBanner.classList.remove('show');
    });
}

// Close modals with ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const orderModal = document.getElementById('orderModal');
        if (orderModal && orderModal.classList.contains('active')) {
            orderModal.classList.remove('active');
            document.body.style.overflow = 'auto';
            const orderForm = document.getElementById('orderForm');
            if (orderForm) orderForm.reset();
            const orderFormStatus = document.getElementById('orderFormStatus');
            if (orderFormStatus) orderFormStatus.style.display = 'none';
        }
    }
});

// Order Modal Functionality - only on pages with order modal
const orderModal = document.getElementById('orderModal');
const orderButtons = document.querySelectorAll('.btn-order');
const modalClose = document.querySelector('.modal-close:not(.privacy-close)');
const orderForm = document.getElementById('orderForm');
const orderFormStatus = document.getElementById('orderFormStatus');

if (orderModal && orderButtons.length > 0) {
    orderButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const serviceName = this.getAttribute('data-service');
            const servicePrice = this.getAttribute('data-price');

            document.getElementById('modalServiceName').textContent = serviceName;
            document.getElementById('modalServicePrice').textContent = servicePrice;
            document.getElementById('selectedService').value = serviceName;

            orderModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    const closeModal = () => {
        orderModal.classList.remove('active');
        document.body.style.overflow = 'auto';
        if (orderForm) orderForm.reset();
        if (orderFormStatus) orderFormStatus.style.display = 'none';
    };

    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }

    orderModal.addEventListener('click', function(e) {
        if (e.target === orderModal) {
            closeModal();
        }
    });

    if (orderForm) {
        orderForm.addEventListener('submit', async function(e) {
            e.preventDefault();

            const formData = new FormData(orderForm);
            const submitButton = orderForm.querySelector('button[type="submit"]');
            const originalButtonText = submitButton.textContent;

            formData.set('subject', `Zamówienie: ${formData.get('service')}`);

            submitButton.disabled = true;
            submitButton.textContent = 'Wysyłanie...';

            try {
                const response = await fetch(orderForm.action, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    orderFormStatus.className = 'form-status success';
                    orderFormStatus.textContent = '✓ Dziękuję! Skontaktuję się z Tobą jak najszybciej.';
                    orderFormStatus.style.display = 'block';
                    orderForm.reset();

                    setTimeout(() => {
                        closeModal();
                    }, 3000);
                } else {
                    throw new Error('Form submission failed');
                }
            } catch (error) {
                orderFormStatus.className = 'form-status error';
                orderFormStatus.textContent = '✗ Wystąpił błąd. Spróbuj zadzwonić: +48 535 035 761';
                orderFormStatus.style.display = 'block';
            } finally {
                submitButton.disabled = false;
                submitButton.textContent = originalButtonText;
            }
        });
    }
}
