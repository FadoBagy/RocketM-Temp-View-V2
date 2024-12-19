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
    scrollToSectionWithOffset,
    applySafariStyles,
    initializeFormSubmission,
    handleBgTextMovement,
    cookiesSetUp
} from './functionalities.js'
import {
    setupNavigationTracking,
    setupServiceCardTracking,
    setupHeroButtonTracking,
    setupServicesCTAButtonTracking,
    setupContactFormTracking,
    setupContactFormFieldTracking,
    setupScrollDepthTracking
} from './analytics.js';

const addEventOnElem = function (elem, type, callback) {
    if (!elem) {
        return;
    }

    if (elem.length > 1) {
        for (let i = 0; i < elem.length; i++) {
            if (elem[i] instanceof HTMLElement || elem[i] === window) {
                elem[i].addEventListener(type, callback);
            }
        }
    } else {
        if (elem instanceof HTMLElement || elem === window) {
            elem.addEventListener(type, callback);
        }
    }
};
header(addEventOnElem);

const section = document.querySelector('main section');
if (!section.classList.contains('tnc-section') && !section.classList.contains('privacy-policy-section')) {
    // Functionalities
    cookiesSetUp();
    addDelayForHeroCta();
    serviceCardsFiltering();
    window.addEventListener('scroll', updateCtaButtonPosition);
    window.addEventListener('load', updateCtaButtonPosition);
    revealTextWithTypingEffect();
    teamCardsClickToggle();
    scrollToSectionWithOffset();
    applySafariStyles();
    initializeFormSubmission();
    handleBgTextMovement();

    // Animations
    astronautMovement();
    rocketCtaAnimation();
    planetsRotationAnimation();
    serviceCardsAnimation();
    ufoEasterEggAnimation();
    planetEasterEggAnimation();

    // Google Analytics
    setupNavigationTracking();
    setupServiceCardTracking();
    setupHeroButtonTracking();
    setupServicesCTAButtonTracking();
    setupContactFormTracking();
    setupContactFormFieldTracking();
    setupScrollDepthTracking();
}