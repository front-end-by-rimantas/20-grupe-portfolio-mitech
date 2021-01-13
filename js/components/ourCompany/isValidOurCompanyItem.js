function isValidOurCompanyItem(item) {
    if(typeof item !== 'object') {
        return false;
    }
    if( typeof item.number !== 'number' ||
    item.number < 1 ||
    item.number % 1 !== 0) {
        return false;
    }
    if(typeof item.title !== 'string' ||
    item.title === '') {
        return false;
    }
    return true;
}

export {isValidOurCompanyItem}