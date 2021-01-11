import { FunFacts } from './FunFacts.js';
import { isValidFunFactsItem } from './isValidFunFactsItem.js';

describe('Tikrinami parametrai', () => {
    test('Nevalidu kai duodama be parametru', () => {
        const funFacts = new FunFacts();
        expect(isValidFunFactsItem()).toBeFalsy();
    })
})