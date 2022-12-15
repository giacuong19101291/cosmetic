const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController') 

router.get('/login', siteController.login)
router.get('/signup', siteController.signup)
router.get('/cart', siteController.cart)
router.get('/cartegory', siteController.cartegory)
router.get('/delivery', siteController.delivery)
router.get('/payment', siteController.payment)
router.get('/', siteController.home)


module.exports = router;