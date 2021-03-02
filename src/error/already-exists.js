class AlreadyExistsError extends Error {
  constructor(...params) {
    super(...params)

    // Maintains proper stack trace for where our error was thrown (only available on V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, AlreadyExistsError)
    }

    this.name = 'AlreadyExists'
// ⚠️ Agregaría la propiedad `status` con el valor 409, así el controllador
//   enviaría el error a través de `next(error)` y el middleware definido en app.js
//   responsa el tipo de error de esta exception
//   ```
//    this.status = 409
//   ```
  }
}

module.exports = {
    AlreadyExistsError
}