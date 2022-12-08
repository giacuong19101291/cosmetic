
class SiteController {

    // [GET] / home
    home(req, res){
        res.render('home')
    }
    
    // [GET] / cart
    cart(req, res){
        res.render('cart')
    }

    // [GET] / cartegory
    cartegory(req, res){
        res.render('cartegory')
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