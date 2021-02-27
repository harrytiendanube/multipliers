const logger = require('../utils/logger')
const range = require('../utils/range')
const { getNumberValue } = require('../utils/number-type')

const getRangeValue = (range) => {
    return range.map(element => {
        return getNumberValue(element)
    })
}

const printRange100 = () => {
    const numbers = range.createRange()
    const values = getRangeValue(numbers)
    values.forEach(element => {
        logger.log(element)
    })
}

module.exports = {
    printRange100
}