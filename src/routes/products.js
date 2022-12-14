const express = require('express');
const router = express.Router();

const productsController = require('../app/controllers/ProductsController') 

router.get('/create', productsController.create)
router.post('/store', productsController.store)
router.get('/:name', productsController.show)

module.exports = router; 