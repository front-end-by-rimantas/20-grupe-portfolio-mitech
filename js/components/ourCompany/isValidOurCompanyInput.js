function isValidOurCompanyInput(selector, data) {
    if (typeof selector !== 'string' ||
        selector === '') {
        return false;
}

    if (!Array.isArray(data) || 
        data.length === 0) {
        return false;
    }

return true;
}

export { isValidOurCompanyInput }