const Product = require('../services/ProductsService');

const getAllProductsController = async (req, res) => {
  try {
    const products = await Product.getAllProductsService();
    return res.status(200).json(products);
  } catch (error) {
    return res.status(404).json({ message: 'Product not found' });
  }
};

const getByIdProductController = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.getByIdProductService(id);
    if (!product) throw new Error();
    return res.status(200).json(product);
  } catch (error) {
    return res.status(404).json({ message: 'Product not found' });
  }
};

const getQueryNameProductController = async (req, res) => {
  try {
    const name = req.query.q;
    const product = await Product.getQueryNameProductService(name);
    if (!product) throw new Error();
    return res.status(200).json(product);
  } catch (error) {
    return res.status(404).json({ message: error.message });
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

const updateProductController = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const newObj = {
      id,
      name,
    };
    await Product.updateProductService(id, name);
    return res.status(200).json(newObj);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

const deleteProductController = async (req, res) => {
  try {
    const { id } = req.params;
    await Product.deleteProductService(id);
    return res.status(204).send();
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

module.exports = {
  getAllProductsController,
  getByIdProductController,
  createProductController,
  updateProductController,
  deleteProductController,
  getQueryNameProductController,
};
