import {callbackMe} from '../callbacks'
describe('Prueba de callback', () => {
    test('callback', (done) => {
        function otherCallback(data){
            expect(data).toBe('Hola JS')
            done()
        }
        callbackMe(otherCallback)
    });
    
});
