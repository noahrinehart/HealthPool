const mongoose = require('mongoose'),
      bcrypt = require('bcrypt'),
      uuidv1 = require('uuid/v1');

const userSchema = new mongoose.Schema({
  _id: { type: String, unique: true, default: uuidv1 },
  email: { type: String, unique: true },
  password: String,
  profile: {
    firstName: { type: String },
    lastName: { type: String }
  },
  address: String
}, { timestamps: true });

userSchema.pre('save', function(next) {
  const user = this;

  if (!user.isModified('password'))
    return next();

  bcrypt.genSalt(10, function(err, salt) {
    if (err) return next(err);

    bcrypt.hash(user.password, salt, function(err, hash) {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
});

userSchema.methods.comparePassword = function comparePassword(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    if (err) return cb(err);
    cb(err, isMatch);
  });
};

module.exports = mongoose.model('User', userSchema);
