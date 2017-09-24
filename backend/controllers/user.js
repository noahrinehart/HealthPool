const User = require('../models/User')
      mongoose = require('mongoose');

exports.getUser = (req, res, next) => {
  let address = req.body.address;

  if (!address)
    return res.status(204);

  User.find({ address: address }, (err, user) => {
      if (err) return next(err);
      if (user)
        return res.status(200).json({
          success: true,
          user: user
        });
    });
    return res.status(204);
}

exports.postUser = (req, res, next) => {

  const name = req.body.name;
  const address = req.body.address;
  const type = req.body.type;

  User.find({address: address}, (err, existingUser) => {
    if (err) return next(err);
    if (existingUser.length > 0) return res.status(400).json({
      success: false,
      error: 'User already exists!'
    });

    let user = new User({
      name: name,
      address: address,
      type: type
    });

    user.save( (err, user) => {
      if (err) return next(err);

      return res.status(201).json({
        success: true,
        user: user
      });
    });
  });
}
