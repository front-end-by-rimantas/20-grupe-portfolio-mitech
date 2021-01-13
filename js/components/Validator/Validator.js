export class Validator {
    static isString(text) {
        return typeof text === 'string';
    }

    static isEmptyString(text) {
        return !(Validator.isString(text) && text.trim());
    }

    static isObject(obj) {
        return typeof obj === 'object' && obj !== null && !Array.isArray(obj);
    }

    static isArray(arr) {
        return Array.isArray(arr);
    }
}
