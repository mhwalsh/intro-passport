var express = require('express');
var pg = require('pg');
var bodyParser = require('body-parser');

var app = express();

//body paser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Include Routes
var index = require('../routes/index');
var register = require('../routes/register');

// Routes
app.use('/register', register);
app.use('/*', index); //why /*

app.listen(3000, function() {
  console.log('listening on port 3000');
});
