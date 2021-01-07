export function caseStudyCards(cardsData, selector) {
    const DOM = document.querySelector(selector);
    let HTML = '';
    console.log(cardsData);
    for (const cardData of cardsData) {
        HTML += caseStudyCard(cardData);
        // console.log(cardData);
    }
    DOM.innerHTML = HTML;
    console.log(DOM.innerHTML);
    console.log(HTML);
}

export function caseStudyCard(cardData) {
    return `
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
        <p href="#">View case study -></p>
    </div>
</a>`;
}
