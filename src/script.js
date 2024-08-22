'use strict';
import { header } from './header.js';
import { accordion } from './accordion.js';
import {
    astronautMovement,
    rocketCtaAnimation,
    planetsRotationAnimation,
    serviceCardsAnimation
} from './animations.js';

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
accordion(addEventOnElem);

// Hero cta delay
document.getElementById('hero-cta').addEventListener('click', function () {
    setTimeout(function () {
        document.getElementById('about').scrollIntoView();
    }, 800);
});

// Animations
astronautMovement();
rocketCtaAnimation();
planetsRotationAnimation();
serviceCardsAnimation();

