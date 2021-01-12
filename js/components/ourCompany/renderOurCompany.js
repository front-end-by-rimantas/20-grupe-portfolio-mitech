import {isValidOurCompanyInput} from './isValidOurCompanyInput.js';
import {isValidOurCompanyItem} from './isValidOurCompanyItem.js';

function renderOurCompany(selector, data) {

    if (!isValidOurCompanyInput(selector, data)) {
    return false;
    }

    const DOM = document.querySelector(selector);
    if(!DOM) {
        return false;
    }

    let HTML = '';

    for(let item of data) {
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
                </a>`;
    }

    if(HTML === '') {
        return false;
    }

    DOM.innerHTML = HTML;
    return true;
    
function formatNumber(number) {
      if(number < 10)
        return '0' + number;
    } 
}
 
export {renderOurCompany}