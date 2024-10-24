'use strict';
import { header } from './header.js';
import {
    astronautMovement,
    rocketCtaAnimation,
    planetsRotationAnimation,
    serviceCardsAnimation,
    ufoEasterEggAnimation,
    planetEasterEggAnimation
} from './animations.js';
import {
    addDelayForHeroCta,
    serviceCardsFiltering,
    updateCtaButtonPosition,
    revealTextWithTypingEffect,
    teamCardsClickToggle,
    scrollToSectionWithOffset
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
teamCardsClickToggle();
scrollToSectionWithOffset();

// Animations
astronautMovement();
rocketCtaAnimation();
planetsRotationAnimation();
serviceCardsAnimation();
ufoEasterEggAnimation();
planetEasterEggAnimation();


if (navigator.userAgent.includes('Safari') && !navigator.userAgent.includes('Chrome')) {
    document.querySelector('.hero-title').style.color = '#f2f2f2';
    document.querySelector('.hero-text').style.color = '#cecece';
}
