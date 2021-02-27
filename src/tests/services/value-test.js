const test = require('ava')
const rewire = require('rewire')
const value = rewire('../../services/value')
const { AlreadyExistsError } = require('../../error/already-exists')

test('getAllValues should return all values from processed number-value map', t => {
    const resetValues = value.__set__('values', {a:1, b:2, c:3})
    t.deepEqual(value.getAllValues(), [1,2,3])
    resetValues()
})
test('getAllValues should return an empty array if number-value map has no values', t => {
    const resetValues = value.__set__('values', {})
    t.deepEqual(value.getAllValues(), [])
    resetValues()
})

test('getValue should throw RangeError if the number is not present in the number-value map', t => {
    const resetValues = value.__set__('values', {})
    const error = t.throws(() => value.getValue(1), {instanceOf: RangeError})
    t.is(error.message, 'No value found for 1');
    resetValues()
})
test('getValue should return the value found for arg number in the number-value map', t => {
    const resetValues = value.__set__('values', {12:'expected'})
    t.is(value.getValue(12), 'expected');
    resetValues()
})

test('addValue should throw AlreadyExistsError if the number is present in the number-value map', t => {
    const resetValues = value.__set__('values', {12:'value'})
    const error = t.throws(() => value.addValue(12), {instanceOf: AlreadyExistsError})
    resetValues()
})
test('addValue should add proper number-value entry if the number is not present ', t => {
    const testValues = {}
    const resetValues = value.__set__('values', testValues)
    const resetNumberTpye = value.__set__('numberTpye', {getNumberValue: () => 'expected'})
    t.is(value.addValue(12), 'expected')
    t.deepEqual(testValues, {12:'expected'})
    resetValues()
})