const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Cart = new Schema({
    productName: {type: String, },
    amount: {type: Number,},
    fullName: {type: String, },
    phone: {type: String,},
    address: {type: String,},
  }, {
    timestamps: true,
  });

  module.exports = mongoose.model('Cart', Cart);