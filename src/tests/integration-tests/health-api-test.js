const test = require('ava')
const request = require('supertest')
const express = require('express')
const nock = require('nock')
const config = require('../../config')
const app = require('../../app')

test.after.always('cleanup', t => {
    nock.cleanAll()
})

test('Health API should return 200 when dependency is alive', async t => {
    nock(config.externalServices.healthDependencyUrl)
        .get('/')
        .reply(200, 'OK')

    const response = await request(app)
        .get('/health')
        .send();
    t.is(response.status, 200);
})

test('Health API should return 500 when dependency is not alive', async t => {
    nock(config.externalServices.healthDependencyUrl)
        .get('/')
        .reply(404)

    const response = await request(app)
        .get('/health')
        .send();
    t.is(response.status, 500);
})

test('Health API should return 500 when dependency is failing', async t => {
    nock(config.externalServices.healthDependencyUrl)
        .get('/')
        .reply(500)

    const response = await request(app)
        .get('/health')
        .send();
    t.is(response.status, 500);
})