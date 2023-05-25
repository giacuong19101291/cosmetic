const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const Schema = mongoose.Schema;

mongoose.plugin(slug);

mongoose.set('strictQuery', false);

const Product = new Schema({
    MSP: {type: String},
    name: {type: String, require:true,},
    description: {type: String},
    cost: {type: String},
    Product_Line: {type: String},
    image: {type: String},
    Product_Groups: {type: String},
    slug: { type: String, slug: 'name', unique: true }
  }, {
    timestamps: true,
  });

  module.exports = mongoose.model('Product', Product);