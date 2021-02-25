const express = require('express');
const router = express.Router();

/* GET health status. */
router.get('/', function(req, res, next) {
  res.send({status: 'OK'});
});

module.exports = router;
