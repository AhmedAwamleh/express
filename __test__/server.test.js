'use strict'

const supertest = require('supertest')

const server = require('../server')
const request = supertest(server.app)

describe('API server', () => {
    it('home page works', async () => {
        const res = await request.get('/');
        expect(res.status).toEqual(200);
        expect(res.text).toEqual("hello world")
    })


})
describe('post person', () => {
    it('respond with Age+5', async () => {
        const res = await request.post('/person').send('age=30');
        expect(function (res) {

            res.body.age = res.body.age + 5;


        }
        )

    });
})
