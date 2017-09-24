const passport = require('passport'),
      User = require('../models/User'),
      config = require('./config'),
      JwtStrategy = require('passport-jwt').Strategy,
      ExtractJwt = require('passport-jwt').ExtractJwt,
      LocalStrategy = require('passport-local');

const localOptions = { usernameField: 'email' };

const localLogin = new LocalStrategy(localOptions, (email, password, done) => {
  User.findOne({ email: email }, (err, user) => {
    if (err) return done(err);
    if (!user) return done(null, false, { error: 'Your login details are incorrect! '});

    user.comparePassword(password, (err, isMatch) => {
      if (err) return done(err);
      if (!isMatch) return done(null, false, { error: 'Your login details are incorrect! '});

      return done(null, user);
    });
  });
});

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeader(),
  secretOrKey: config.secret
};

const jwtLogin = new JwtStrategy(jwtOptions, (payload, done) => {
  User.findById(payload._id, (err, user) => {
    if (err) return done(err, false);

    if (user)
      done(null, user);
    else {
      done(null, false);
    }
  });
});

passport.use(localLogin);
passport.use(jwtLogin);
