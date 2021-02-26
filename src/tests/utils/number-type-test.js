const test = require('ava')
const numberTpye = require('../../utils/number-type')

test('dado el numero 1 debo devolver el valor 1', t => {
    const value = numberTpye.getNumberValue(1)
    t.is(value, 1)
})
test('dado el numero 3 debo devolver el valor Type 1', t => {
    const value = numberTpye.getNumberValue(3)
    t.is(value, 'Type 1')
})
test('dado el numero 5 debo devolver el valor Type 2', t => {
    const value = numberTpye.getNumberValue(5)
    t.is(value, 'Type 2')
})
// test('dado el numero 3 debo devolver el valor Type 1')
// test('dado el numero 5 debo devolver el valor Type 2')
// test('dado el numero 15 debo devolver el valor Type 3')
