const test = require('ava')

const config = require('../../config')

test('config should include logger properties', t => {
    t.assert(config.hasOwnProperty('logger'))
    t.assert(config.logger.hasOwnProperty('level'))
    t.assert(config.logger.hasOwnProperty('format'))
})