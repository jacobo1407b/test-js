//despues la prueba

afterEach(()=>console.log('despues de la prueba'))
afterAll(()=>console.log('Despues de todas las pruebas'))

//antes
beforeAll(()=>console.log('Antes de todas las pruebas'))
beforeEach(()=>console.log('Antes de cada prueba'))

describe('preparar antes de ejecutar', () => {
   test('es verdadero', () => {
       expect(true).toBeTruthy();
   });
    
});
