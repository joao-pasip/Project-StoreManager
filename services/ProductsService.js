const Product = require('../models/ProductsModel');

const getAllProductsService = async () => {
  const products = await Product.getAllProductsModel();
  return products;
};

const getByIdProductService = async (id) => {
  const product = await Product.getByIdProductModel(id);
  return product[0];
};

const createProductService = async (name) => {
  const product = await Product.createProductModel(name);
  return product;
};

const updateProductService = async (id, name) => {
  const updateProduct = await Product.updateProductModel(id, name);
  if (updateProduct.affectedRows === 0) {
    throw new Error('Product not found');
  }
  return updateProduct;
};

module.exports = {
  getAllProductsService,
  getByIdProductService,
  createProductService,
  updateProductService,
};
