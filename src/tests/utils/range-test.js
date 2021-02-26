const test = require('ava')
const range = require('../../utils/range')

test('range goes from 1 to 100', t  => {
    const createdRange = range.createRange()
    t.is(createdRange.length, 100)
    t.is(createdRange[0], 1)
    t.is(createdRange[99], 100)
})