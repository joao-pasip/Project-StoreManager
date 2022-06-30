const { Router } = require('express');

const Product = require('../controllers/ProductsController');

const router = Router();

router.get('/products', Product.getAllProductsController);
router.get('/products/:id', Product.getByIdProductController);
router.post('/products', Product.createProductController);

module.exports = {
  router,
};
