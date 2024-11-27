export function setupNavigationTracking() {
    const navLinks = document.querySelectorAll('[data-nav-link]');

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            const linkName = event.target.getAttribute('data-nav-link');

            // Send event to Google Analytics
            gtag('event', 'navigation_click', {
                'event_category': 'navigation',
                'event_label': linkName, // Name of the section
                'value': 1
            });
        });
    });
}

export function setupServiceCardTracking() {
    const serviceCards = document.querySelectorAll('.service-item');

    serviceCards.forEach(card => {
        card.addEventListener('click', () => {
            const serviceCategory = card.getAttribute('data-category');
            const serviceTitle = card.getAttribute('data-title');

            // Send event to Google Analytics directly
            if (typeof gtag !== 'undefined') {
                gtag('event', 'service_card_click', {
                    event_category: 'services',
                    event_label: `${serviceCategory} - ${serviceTitle}`, // Combine category and title
                    value: 1
                });
            }
        });
    });
}

export function setupHeroButtonTracking() {
    const heroButton = document.querySelector('#hero-cta');

    if (heroButton) {
        heroButton.addEventListener('click', () => {
            const action = heroButton.getAttribute('data-action');

            // Send event to Google Analytics
            if (typeof gtag !== 'undefined') {
                gtag('event', action, {
                    event_category: 'hero_section',
                    event_label: 'Hero CTA Button Click',
                    value: 1
                });
            }
        });
    }
}

export function setupServicesCTAButtonTracking() {
    const servicesCTAButton = document.querySelector('.services-cta-btn');

    if (servicesCTAButton) {
        servicesCTAButton.addEventListener('click', () => {
            const action = servicesCTAButton.getAttribute('data-action');

            // Send event to Google Analytics
            if (typeof gtag !== 'undefined') {
                gtag('event', action, {
                    event_category: 'services_section',
                    event_label: 'Services CTA Button Click',
                    value: 1
                });
            }
        });
    }
}

export function setupContactFormTracking() {
    const contactForm = document.querySelector('#contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const name = contactForm.querySelector('#name').value.trim();

            // Send event to Google Analytics
            if (typeof gtag !== 'undefined') {
                gtag('event', 'contact_form_submit', {
                    event_category: 'contact_form',
                    event_label: `Contact Form Submitted by: ${name || 'Anonymous'}`,
                    value: 1
                });
            }
        });
    }
}

export function setupContactFormFieldTracking() {
    const contactForm = document.querySelector('#contact-form');

    if (contactForm) {
        const fields = contactForm.querySelectorAll('input, textarea');

        fields.forEach(field => {
            field.addEventListener('focus', () => {
                const fieldName = field.getAttribute('name');

                // Send event to Google Analytics
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'form_field_focus', {
                        event_category: 'contact_form',
                        event_label: `Field Focused: ${fieldName}`,
                        value: 1
                    });
                }
            });
        });
    }
}

export function setupScrollDepthTracking() {
    let scrollTracked = { 25: false, 50: false, 75: false, 100: false };

    const trackScrollDepth = () => {
        const scrollDepth = Math.floor((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);

        for (let depth in scrollTracked) {
            if (!scrollTracked[depth] && scrollDepth >= depth) {
                scrollTracked[depth] = true;

                // Send event to Google Analytics
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'scroll', {
                        event_category: 'Scroll Depth',
                        event_label: `${depth}%`,
                        value: parseInt(depth, 10)
                    });
                }
            }
        }
    };

    window.addEventListener('scroll', trackScrollDepth);
}