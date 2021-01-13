import { Validator } from '../Validator/Validator.js';

/**
 *
 * @param {{title:string, subtitle:string, text:string, imgURL:string}} data case study card data obj
 */
export function isValidCaseStudyData(data) {
    if (!Validator.isObject(data)) {
        return false;
    }

    return (
        !Validator.isEmptyString(data.title) &&
        !Validator.isEmptyString(data.subtitle) &&
        !Validator.isEmptyString(data.text) &&
        !Validator.isEmptyString(data.imgURL)
    );
}
