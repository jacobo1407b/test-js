import {getCharacter} from '../snapshot';
import rick from '../rick.json';


describe('es hora de las instantaneas', () => {
    test('Snapshot', () => {
       expect(getCharacter(rick)).toMatchSnapshot(); 
    });
});

