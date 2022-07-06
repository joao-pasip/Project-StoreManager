const Product = require('../models/ProductsModel');

const getAllProductsService = async () => {
  const products = await Product.getAllProductsModel();
  return products;
};

const getByIdProductService = async (id) => {
  const product = await Product.getByIdProductModel(id);
  return product[0];
};

const getQueryNameProductService = async (name) => {
  const products = await Product.getByQueryNameProductModel(name);
  if (products.length === 0) {
    return false;
  }
  return products;
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

const deleteProductService = async (id) => {
  const deleteProduct = await Product.deleteProductModel(id);
  if (deleteProduct.affectedRows === 0) {
    throw new Error('Product not found');
  }
};

module.exports = {
  getAllProductsService,
  getByIdProductService,
  createProductService,
  updateProductService,
  deleteProductService,
  getQueryNameProductService,
};
