const express = require('express');

const router = express.Router();

const controller = require('../controller/product.controller');

router.get('/getProducts', controller.getProducts);

router.get('/getProductById/:id', controller.getProductById);

router.post('/createProduct', controller.createProduct);

router.put('/updateProductById/:id', controller.updateProductById);

router.delete('/deleteProductById/:id', controller.deleteProductById);

module.exports = router;