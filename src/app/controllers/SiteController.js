const Product = require('../models/Product')
const { mutipleMongooseToObject } = require('../../util/mongoose')

class SiteController {

    // [GET] / home
    home(req, res){
        res.render('home')
    }
    
    // [GET] / login
    login(req, res){
        res.render('login')
    }

    // [GET] / signup
    signup(req, res){
        res.render('signup')
    }

    // [GET] / cart
    cart(req, res){
        res.render('cart')
    }

    // [GET] / cartegory
    cartegory(req, res, next){
        Product.find({})
            .then(products => {
                res.render('cartegory', {
                products: mutipleMongooseToObject(products)
            })
            })
            .catch(next);
    }


    // [GET] / delivery
    delivery(req, res){
        res.render('delivery')
    }

    // [GET] / payment
    payment(req, res){
        res.render('payment')
    }

}

module.exports = new SiteController