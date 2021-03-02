const logger = require('../utils/logger')
const range = require('../utils/range')
const { getNumberValue } = require('../utils/number-type')

// 💬 Se podría usar un "implicit return" de arrow 
//   function cuando tenemos un solo valor a retornar 
// ej:
// ```
// const getRangeValue = (range) => range.map(element => getNumberValue(element));
// ```
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