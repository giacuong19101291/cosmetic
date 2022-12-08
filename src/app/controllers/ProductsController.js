const Product = require('../models/Product')
const { mutipleMongooseToOject } = require('../../util/mongoose')

class ProductsController {

    // [GET] / Products
    index(req, res){
        res.render('product')
    }
    
    // [GET] / Products/:slug
    show(req, res) {
        Product.find({})
            .then(products => res.render('product', {
                products: mutipleMongooseToOject(products)
            }))
            .catch(next);
    }
}

module.exports = new ProductsController