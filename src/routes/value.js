const express = require('express')
const router = express.Router()
const valueService = require('../services/value')
const { AlreadyExistsError } = require('../error/already-exists')

// GET /value 
router.get('/', function(req, res, next) {
  try{
    const values = valueService.getAllValues()
    res.send(values)
  } catch(err) {
    res.status(500).send(err)
  }
})

// GET /value/:value
router.get('/:value', function(req, res, next) {
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
  try{
    if(!('number' in req.body) || !Number.isInteger(req.body.number)){
      res.sendStatus(400)
    } else {
      const value = valueService.addValue(req.body.number)
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
