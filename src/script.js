'use strict';
import { header } from './header.js';
import {
    astronautMovement,
    rocketCtaAnimation,
    planetsRotationAnimation,
    serviceCardsAnimation,
    ufoEasterEggAnimation
} from './animations.js';
import {
    addDelayForHeroCta,
    serviceCardsFiltering,
    updateCtaButtonPosition,
    revealTextWithTypingEffect
} from './functionalities.js'

const addEventOnElem = function (elem, type, callback) {
    if (elem.length > 1) {
        for (let i = 0; i < elem.length; i++) {
            elem[i].addEventListener(type, callback);
        }
    }
    else {
        elem.addEventListener(type, callback);
    }
}
header(addEventOnElem);

// Functionalities
addDelayForHeroCta();
serviceCardsFiltering();
window.addEventListener('scroll', updateCtaButtonPosition);
window.addEventListener('load', updateCtaButtonPosition);
revealTextWithTypingEffect();

// Animations
astronautMovement();
rocketCtaAnimation();
planetsRotationAnimation();
serviceCardsAnimation();
ufoEasterEggAnimation();
















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