const test = require('ava')
const rewire = require('rewire')
const nock = require('nock')

const config = require('../../config')
const health = rewire('../../services/health')
const originalCheckService = health.__get__("checkService")

test.after.always('cleanup', t => {
    nock.cleanAll()
	health.__set__("checkService", originalCheckService)
})

test('check() should resolve with {status:"OK"} when dependencies are ok', async t => {
    const revert = health.__set__("checkService", () => {
        return new Promise((resolve, reject) => resolve())
    })
    return health.check()
        .then(data => {
            t.deepEqual(data, {status:'OK'})
        })
        .catch(err => {
            t.fail(err)
        })
})

test('check() should reject when dependencies are not ok', async t => {
    const revert = health.__set__("checkService", () => {
        return new Promise((resolve, reject) => reject(new Error('error')))
    })
    return t.throwsAsync(health.check())
})

test('checkService() should resolve when dependency fetch is OK', async t => {
    nock(config.externalServices.healthDependencyUrl)
        .get('/')
        .reply(200, 'OK')

    return t.notThrowsAsync(originalCheckService())
})

test('checkService() should reject with dependency name and details when dependency fetch returns status 500', async t => {
    nock(config.externalServices.healthDependencyUrl)
        .get('/')
        .reply(500, 'SOME MOCKED ERROR')
    return originalCheckService().then(() => t.fail('Rejection expected but resolved instead'))
        .catch(err => {
            // assert
            t.deepEqual(err.dependency, 'service')
            t.deepEqual(err.details, '500')
            t.deepEqual(err.status, 'failing dependency')
        })
})