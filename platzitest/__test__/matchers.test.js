describe('Comparadores comunes', () => {
    const user = {
        name:"jacobo",
        lastname:"hernandez"
    }
    const user2 = {
        name:"jacobo",
        lastname:"hernandez"
    }

    test('igualdad de elementos', () => {
        expect(user).toEqual(user2)
    })
    
});
