const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
var db = require('../models');

module.exports = (passport) => {
  passport.serializeUser(function (user, done) {
    done(null, user);
  });

  passport.deserializeUser(function (user, done) {
    // console.log("Line 11 deserialize: ", user);
    db.Profiles.findOne({
      where: {
        username: user.username
      }
    });
    done(null, user);
  });

  passport.use(new LocalStrategy(
    //  {
    //     usernameField : 'username',
    //     passwordField : 'password',
    //     passReqToCallback : true,
    // },
    function (username, password, done) {
      // console.log("passport.js info: ", username, password);
      db.Profiles.findOne({
        where: {
          username: username
        }
      }).then(function (dbUser) {
        if (!dbUser) {
          return done(null, false, {
            message: "Incorrect username."
          });
        } else if (!dbUser.validPassword(password)) {
          return done(null, false, {
            message: "Incorrect password."
          });
        }
        return done(null, dbUser);
      });
    }
  ));
}