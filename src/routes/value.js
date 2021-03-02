const express = require('express')
const router = express.Router()
const valueService = require('../services/value')
const { AlreadyExistsError } = require('../error/already-exists')

// GET /value 
router.get('/', function(req, res, next) {
// ⚠️ valueService.getAllValues no lanza errores no sería necerio el uso de try/catch
  try{    
    const values = valueService.getAllValues()
    res.send(values)
  } catch(err) {
// ⚠️ En app.js se definio un middleware handle error
//   ya no sería necesario responder el error sino ejecutar: `next(err);` 
    res.status(500).send(err)
  }
})

// GET /value/:value
// ⚠️ Recomendaría que el param se llame `:id` ya que en base a este valor
//   identificamos el valor en nuestro storage.
router.get('/:value', function(req, res, next) {
// ⚠️ Se podría mover la validación a un función/clase de validación
//   que al pasarle los valores de entrada en caso de no ser valido
//   lance un error con codigo 400 (bad request) así este error 
//   puede ser capturado por el catch y enviado a través de next(error).
//   Quedan responsabilidades claras, eliminaríamos los IF/ELSE y el código es más legible
//   ej:
//   ```
//   try{
//     validateInput(req.params.value)
//     const value = valueService.getValue(req.params.value)
//     res.status(200).send(`${value}`);
//   catch(error){
//     next(error)
//   }  
//   ```
  try{
    if(isNaN(req.params.value) && isNaN(parseInt(req.params.value))){
      res.sendStatus(400)
    } else {
      const value = valueService.getValue(req.params.value)
      res.status(200).send(`${value}`)
    }
  } catch(err) {
    if(err instanceof RangeError){
      res.status(404).send()
    } else {
      res.status(500).send(err)
    }
  }
})

// POST /value
router.post('/', function(req, res, next) {
// ⚠️ Item route anterior
  try{
    if(!('number' in req.body) || !Number.isInteger(req.body.number)){
      res.sendStatus(400)
    } else {
// ✅ Perfecto recibir la data a través de body      
      const value = valueService.addValue(req.body.number)
// ✅ Perfecto 201 para datos creados      
      res.sendStatus(201)
    }
  } catch(err) {
    if(err instanceof AlreadyExistsError){
      res.sendStatus(409)
    } else {
      res.status(500).send(err)
    }
  }
})

module.exports = router
