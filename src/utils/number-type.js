const range = require('./range')

const getNumberValue = (number) => {
    const multiploTres = isMultiploTres(number)
    const multiploCinco = isMultiploCinco(number)
    const multiploTresYCinco = multiploTres &&  multiploCinco

    if(multiploTresYCinco){
        return 'Type 3'
    } else if(multiploCinco){
        return 'Type 2'
    } else if(multiploTres){
        return 'Type 1'
    } else {
        return number
    }
}

const getRangeValue = (range) => {
    return range.map(element => {
        return getNumberValue(element)
    })
}

const printPartOne = () => {
    const numbers = range.createRange()
    const values = getRangeValue(numbers)
    values.forEach(element => {
        console.log(element)
    })
}

const isMultiploTres = (number) => {
    return number % 3 == 0
}
const isMultiploCinco = (number) => {
    return number % 5 == 0
}

module.exports = {
    getNumberValue,
    printPartOne
}