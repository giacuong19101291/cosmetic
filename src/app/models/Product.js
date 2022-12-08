const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Product = new Schema({
    MSP: String,
    name: String,
    description: String,
    cost: String,
    Product_Line: String,
    image: String,
    Product_Groups: String,
    createAt: { type: Date, default: Date.now},
    updateAt: { type: Date, default: Date.now},
  });

  module.exports = mongoose.model('Product', Product);