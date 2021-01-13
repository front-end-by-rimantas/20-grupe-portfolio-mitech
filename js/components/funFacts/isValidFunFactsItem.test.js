import { FunFacts } from './FunFacts.js';
import { isValidFunFactsItem } from './isValidFunFactsItem.js';

describe('Tikrinami parametrai', () => {
    test('Nevalidu kai duodama be parametru', () => {
        const funFacts = new FunFacts();
        expect(isValidFunFactsItem()).toBeFalsy();
    })
    test('Nevalidu kai duodamas skaicius', () => {
        const funFacts = new FunFacts();
        expect(isValidFunFactsItem(562)).toBeFalsy();
    })
    test('Nevalidu kai duodamas sarasas', () => {
        const funFacts = new FunFacts();
        expect(isValidFunFactsItem([])).toBeFalsy();
    })
    test('Nevalidu kai duodamas boolean', () => {
        const funFacts = new FunFacts();
        expect(isValidFunFactsItem(true)).toBeFalsy();
    })
    test('Nevalidu kai duodamas boolean', () => {
        const funFacts = new FunFacts();
        expect(isValidFunFactsItem(false)).toBeFalsy();
    })
    test('Nevalidu kai duodamas tuscias objektas', () => {
        const funFacts = new FunFacts();
        expect(isValidFunFactsItem({})).toBeFalsy();
    })
})
