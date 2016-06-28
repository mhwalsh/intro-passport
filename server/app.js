var express = require('express');
var pg = require('pg');
var bodyPaser = require('body-parser');

var app = express();

//Include Routes
var index = require('../routes/index');
var register = require('../routes/register');

// Routes
app.use('/register', register);
app.use('/*', index); //why /*

app.listen(3000, function() {
  console.log('listening on port 3000');
});
