const check = () => {
    return new Promise((resolve, reject) => {
        //TODO check dependencies
        resolve({
            status: 'OK'
        })
    });
}

module.exports = {
    check
}