import {FunFacts} from './FunFacts.js';

describe('Tikrinami parametrai', () => {
    test('Nevalidu kai duodamas be parametru', () => {
        const funFacts = new FunFacts();
        expect(funFacts.init()).toBeFalsy();
    })
    test('Nevalidu kai duodamas skaicius', () => {
        const funFacts = new FunFacts();
        expect(funFacts.init(240)).toBeFalsy();
    })
    test('Nevalidu kai duodama logine reiksme "true"', () => {
        const funFacts = new FunFacts();
        expect(funFacts.init(true)).toBeFalsy();
    })
    test('Nevalidu kai duodamas logine reiksme "false"', () => {
        const funFacts = new FunFacts();
        expect(funFacts.init(false)).toBeFalsy();
    })
    test('Nevalidu kai duodamas tekstas', () => {
        const funFacts = new FunFacts();
        expect(funFacts.init('gvgvhvh')).toBeFalsy();
    })
    test('Nevalidu kai duodamas tuscias tekstas', () => {
        const funFacts = new FunFacts();
        expect(funFacts.init('')).toBeFalsy();
    })
})

