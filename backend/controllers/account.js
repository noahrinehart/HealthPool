const util = require('./util')
      User = require('../models/User');

exports.getAccount = (req, res, next) => {
  let userInfo = util.getUserInfo(req.user);

  res.status(200).json({
    success: true,
    user: userInfo
  });
}

exports.postUpdateProfile = (req, res, next) => {
  let userInfo = util.getUserInfo(req.user);

  const firstName = req.body.firstName;
  const lastName = req.body.lastName;

  if (!firstName && !lastName) return res.status(422).json({
    sucess: false,
    error: 'No field supplied!'
  });

  User.findOne({ email: userInfo.email }, (err, existingUser) => {
    if (err) return next(err);

    if (!existingUser) return res.status(400).json({
      success: false,
      error: 'That user does not exist!'
    });

    if (firstName)
      existingUser.profile.firstName = firstName;
    if (lastName)
      existingUser.profile.lastName = lastName;

    existingUser.save( (err, user) => {
      if (err) return next(err);

      let userInfo = util.getUserInfo(user);

      return res.status(200).json({
        success: true,
        user: userInfo
      });
    });
  });
}

exports.postUpdatePassword = (req, res, next) => {
  let userInfo = util.getUserInfo(req.user);

  const password = req.body.password;

  if (!password) return res.status(422).json({
    success: false,
    error: 'No password supplied!'
  });

  User.findOne({ email: userInfo.email }, (err, existingUser) => {
    if (err) return next(err);

    if (!existingUser) return res.status(400).json({
      success: false,
      error: 'That user does not exist!'
    });

    existingUser.password = password;

    existingUser.save( (err, user) => {
      if (err) return next(err);

      let userInfo = util.getUserInfo(user);

      res.status(200).json({
        success: true,
        user: userInfo
      });
    });
  });
}

exports.postAddAddress = (req, res, next) => {
  let userInfo = util.getUserInfo(req.user);

  const address = req.body.address;

  if (!address) return res.status(422).json({
    success: false,
    error: 'No address supplied!'
  });

  User.findOne({ email: userInfo.email }, (err, existingUser) => {
    if (err) return next(err);

    if (!existingUser) return res.status(400).json({
      success: false,
      error: 'That user does not exist!'
    });

    existingUser.address = address;

    existingUser.save( (err, user) => {
      if (err) return next(err);

      let userInfo = util.getUserInfo(user);

      res.status(200).json({
        success: true,
        user: userInfo
      });
    });
  });
}

exports.deleteAccount = (req, res, next) => {
  let userInfo = util.getUserInfo(req.user);

  const password = req.body.password;

  if (!password) return res.status(422).json({
    success: false,
    error: 'No password supplied!'
  });

  User.remove({ email: userInfo.email }, (err) => {
    if (err) return res.status(400).json({
      success: false,
      error: 'That user does not exist!'
    });

    return res.status(200).json({
      success: true,
      msg: 'Account successfully deleted!'
    });
  });
}
