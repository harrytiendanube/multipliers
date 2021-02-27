const test = require('ava')
const rewire = require('rewire')

const numberTpye = rewire('../../utils/number-type')

test('getNumberValue para los numeros 1, 4, 16 o 9949 debe devolver el mismo valor', t => {
    t.is(numberTpye.getNumberValue(1), 1)
    t.is(numberTpye.getNumberValue(4), 4)
    t.is(numberTpye.getNumberValue(16), 16)
    t.is(numberTpye.getNumberValue(9949), 9949)
})
test('getNumberValue para los numeros 3, 6 o 99 debe devolver el valor Type 1', t => {
    t.is(numberTpye.getNumberValue(3), 'Type 1')
    t.is(numberTpye.getNumberValue(6), 'Type 1')
    t.is(numberTpye.getNumberValue(99), 'Type 1')
})
test('getNumberValue para los numeros 5, 50 o 505 debe devolver el valor Type 2', t => {
    t.is(numberTpye.getNumberValue(5), 'Type 2')
    t.is(numberTpye.getNumberValue(50), 'Type 2')
    t.is(numberTpye.getNumberValue(505), 'Type 2')
})
test('getNumberValue para los numeros 15, 30 o 150 debe devolver el valor Type 3', t => {
    t.is(numberTpye.getNumberValue(15), 'Type 3')
    t.is(numberTpye.getNumberValue(30), 'Type 3')
    t.is(numberTpye.getNumberValue(150), 'Type 3')
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

test('isMultiploTres should return true for numbers 3, 6, 15, 30, 99 or 150', t => {
    const isMultiploTres = numberTpye.__get__('isMultiploTres')
    t.truthy(isMultiploTres(3))
    t.truthy(isMultiploTres(6))
    t.truthy(isMultiploTres(15))
    t.truthy(isMultiploTres(30))
    t.truthy(isMultiploTres(99))
    t.truthy(isMultiploTres(150))
})

test('isMultiploTres should return false for numbers 1, 4, 5, 16, 50, 505 or 9949', t => {
    const isMultiploTres = numberTpye.__get__('isMultiploTres')
    t.falsy(isMultiploTres(1))
    t.falsy(isMultiploTres(4))
    t.falsy(isMultiploTres(5))
    t.falsy(isMultiploTres(16))
    t.falsy(isMultiploTres(50))
    t.falsy(isMultiploTres(505))
    t.falsy(isMultiploTres(9949))
})

test('isMultiploCinco should return true for numbers 5, 15, 30, 50, 150 or 505', t => {
    const isMultiploCinco = numberTpye.__get__('isMultiploCinco')
    t.truthy(isMultiploCinco(5))
    t.truthy(isMultiploCinco(15))
    t.truthy(isMultiploCinco(30))
    t.truthy(isMultiploCinco(50))
    t.truthy(isMultiploCinco(150))
    t.truthy(isMultiploCinco(505))
})

test('isMultiploCinco should return false for numbers 1, 3, 4, 6, 16, 99 or 9949', t => {
    const isMultiploCinco = numberTpye.__get__('isMultiploCinco')
    t.falsy(isMultiploCinco(1))
    t.falsy(isMultiploCinco(3))
    t.falsy(isMultiploCinco(4))
    t.falsy(isMultiploCinco(6))
    t.falsy(isMultiploCinco(16))
    t.falsy(isMultiploCinco(99))
    t.falsy(isMultiploCinco(9949))
})