class AlreadyExistsError extends Error {
  constructor(...params) {
    super(...params)

    // Maintains proper stack trace for where our error was thrown (only available on V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, AlreadyExistsError)
    }

    this.name = 'AlreadyExists'
  }
}

module.exports = {
    AlreadyExistsError
}