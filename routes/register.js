var express = require('express');
var path = require('path');
var pg = require('pg');

// require module functions
var connection = require('../modules/connection');

var router = express.Router();

router.get('/', function(req, res) {
  res.sendFile(path.resolve('views/register.html'));
});

router.post('/', function(req, res) {
  console.log('we hit the register route');
  console.log('req.body.username = ', req.body.username);
  console.log('req.body.password = ', req.body.password);

  //test the db connection
  var client = new pg.Client(connection);
  client.connect();

  res.sendStatus(200);
});

module.exports = router;
