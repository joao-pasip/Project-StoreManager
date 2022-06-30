const { Router } = require('express');
const { productNameValidation } = require('../middlewares/productNameValidation');
const { saleValidation } = require('../middlewares/saleValidation');

const Product = require('../controllers/ProductsController');
const Sale = require('../controllers/SalesControllers');
const SaleProduct = require('../controllers/SalesProductsController');

const router = Router();

router.get('/products', Product.getAllProductsController);
router.get('/products/:id', Product.getByIdProductController);
router.post('/products', productNameValidation, Product.createProductController);
router.get('/sales', Sale.getAllSaleControllers);
router.post('/sales', saleValidation, Sale.createSaleController);
router.get('/salesp', SaleProduct.getAllSalesProductsController);

module.exports = {
  router,
};
