// ⚠️ La solución aplicada cumple con la funcionalidad pero no es la solución esperada.
//   Se esperaba que se resuelva a través de patrones de diseño. Factory + Decorator
//   El contra de esta solución es que estamos agregando una nueva regla de negocio
//   que nos obliga a conocer, manejar y mantener los valores 0,1,10,11. 

const valueFunctions = {
    0: number => number,
    1: number => 'Type 1',
    10: number => 'Type 2',
    11: number => 'Type 3',
}

const getKey = (multiploTres, multiploCinco) => {
    const tres = Number(multiploTres)
    const cinco = Number(multiploCinco)
    return 10 * cinco + tres
}

const isMultiploTres = (number) => {
    return number % 3 == 0
}
const isMultiploCinco = (number) => {
    return number % 5 == 0
}

const getNumberValue = (number) => {
    const tres = isMultiploTres(number)
    const cinco = isMultiploCinco(number)
    const key = getKey(tres, cinco)

    return valueFunctions[key](number)
}

module.exports = {
    getNumberValue
}