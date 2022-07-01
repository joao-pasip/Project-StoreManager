const Sale = require('../models/SalesModel');
const SaleProduct = require('../models/Sales_ProductsModel');

const getAllSalesServices = async () => {
  const salesAll = await Sale.getAllSaleModel();
  return salesAll;
};

const getByIdSaleService = async (id) => {
  const saleById = await Sale.getByIdSaleModel(id);
  if (!saleById.length) {
    throw new Error('Sale not found');
  }
  return saleById;
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

// const updateSaleByIdService = async (productId, quantity, id) => {
//   const updateSale = await Sale.updateSaleByIdModel(productId, quantity, id);
//   console.log(updateSale);
//   return updateSale;
// };

const deleteSaleService = async (id) => {
  const deleteSale = await Sale.deleteSaleModel(id);
  if (deleteSale.affectedRows === 0) {
    throw new Error('Sale not found');
  }
};

module.exports = {
  getAllSalesServices,
  createSalesServices,
  getByIdSaleService,
  deleteSaleService,
  updateSaleByIdService,
};
