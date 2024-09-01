export function astronautMovement() {
    document.addEventListener('mousemove', function (e) {
        const element = document.getElementById('astronautElement');
        const moveX = (e.clientX - window.innerWidth / 2) * 0.04;
        const moveY = (e.clientY - window.innerHeight / 2) * 0.06;
        const rotateAngle = (e.clientX / window.innerWidth) * 17;

        element.style.transform = `translate(${moveX}px, ${moveY}px) rotate(${rotateAngle}deg)`;
    });
}

export function rocketCtaAnimation() {
    const ctaButton = document.querySelector('.hero-cta');
    ctaButton.addEventListener('click', () => {
        const rocketIcon = document.querySelector('.hero-cta img');
        rocketIcon.style.transform = 'translateY(-10px)';
        setTimeout(() => {
            rocketIcon.style.transform = '';
        }, 300);
    });
}

export function planetsRotationAnimation() {
    document.addEventListener('scroll', function () {
        let scrollPosition = window.scrollY;


        let speed = window.innerWidth <= 830 ? 0.007 : 0.005;
        let radius = window.innerWidth <= 830 ? 5 : 15;

        // Calculate new positions for each planet
        let planet1 = document.getElementById('planet_1');
        let planet2 = document.getElementById('planet_2');
        let planet3 = document.getElementById('planet_3');
        let planet4 = document.getElementById('planet_4');
        let planet5 = document.getElementById('planet_5');
        let planet6 = document.getElementById('planet_6');

        planet1.style.transform = `translate(${Math.cos(scrollPosition * speed) * radius}px, ${Math.sin(scrollPosition * speed) * radius}px)`;
        planet2.style.transform = `translate(${Math.sin(scrollPosition * speed) * radius}px, ${Math.cos(scrollPosition * speed) * radius}px)`;
        planet3.style.transform = `translate(${Math.cos(scrollPosition * speed) * -radius}px, ${Math.sin(scrollPosition * speed) * -radius}px)`;
        planet4.style.transform = `translate(${Math.sin(scrollPosition * speed) * -radius}px, ${Math.cos(scrollPosition * speed) * -radius}px)`;
        planet5.style.transform = `translate(${Math.cos(scrollPosition * speed) * (radius + 20)}px, ${Math.sin(scrollPosition * speed) * (radius + 20)}px)`;
        planet6.style.transform = `translate(${Math.sin(scrollPosition * speed) * (radius + 20)}px, ${Math.cos(scrollPosition * speed) * (radius + 20)}px)`;
    });
}

export function serviceCardsAnimation() {
    const serviceItems = document.querySelectorAll('.service-item');

    serviceItems.forEach(item => {
        item.addEventListener('click', () => {
            const card = item.querySelector('.card');

            card.classList.toggle('flipped');

            if (card.classList.contains('active')) {
                card.classList.remove('active');
            } else {
                // Remove 'active' class from all other cards
                document.querySelectorAll('.service-item .card').forEach(otherCard => {
                    if (otherCard !== card) {
                        otherCard.classList.remove('active');
                        otherCard.classList.remove('flipped');
                    }
                });
                card.classList.add('active');
            }
        });
    });
}

export function ufoEasterEggAnimation() {
    let isAnimating = false;
    document.querySelector('.planet-icon').addEventListener('click', function () {
        const ufo = document.querySelector('.ufo-icon');

        if (isAnimating) return; // Prevent clicks during animation

        isAnimating = true;
        ufo.style.display = 'block';

        // Trigger reflow to ensure the opacity transition works
        void ufo.offsetWidth; // This forces a reflow, allowing the transition to trigger

        ufo.classList.add('revealed');

        // After the animation ends, fade out the UFO and reset the state
        ufo.addEventListener('animationend', function () {
            ufo.classList.remove('revealed');
            ufo.classList.add('hidden');

            // Wait for the fade-out transition to complete before hiding the UFO
            setTimeout(() => {
                ufo.style.display = 'none';
                ufo.classList.remove('hidden');
                isAnimating = false;
            }, 500); // Match this duration with the CSS transition time
        }, { once: true });
    });
}