'use strict';
import { header } from './header.js';
import {
    astronautMovement,
    rocketCtaAnimation,
    planetsRotationAnimation,
    serviceCardsAnimation
} from './animations.js';
import {
    addDelayForHeroCta,
    serviceCardsFiltering,
    updateCtaButtonPosition
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

// Animations
astronautMovement();
rocketCtaAnimation();
planetsRotationAnimation();
serviceCardsAnimation();
