const fetch = require("node-fetch");

const config = require('../config')
const logger = require('../utils/logger')

const rejectDependency = (reject, dependencyName, details) => {
    reject({
        status: 'failing dependency',
        dependency: dependencyName,
        details
    })
}
const checkService = () => new Promise((resolve, reject) => {
    logger.log(`Checking dependency ${config.externalServices.healthDependencyUrl}`, 'debug')
    fetch(config.externalServices.healthDependencyUrl).then(response => {
        logger.log(`Dependency ${config.externalServices.healthDependencyUrl} OK`, 'debug')
        resolve()
    }).catch(err => {
        logger.log(`Error on ${config.externalServices.healthDependencyUrl}: ${err}`, 'debug')
        rejectDependency(reject, 'service', err.message)
    })
})

const check = () => {
    return new Promise((resolve, reject) => {
        Promise.all([
            checkService()
        ]).then(() => {
            resolve({
                status: 'OK'
            })
        }).catch(err => {
            reject(err)
        })
    });
}

module.exports = {
    check
}