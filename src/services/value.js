// ⚠️ Typo:  numberTpye -> numberType
const numberTpye = require('../utils/number-type')
// ❌  logger no está siendo usado
const logger = require('../utils/logger')
const { AlreadyExistsError } = require('../error/already-exists')

const values = {}

const getAllValues = () => {
    return Object.values(values)
}

const addValue = (number) => {
// ⚠️ 
// 1. Separaría la responsabilidad de como se busca un valor en la colección en otro método o clase
// 2. Me aseguraría que en un nivel superior el número que me envíen ya sea un string para evitar la transformación a través de literal string
    if (`${number}` in values){
        throw new AlreadyExistsError()
    }
    const value = numberTpye.getNumberValue(number)
// ⚠️ Separaría la responsabilidad de como se guarda el valor de un número ingresado a la collección
    values[`${number}`] = value
    return value
}

const getValue = (number) => {
// ⚠️ Item punto 1 y 2 de addValue    
    if (!(`${number}` in values)){
        throw new RangeError(`No value found for ${number}`)
    }
    return values[number]
}

module.exports = {
    getAllValues,
    getValue,
    addValue
}