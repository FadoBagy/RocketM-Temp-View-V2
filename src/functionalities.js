export function addDelayForHeroCta() {
    document.getElementById('hero-cta').addEventListener('click', function () {
        setTimeout(function () {
            document.getElementById('about').scrollIntoView();
        }, 800);
    });
}

export function updateCtaButtonPosition() {
    const servicesSection = document.getElementById('services');
    const ctaContainer = document.querySelector('.services-cta-container');
    const sectionTop = servicesSection.offsetTop;
    const sectionHeight = servicesSection.offsetHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const viewportHeight = window.innerHeight;

    // Calculate the bottom of the section position
    const sectionBottom = sectionTop + sectionHeight;

    // Get the button's height for precise positioning
    const ctaHeight = ctaContainer.offsetHeight;

    // Calculate the distance from the top of the viewport to the bottom of the section
    const distanceFromBottom = sectionBottom - (scrollTop + viewportHeight);

    // When the viewport is within the section and the button hasn't reached the bottom of the section
    if (scrollTop + viewportHeight >= sectionTop + 80 && distanceFromBottom > 0) {
        ctaContainer.style.position = 'fixed';
        ctaContainer.style.bottom = '5px';
        ctaContainer.style.top = 'auto';
    }
    // When the viewport has scrolled past the bottom of the section, stop the button at the bottom
    else if (distanceFromBottom <= 0) {
        ctaContainer.style.position = 'absolute';
        ctaContainer.style.top = `${sectionHeight - ctaHeight}px`;
        ctaContainer.style.bottom = 'auto';
    }
    // Reset the button to its initial position if the section is above the viewport
    else if (scrollTop + viewportHeight < sectionTop + 80) {
        ctaContainer.style.position = 'absolute';
        ctaContainer.style.top = '20px';
        ctaContainer.style.bottom = 'auto';
    }
}

export function serviceCardsFiltering() {
    const filterButtons = document.querySelectorAll('.filter-btn');

    // Attach event listeners to the filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Check if the clicked button is already active
            if (button.classList.contains('active')) {
                return; // Do nothing if the filter is already selected
            }

            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to the clicked button
            button.classList.add('active');

            // Apply the filter with animations
            const filter = button.getAttribute('data-filter');
            applyFilter(filter);
        });
    });
}

export function revealTextWithTypingEffect() {
    document.querySelectorAll('.reveal-btn').forEach(button => {
        button.addEventListener('click', function () {
            const hiddenText = this.previousElementSibling;
            const typingDots = hiddenText.previousElementSibling;
            const fullText = hiddenText.getAttribute('data-text');
            let charIndex = 0;

            // Hide the button and show the typing dots
            this.style.display = 'none';
            typingDots.style.display = 'inline-block';

            // Simulate typing delay before revealing text
            setTimeout(() => {
                typingDots.style.display = 'none';
                hiddenText.style.display = 'inline';

                const typeText = () => {
                    if (charIndex < fullText.length) {
                        hiddenText.textContent += fullText.charAt(charIndex);
                        charIndex++;
                        setTimeout(typeText, 30); // Adjust typing speed here
                    }
                };

                typeText();
            }, 1500); // Duration of the typing dots animation before revealing text
        });
    });
}

export function teamCardsClickToggle() {
    // Toggle hover effect on the card when clicked
    document.querySelectorAll('.team-card').forEach(card => {
        card.addEventListener('click', function (e) {
            // Prevent the event from bubbling up and closing the hover effect immediately
            e.stopPropagation();

            // Check if the clicked card already has the hover-effect class
            if (this.classList.contains('hover-effect')) {
                // If it already has the class, remove it (untoggle)
                this.classList.remove('hover-effect');
            } else {
                // Remove the hover-effect class from all other cards
                document.querySelectorAll('.team-card').forEach(c => c.classList.remove('hover-effect'));

                // Add the hover-effect class to the clicked card
                this.classList.add('hover-effect');
            }
        });
    });

    // Remove hover effect when clicking outside a card
    document.addEventListener('click', function () {
        // Remove hover-effect class from all cards
        document.querySelectorAll('.team-card').forEach(c => c.classList.remove('hover-effect'));
    });
}

export function scrollToSectionWithOffset() {
    document.querySelectorAll('.navbar-link').forEach(link => {
        link.addEventListener('click', function (event) {
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            // Customize the offset for each section if needed
            let offset = 0;
            if (targetId === 'services') {
                offset = -80;
            } else if (targetId === 'team') {
                offset = -120;
            }

            // Scroll to the target element with offset
            window.scrollTo({
                top: targetElement.offsetTop + offset,
                behavior: 'smooth'
            });
        });
    });
}

export function applySafariStyles() {
    if (navigator.userAgent.includes('Safari') && !navigator.userAgent.includes('Chrome')) {
        document.querySelector('.hero-title').style.color = '#f2f2f2';
        document.querySelector('.hero-text').style.color = '#cecece';
        document.querySelector('.blob').style.display = 'none';
    }
}

function fadeOutAndHide(element, duration = 300) {
    element.style.transition = `opacity ${duration}ms ease, transform ${duration}ms ease`;
    element.style.opacity = 0;
    element.style.transform = 'translateY(20px)';

    setTimeout(() => {
        element.style.display = 'none';
    }, duration);
}

function fadeInAndShow(element, duration = 300) {
    element.style.display = 'block';
    element.style.opacity = 0;
    element.style.transform = 'translateY(20px)';

    setTimeout(() => {
        element.style.transition = `opacity ${duration}ms ease, transform ${duration}ms ease`;
        element.style.opacity = 1;
        element.style.transform = 'translateY(0)';  // Move to the original position
    }, 10);  // Small delay to ensure the transition occurs
}

function applyFilter(filter) {
    const serviceItems = document.querySelectorAll('.service-item');
    // First, fade out all items
    serviceItems.forEach(item => {
        fadeOutAndHide(item);
    });

    // After fade out is complete, fade in the matching items
    setTimeout(() => {
        serviceItems.forEach(item => {
            if (filter === 'all' || item.getAttribute('data-category') === filter) {
                fadeInAndShow(item);  // Fade-in and move-up effect for matching items
            }
        });
        updateCtaButtonPosition(); // Update CTA btn position based on the amount of elements 
    }, 300);  // Duration should match the fadeOutAndHide duration
}