const test = require('ava')
const rewire = require('rewire')

const numberTpye = rewire('../../utils/number-type')

test('getNumberValue dado el numero 1 debe devolver el valor 1', t => {
    const value = numberTpye.getNumberValue(1)
    t.is(value, 1)
})
test('getNumberValue dado el numero 4 debe devolver el valor 4', t => {
    const value = numberTpye.getNumberValue(4)
    t.is(value, 4)
})
test('getNumberValue dado el numero 16 debe devolver el valor 16', t => {
    const value = numberTpye.getNumberValue(16)
    t.is(value, 16)
})
test('getNumberValue dado el numero 9949 debe devolver el valor 9949', t => {
    const value = numberTpye.getNumberValue(9949)
    t.is(value, 9949)
})
test('getNumberValue dado el numero 3 debe devolver el valor Type 1', t => {
    const value = numberTpye.getNumberValue(3)
    t.is(value, 'Type 1')
})
test('getNumberValue dado el numero 6 debe devolver el valor Type 1', t => {
    const value = numberTpye.getNumberValue(6)
    t.is(value, 'Type 1')
})
test('getNumberValue dado el numero 99 debe devolver el valor Type 1', t => {
    const value = numberTpye.getNumberValue(99)
    t.is(value, 'Type 1')
})
test('getNumberValue dado el numero 5 debe devolver el valor Type 2', t => {
    const value = numberTpye.getNumberValue(5)
    t.is(value, 'Type 2')
})
test('getNumberValue dado el numero 50 debe devolver el valor Type 2', t => {
    const value = numberTpye.getNumberValue(50)
    t.is(value, 'Type 2')
})
test('getNumberValue dado el numero 505 debe devolver el valor Type 2', t => {
    const value = numberTpye.getNumberValue(505)
    t.is(value, 'Type 2')
})
test('getNumberValue dado el numero 15 debe devolver el valor Type 3', t => {
    const value = numberTpye.getNumberValue(15)
    t.is(value, 'Type 3')
})
test('getNumberValue dado el numero 30 debe devolver el valor Type 3', t => {
    const value = numberTpye.getNumberValue(30)
    t.is(value, 'Type 3')
})
test('getNumberValue dado el numero 150 debe devolver el valor Type 3', t => {
    const value = numberTpye.getNumberValue(150)
    t.is(value, 'Type 3')
})

test('getKey should return 0 if number is neither multiple of 3 nor 5', t => {
    const getKey = numberTpye.__get__('getKey')
    t.is(getKey(false, false), 0)
})
test('getKey should return 1 if number is multiple of 3 but not of 5', t => {
    const getKey = numberTpye.__get__('getKey')
    t.is(getKey(true, false), 1)
})
test('getKey should return 10 if number is multiple of 5 but not of 3', t => {
    const getKey = numberTpye.__get__('getKey')
    t.is(getKey(false, true), 10)
})
test('getKey should return 11 if number is both multiple of 3 and 5', t => {
    const getKey = numberTpye.__get__('getKey')
    t.is(getKey(true, true), 11)
})

test('valueFunctions[0] should return same number when invoked', t => {
    const valueFunctions = numberTpye.__get__('valueFunctions')
    t.is(valueFunctions[0](1), 1)
    t.is(valueFunctions[0](4), 4)
    t.is(valueFunctions[0](16), 16)
    t.is(valueFunctions[0](9949), 9949)
})