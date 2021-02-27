class LoggerMock {
    constructor() {
        this.loggedLines = []
    }

    log(message) {
        this.loggedLines.push(message)
    }

    getFullLog() {
        return this.loggedLines.join('\n')
    }
}

module.exports = LoggerMock