const mongoose = require('mongoose');
const uuidv1 = require('uuid/v1');

const userSchema = new mongoose.Schema({
  _id: { type: String, unique: true, default: uuidv1 },
  created: { type: Date, default: Date.now },
  name: String,
  address: String,
  type: String // "Patient" or "Provider"
});

module.exports = mongoose.model('User', userSchema);
