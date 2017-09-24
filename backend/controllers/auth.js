const User = require('../models/User'),
      config = require('../config/config'),
      util = require('./util');

exports.postLogin = (req, res, next) => {
  let userInfo = util.getUserInfo(req.user);

  return res.status(200).json({
    success: true,
    token: 'JWT ' + util.generateToken(userInfo),
    user: userInfo
  });
}

exports.postRegister = (req, res, next) => {
  const email = req.body.email
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const password = req.body.password;

  if (!email) return res.status(422).json({
    sucess: false,
    error: 'No email addresss supplied!'
  });

  if (!firstName || !lastName) return res.status(422).json({
    success: false,
    error: 'No first name or last name supplied!'
  });

  if (!password) return res.status(422).json({
    success: false,
    error: 'No password supplied!'
  });


  User.findOne({ email: email }, (err, existingUser) => {
    if (err) return next(err);

    if (existingUser) return res.status(400).json({
      success: false,
      error: 'Email address already in use!'
    });

    let user = new User({
      email: email,
      password: password,
      profile: { firstName: firstName, lastName: lastName },
    });

    user.save( (err, user) => {
      if (err) return next(err);

      let userInfo = util.getUserInfo(user);

      return res.status(201).json({
        success: true,
        token: 'JWT ' + util.generateToken(userInfo),
        user: userInfo
      });
      next();
    });
  });
}
