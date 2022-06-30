const { Router } = require('express');
const { productNameValidation } = require('../middlewares/productNameValidation');

const Product = require('../controllers/ProductsController');

const router = Router();

router.get('/products', Product.getAllProductsController);
router.get('/products/:id', Product.getByIdProductController);
router.post('/products', productNameValidation, Product.createProductController);

module.exports = {
  router,
};
