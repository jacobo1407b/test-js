import {arrayColor,arrayFruit} from '../array'

describe('Comprobar que existe un elemento', () => {
    test('should element platano', () => {
        expect(arrayFruit()).toContain('platano')
    })
    test('should not platano', () => {
        expect(arrayFruit()).not.toContain('banana')
    })

    test('should length', () => {
      expect(arrayFruit()).toHaveLength(4);  
    })
    
    
});
