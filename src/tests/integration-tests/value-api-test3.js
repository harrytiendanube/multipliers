const test = require('ava')
const request = require('supertest')
const express = require('express')

let app = require('../../app')

// moved to a different file in order to achieve tests isolation
test('GET /value should return all added values', async t => {
    await request(app)
        .post('/value')
        .send({number:1})
    await request(app)
        .post('/value')
        .send({number:2})
    await request(app)
        .post('/value')
        .send({number:3})
    const response = await request(app)
        .get('/value')
        .send()
    t.is(response.status, 200)
    t.deepEqual(response.body, [1,2,'Type 1'])
})
