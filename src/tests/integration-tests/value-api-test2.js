const test = require('ava')
const request = require('supertest')
const express = require('express')

let app = require('../../app')

// moved to a different file in order to achieve tests isolation
test('GET /value should return an empty array if no values added', async t => {
    const response = await request(app)
        .get('/value')
        .send()
    t.is(response.status, 200)
    // commented 
    t.deepEqual(response.body, [])
})
