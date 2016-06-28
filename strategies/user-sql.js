var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var pg = require('pg');
var connection = require('../modules/connection');

passport.use('local', new LocalStrategy({
    passReqToCallback: true,
    usernameField: 'username'
  },
  function(req, username, password, done) {
    console.log('hit local stragy');

    //test send false to trigger faliure 
    return done(null, false);
  }
));

module.exports = passport;
