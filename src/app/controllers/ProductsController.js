const Product = require('../models/Product')
const { mongooseToObject } = require('../../util/mongoose');
// const { set } = require('mongoose');
// mongoose.set('strictQuery', true)

class ProductsController {

    // [GET] / Product/:name
    show(req, res, next) {
        Product.findOne({ name: req.params.name})
            .then(product => 
                res.render('product', { product: mongooseToObject(product)})
            )
            .catch(next);
    }

    // [GET] / Product/create
    create(req, res, next) {
        res.render('create')
    }

    // [POST] / Product/store
    store(req, res, next) { 
        const product = new Product(req.body)
        product.save()
            .then(() => res.redirect('/'))
            .catch(error => {
                
            })
    }

} 

module.exports = new ProductsController