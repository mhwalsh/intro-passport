var express = require('express');
var path = require('path');

var router = express.Router();

router.get('/', function(req, res) {
  res.sendFile(path.resolve('views/register.html'));
});

router.post('/', function(req, res) {
  console.log('we hit the register route');
  res.sendStatus(200);
});

module.exports = router;
