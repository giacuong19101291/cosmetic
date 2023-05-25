const Product = require('../models/Product')
const User = require('../models/User')
const Cart = require('../models/Cart')

const { mutipleMongooseToObject } = require('../../util/mongoose')
const { mongooseToObject } = require('../../util/mongoose');

class SiteController {

    // [GET] / home
    home(req, res){
        res.render('home')
    }

    // [POST] / addcart
    addcart(req, res, next){
        const cart = new Cart(req.body)
        cart.save()
    }

    // [GET] / cart
    cart(req, res, next){
        const name = Cart.productName
        Product.find({})
            .then(products => {
                res.render('cart', {
                products: mutipleMongooseToObject(products)
            })
            })
            .catch(next);

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

    // [GET] /me/login
    login(req, res){
        res.render('login')
    }

    // [POST] /letlogin
    letlogin(req, res, next) { 
        const { email, password } = req.body;

  // Tìm người dùng trong MongoDB dựa trên email
    User.findOne({ email }) 
    .then(user => {
      if (!user) {
        // Người dùng không tồn tại
        return res.send('<script>alert("Invalid email"); window.location="/login";</script>')
        
      }
      
      // So sánh mật khẩu
      if (user.password !== password) {
        // Mật khẩu không đúng
        return res.send('<script>alert("Invalid email or password"); window.location="/login";</script>')
      }

      // Đăng nhập thành công
      res.send('<script>alert("Login successful"); window.location="/";</script>');
    })
    .catch(err => res.status(500).send(err.message));
    }
        
    // [GET] /signup
    signup(req, res){
        res.render('signup')
    }

    // [POST] /adduser
    useradd(req, res, next) { 
        const user = new User(req.body);

        //  Check password and confirm password
         if (user.password !== user.confirmpassword) {
            return res.send('<script>alert("Password and Confirm Password do not match"); window.location="/signup";</script>');
         }
        else {
            user.save()
            .then(() => res.redirect('/login'))
            .catch(error => {

            })
        }
        
    }
}

module.exports = new SiteController