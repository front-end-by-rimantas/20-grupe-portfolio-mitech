import { findElementDOM } from '../../util/findElementDOM.js';
import { isValidCaseStudyData } from './isValidCaseStudyData.js';
import { Validator } from '../Validator/Validator.js';

export function caseStudyCards(cardsData, selector) {
    const DOM = findElementDOM(selector);
    if (!DOM) {
        throw new Error('Invalid element selector!');
    }
    if (!Validator.isArray(cardsData)) {
        throw new Error('Cards data must be an array of objects!');
    }
    let HTML = '';
    for (const cardData of cardsData) {
        HTML += caseStudyCard(cardData);
    }

    // paskui rebderinimas bus kitur, sita funkcija tik grazins elementus
    DOM.innerHTML = HTML;
}

export function caseStudyCard(cardData) {
    return isValidCaseStudyData(cardData)
        ? `
  <a href="#" class="case-study-card">
    <img
        class="case-study__img"
        src=${cardData.imgURL}
        alt="img"
    />
    <div class="case-study__content">
        <h4 class="case-study__title">${cardData.title}</h4>
        <h5 class="case-study__subtitle">${cardData.subtitle}</h5>
        <p class="case-study__text">${cardData.text}</p>
    </div>
    <div class="case-study__link-container">
        <p href="#">View case study ➜</p>
    </div>
</a>`
        : '';
}
