const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    username: {type: String, },
    email: {type: String, },
    password: {type: String, },
    confirmpassword: {type: String, },

  }, {
    timestamps: true,
  });

  module.exports = mongoose.model('User', User);