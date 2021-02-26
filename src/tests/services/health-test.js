const test = require('ava')
const rewire = require('rewire')

const health = rewire('../../services/health')
const originalCheckService = health.__get__("checkService")

test.after.always('cleanup', t => {
	health.__set__("checkService", originalCheckService)
});

test('health service check() should resolve with {status:"OK"} when dependencies are ok', async t => {
    const revert = health.__set__("checkService", () => {
        return new Promise((resolve, reject) => resolve())
    });
    return health.check()
        .then(data => {
            t.deepEqual(data, {status:'OK'})
        })
        .catch(err => {
            t.fail(err)
        })
})

test('health service check() should reject when dependencies are not ok', async t => {
    const revert = health.__set__("checkService", () => {
        return new Promise((resolve, reject) => reject(new Error('error')))
    });
    return t.throwsAsync(health.check());
})
