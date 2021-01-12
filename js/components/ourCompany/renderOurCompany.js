function renderOurCompany() {
    // input validation


    //kuur bus randama
    const DOM = document.querySelector(selection);
    if(!DOM) {
        return false;
    }

    //logic
    let HTML = '';

    for (let item of data) {
        if(!isValidOurCompanyItem(item)) {
            continue;
        }
        HTML += `<a href="#" class="list-member">
                    <div class="list-number">
                    <div>${item.number}</div>
                    </div>
                    <div class="faq">
                    <div class="question">${item.title}</div>
                    </div>
                </a>`
    }

    //post logic validation
    if(HTML === '') {
        return false;
    }

    // return result
    DOM.innerHTML = HTML;
    return true;
}

export {renderOurCompany}