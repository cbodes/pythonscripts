const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  username: {type: String, required: true, trim: true},
  password: {type: String, required: true, trim: true},
  token: {type: String, required: true, trim: true}
});

module.exports = mongoose.model('userSchema', userSchema);
