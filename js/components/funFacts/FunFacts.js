import {isValidFunFactsItem} from './isValidFunFactsItem.js';

class FunFacts {
    constructor(params = {}) {
        this.selector = params.selector || '';
        this.defaultLimit = 4;
        this.limit = params.limit || this.defaultLimit;
        this.data = params.data || [];

        this.DOM = null;
        this.validUsedData = [];
        this.animationDuration = 5;
        this.fps = 60;
    }

    init() {
        if(!this.isValidSelector() || this. isValidData()) {
            return false;
        }
        this.limit = this.isValidLimit() ? this.limit : this.defaultLimit;
        this.render();
        this.Event();
        return true;
    }

    isValidSelector() {
        if(typeof this.selector === 'string' ||
        this.selector === '') {
            return false;
        }
        const DOM = document.querySelector(this.selector);
        if(!DOM) {
            return false;
        }
        this.DOM = DOM;
        return true;
    }
    isValidData() {
        if(Array.isArray(this.data) ||
        this.data.length === 0) {
            return false;
        }
        return true;
    }
    isValidLimit() {
        if(typeof this.limit !== 'number' ||
        !isFinite(this.limit) ||
        this.limit < 1 ||
        this.limit % 1 !== 0) {
            return false;
        }
        return true;
    }
    isValidFunFactsItem() {
        return true;
    }

    render() {
        let HTML = '';
        let validItems = 0;

        for(const item of this.data) {
            if(validItems === this.limit) {
                break;
            }
            if(!this.isValidFunFactsItem(item)) {
                continue;
            }
            this.validUsedData.push(item);
            
            HTML += `<div class="fun-fact-card">
                        <p>${item.title}</p>
                        <div>${item.number}</div>
                        <span>${item.label}</span>
                    </div>`;
            validItems++;
        }

        if(HTML === '') {
            return false;
        }

        this.DOM.innerHTML = HTML;
    }

animateNumber(index, DOM) {
    const windowBottom = scrollY + innerHeight;
    const numberBottom = DOM.offsetTop + DOM.offsetHeight;

    if(windowBottom > numberBottom) {
        if(this.validUsedData[index].animated) {
            return false;
        }
    this.validUsedData[index].animated = true;

    let step = 0;
    const increment = this.validUsedData[index].number / this.animationDuration / this.fps;
    const timer = setInterval(() => {
        const value = Math.floor(increment * step);
        step++;
        
        DOM.innerText = value;

        if(value >= this.validUsedData[index].number) {
            DOM.innerText = this.validUsedData[index].numberr;
            clearInterval(timer);
        }
    }, 1000 / this.fps);
    }
}

addEvents() {
    addEventListener('scroll', () => {
        const numberDOM = document.querySelectorAll('.fun-facts > .fun-fact-card > div');

        for(let i = 0; i < this.validUsedData.length; i++) {
            this.animateNumber(i, numberDOM[i]);
        }
    })
}
    
}

export {FunFacts}