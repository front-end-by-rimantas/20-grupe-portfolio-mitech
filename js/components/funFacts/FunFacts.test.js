import {FunFacts} from './FunFacts.js';

describe('Tikrinami parametrai', () => {
    test('Nevalidu kai duodamas be parametru', () => {
        const funFacts = new FunFacts();
        expect(funFacts.init()).toBeFalsy();
    })
})