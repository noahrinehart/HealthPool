const jwt = require('jsonwebtoken'),
      config = require('../config/config');

exports.generateToken = (user) => {
  return jwt.sign(user, config.secret, {
    expiresIn: 10080 // seconds
  });
}

exports.getUserInfo = (request) => {
  return {
    _id: request._id,
    firstName: request.profile.firstName,
    lastName: request.profile.lastName,
    email: request.email,
    address: request.address
  };
}
