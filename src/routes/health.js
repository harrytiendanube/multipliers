const express = require('express');
const router = express.Router();
const healthService = require('../services/health')

/* GET health status. */
router.get('/', function(req, res, next) {
  healthService.check().then(status => {
    res.send(status)
  }).catch(err => {
    next(err)
  })
});

module.exports = router;
