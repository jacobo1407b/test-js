import {getDataFromApi} from '../promise';

describe('test async await ', () => {
    test('Peticion a API', async () => {
        const api = 'https://rickandmortyapi.com/api/character/';
        await  getDataFromApi(api).then(data=>{
            expect(data.results.length).toBeGreaterThan(0);
        })
    });
    
});
