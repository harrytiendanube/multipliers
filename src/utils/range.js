// rango del 1 al 100
const createRange = () => {
    const array = [...Array(101).keys()]
    array.shift()
    return array
}

module.exports = {
    createRange
}