class NaviBar {
constructor (params) {
    this.structure = params.structure;
    this.selector= params.selector;
    this.DOM = null;

}

init() {
    if (!this.isValidselector()){
        return false;
    }

    this.render()
}

isHomePage(title) {
    return title === 'Home';
}

generateHTML(item){

const active = this.isHomePage(item.title) ? 'active' : '';
return `<a href="${item.href}" class="${active}">${item.title}</a>`;
}

isValidselector(){
    if( typeof this.selector !== 'string'){
        return false;
    }
        const DOM = document.querySelector(this.selector);
        if ( !DOM) {
            return false;
        }
        this.DOM = DOM;
        

    return true;
}




    render() {
        let HTML = '';
        for (const item of this.structure) {
            HTML += this.generateHTML(item);
        }

    this.DOM.innerHTML= HTML;

    
}

}

export { NaviBar } 