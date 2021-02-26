const test = require('ava')

const config = require('../../config')

test('config should include externalServices properties', t => {
    t.assert(config.hasOwnProperty('externalServices'))
    t.assert(config.externalServices.hasOwnProperty('healthDependencyUrl'))
})