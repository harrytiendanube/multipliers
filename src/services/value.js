const numberTpye = require('../utils/number-type')
const logger = require('../utils/logger')
const { AlreadyExistsError } = require('../error/already-exists')

const values = {}

const getAllValues = () => {
    return Object.values(values)
}

const addValue = (number) => {
    if (`${number}` in values){
        throw new AlreadyExistsError()
    }
    const value = numberTpye.getNumberValue(number)
    values[`${number}`] = value
    return value
}

const getValue = (number) => {
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