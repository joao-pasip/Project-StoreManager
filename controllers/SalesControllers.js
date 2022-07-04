const Sale = require('../services/SalesService');

const getAllSaleControllers = async (req, res) => {
  try {
    const sales = await Sale.getAllSalesServices();
    return res.status(200).json(sales);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getByIdSaleController = async (req, res) => {
  try {
    const { id } = req.params;
    const saleById = await Sale.getByIdSaleService(Number(id));
    return res.status(200).json(saleById);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

const createSaleController = async (req, res) => {
  try {
    const array = req.body;
    const sales = await Sale.createSalesServices(array);
    return res.status(201).json(sales);
  } catch (error) {
    if (error.message === 'Product not found') {
       return res.status(404).json({ message: error.message });
    }
    return res.status(400).json({ message: error.message });
  }
};

const updateSaleByIdController = async (req, res) => {
  try {
    const { id } = req.params;
    const saleArray = req.body;
    const updateSale = await Sale.updateSaleByIdService(saleArray, id);
    return res.status(200).json(updateSale);
  } catch (error) {
    // console.log(error.message);
    return res.status(404).json({ message: error.message });
  }
};

const deleteSaleController = async (req, res) => {
  try {
    const { id } = req.params;
    await Sale.deleteSaleService(id);
    return res.status(204).send();
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

module.exports = {
  createSaleController,
  getAllSaleControllers,
  getByIdSaleController,
  deleteSaleController,
  updateSaleByIdController,
};
