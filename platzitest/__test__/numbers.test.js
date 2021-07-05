import {numbers} from '../numbers';

describe('comparar numeros', () => {
    test('Mator que', ()=>{
        expect(numbers(2,2)).toBeGreaterThan(3)
    })
    test('Mayor que o igual', () => {
        expect(numbers(2,2)).toBeGreaterThanOrEqual(4)
    })
    
});
