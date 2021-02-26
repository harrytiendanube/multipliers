const test = require('ava')

const health = require('../../services/health')

test('health service returns {status:"OK"}', async t => {
    return health.check().then(data => {
        t.deepEqual(data, {status:'OK'})
    })
})