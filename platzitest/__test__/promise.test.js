import {getDataFromApi} from '../promise';

 describe('Probando promesas', () => {
     test('Realizar peticion a API', (done) => {
         const api = 'https://rickandmortyapi.com/api/character/'
         getDataFromApi(api).then(data=>{
             expect(data.results.length).toBeGreaterThan(0);
             done()
         })
     });
     
 });
 