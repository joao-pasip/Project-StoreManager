const Product = require('../models/ProductsModel');

const getAllProductsService = async () => {
  const products = await Product.getAllProductsModel();
  return products;
};

const getByIdProductService = async (id) => {
  const product = await Product.getByIdProductModel(id);
  return product[0];
};

module.exports = {
  getAllProductsService,
  getByIdProductService,
};
