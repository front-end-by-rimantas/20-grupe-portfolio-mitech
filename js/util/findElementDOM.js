import { Validator } from '../components/Validator/Validator.js';

/**
 *
 * @param {string} selector - DOM element selector
 */

export function findElementDOM(selector) {
    if (Validator.isEmptyString(selector)) {
        return null;
    }
    return document.querySelector(selector);
}
