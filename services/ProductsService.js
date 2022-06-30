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

module.exports = {
  getAllProductsService,
  getByIdProductService,
  createProductService,
};
