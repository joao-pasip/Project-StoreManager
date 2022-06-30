const Sale = require('../models/SalesModel');
const SaleProduct = require('../models/Sales_ProductsModel');

const getAllSalesServices = async () => {
  const salesAll = await Sale.getAllSaleModel();
  return salesAll;
};

const createSalesServices = async (array) => {
  await SaleProduct.verifyIfProductsExist(array);
  const saleId = await Sale.createSaleModel();
  const newObj = {
    id: saleId,
    itemsSold: array,
  };
  console.log(newObj);
  await SaleProduct.createSaleProductModel(newObj);
  return newObj;
};

module.exports = {
  getAllSalesServices,
  createSalesServices,
};
