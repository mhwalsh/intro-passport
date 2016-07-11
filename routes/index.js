var express = require('express');
var passport = require('passport');
var path = require('path');
var router = express.Router();

router.post('/', passport.authenticate('local'), function(req, res){
  res.send('OK');
});

router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../public/views/index.html'));
  // res.sendFile(path.resolve('public/views/index.html'));
});

module.exports = router;
