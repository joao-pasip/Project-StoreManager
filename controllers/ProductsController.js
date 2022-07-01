const Product = require('../services/ProductsService');

const getAllProductsController = async (req, res) => {
  try {
    const products = await Product.getAllProductsService();
    console.log(products);
    return res.status(200).json(products);
  } catch (error) {
    return res.status(404).json({ message: 'Product not found' });
  }
};

const getByIdProductController = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.getByIdProductService(id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    return res.status(200).json(product);
  } catch (error) {
    return res.status(404).json({ message: 'Product not found' });
  }
};

const createProductController = async (req, res) => {
  try {
    const { name } = req.body;
    const createdProduct = await Product.createProductService(name);
    return res.status(201).json(createdProduct);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

module.exports = {
  getAllProductsController,
  getByIdProductController,
  createProductController,
};
