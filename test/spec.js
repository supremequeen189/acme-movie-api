const { expect } = require('chai');
const { syncAndSeed } = require('../db');

const app = require('supertest')(require('../app'));

describe('Routes', () => {
    beforeEach(() => syncAndSeed());

    describe('GET /', () => {
        it ('show information about the api', async() => {
            const response = await app.get('/');
            expect(response.status).to.equal(200); 
        })
    })

    describe('GET /api/movies', () => {
        it ('show all movies', async() => {
            const response = await app.get('/api/movies');
            expect(response.status).to.equal(200); 
        })
    })

    describe('GET /api/actors', () => {
        it ('show all actors', async() => {
            const response = await app.get('/api/actors');
            expect(response.status).to.equal(200); 
        })
    })
})

describe('test test', () => {
        describe('GET /', () => {
            it ('you have a test!', async() => {
        
            })
        })
})