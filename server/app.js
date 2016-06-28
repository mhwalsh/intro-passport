var express = require('express');
var pg = require('pg');
var bodyParser = require('body-parser');

var passport = require('../strategies/user-sql.js');

var app = express();

//body paser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('public'));

// init passport
app.use(passport.initialize());
// app.use(passport.session());

//Include Routes
var index = require('../routes/index');
var register = require('../routes/register');

// Routes
app.use('/register', register);
app.use('/*', index);

app.listen(3000, function() {
  console.log('listening on port 3000');
});
