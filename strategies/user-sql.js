var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var pg = require('pg');
var connection = require('../modules/connection');


//local strategy
passport.use('local', new LocalStrategy(
  {
    passReqToCallback: true,
    usernameField: 'username'
  },
  function(req, username, password, passDone) {
    console.log('hit local strategy');

    pg.connect(connection, function(err, client, pgDone) {

      //connection error
      if(err){
        console.log(err);
        res.sendStatus(500);
      }

      // find all users
      client.query('SELECT * from users WHERE username = $1', [username],
        function(err, result) {
          pgDone();

          //catch query error
          if(err){
            console.log(err);
            return passDone(null, false);

          }else{
            //check the length of the result set
            if(result.rows.length >= 1){

              var passwordDb = result.rows[0].password;
              //if given password matches dbs password
              if(password === passwordDb){
                console.log('correct pass');
                return passDone(null, result.rows[0]);
              }
            }

            console.log('nope');
            // if fewer than 1 row or incorrect password - fail
            return passDone(null, false, {message: 'Incorrect credentials.'});
          }
      });
    });
  }
));

module.exports = passport;
