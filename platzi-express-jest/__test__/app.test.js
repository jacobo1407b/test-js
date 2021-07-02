const request = require('supertest');

const app = require('../app');

describe('Probar express',()=>{
    test('Responder con get',(done)=>{
        request(app).get('/').then(res=>{
            expect(res.statusCode).toBe(200);
            done();
        })
    })
})