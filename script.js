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

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
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

// Form handling (Getform)
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(contactForm);
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.textContent;

        // Disable button and show loading state
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

            // Hide status message after 5 seconds
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

// Animate stats on scroll
const statNumbers = document.querySelectorAll('.stat-number');
let animated = false;

const animateStats = () => {
    const statsSection = document.querySelector('.about-stats');
    if (!statsSection) return;

    const rect = statsSection.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

    if (isVisible && !animated) {
        animated = true;
        statNumbers.forEach(stat => {
            const text = stat.textContent;
            if (text.includes('+')) {
                const target = parseInt(text);
                let current = 0;
                const increment = target / 50;
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        stat.textContent = target + '+';
                        clearInterval(timer);
                    } else {
                        stat.textContent = Math.floor(current) + '+';
                    }
                }, 30);
            }
        });
    }
};

window.addEventListener('scroll', animateStats);

// Typing effect for hero subtitle (optional)
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

    // Start typing after page load
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
    // Show placeholder if Cal.com username hasn't been set yet
    if (calSrc.includes('TWOJ-USERNAME')) {
        calcomEmbed.style.display = 'none';
        bookingPlaceholder.classList.add('active');
    } else {
        // Handle iframe load error
        calcomEmbed.addEventListener('error', () => {
            calcomEmbed.style.display = 'none';
            bookingPlaceholder.classList.add('active');
        });
    }
}

console.log('🚀 Website loaded successfully!');

// Cookie Banner Functionality
const cookieBanner = document.getElementById('cookieBanner');
const cookieAccept = document.getElementById('cookieAccept');
const cookieReject = document.getElementById('cookieReject');

// Show cookie banner if no consent stored
if (!localStorage.getItem('cookieConsent')) {
    setTimeout(() => {
        cookieBanner.classList.add('show');
    }, 1000);
}

// Accept cookies
cookieAccept.addEventListener('click', () => {
    localStorage.setItem('cookieConsent', 'accepted');
    cookieBanner.classList.remove('show');
    // Load Google Analytics
    if (typeof loadGoogleAnalytics === 'function') {
        loadGoogleAnalytics();
    }
});

// Reject cookies
cookieReject.addEventListener('click', () => {
    localStorage.setItem('cookieConsent', 'rejected');
    cookieBanner.classList.remove('show');
});

// Privacy Policy Modal
const privacyModal = document.getElementById('privacyModal');
const privacyLinks = document.querySelectorAll('.privacy-link, a[href="#privacy"]');
const privacyClose = document.querySelector('.privacy-close');

// Open privacy modal
privacyLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        privacyModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});

// Close privacy modal
if (privacyClose) {
    privacyClose.addEventListener('click', () => {
        privacyModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
}

// Close privacy modal when clicking outside
privacyModal.addEventListener('click', (e) => {
    if (e.target === privacyModal) {
        privacyModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Close privacy modal with ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && privacyModal.classList.contains('active')) {
        privacyModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Order Modal Functionality
const orderModal = document.getElementById('orderModal');
const orderButtons = document.querySelectorAll('.btn-order');
const modalClose = document.querySelector('.modal-close');
const orderForm = document.getElementById('orderForm');
const orderFormStatus = document.getElementById('orderFormStatus');

// Open modal when clicking "Zamów" button
orderButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const serviceName = this.getAttribute('data-service');
        const servicePrice = this.getAttribute('data-price');

        // Update modal content
        document.getElementById('modalServiceName').textContent = serviceName;
        document.getElementById('modalServicePrice').textContent = servicePrice;
        document.getElementById('selectedService').value = serviceName;

        // Show modal
        orderModal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    });
});

// Close modal
const closeModal = () => {
    orderModal.classList.remove('active');
    document.body.style.overflow = 'auto';
    orderForm.reset();
    orderFormStatus.style.display = 'none';
};

modalClose.addEventListener('click', closeModal);

// Close modal when clicking outside
orderModal.addEventListener('click', function(e) {
    if (e.target === orderModal) {
        closeModal();
    }
});

// Close modal with ESC key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && orderModal.classList.contains('active')) {
        closeModal();
    }
});

// Handle order form submission (Getform)
orderForm.addEventListener('submit', async function(e) {
    e.preventDefault();

    const formData = new FormData(orderForm);
    const submitButton = orderForm.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.textContent;

    // Add subject with service name
    formData.set('subject', `Zamówienie: ${formData.get('service')}`);

    // Disable button
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

            // Close modal after 3 seconds
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
