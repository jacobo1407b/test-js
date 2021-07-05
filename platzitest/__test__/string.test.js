describe('comprobar string', () => {
    const text = "un bonito texto"
    test('should contener en el texto algo', () => {
        expect(text).toMatch(/bonito/);
    })
    test('should not contain text', () => {
        expect(text).not.toMatch(/es/)
    })
    test('should length', () => {
        expect(text).toHaveLength(15);
    })
    
});
