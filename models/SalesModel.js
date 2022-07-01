const connection = require('../helpers/connection');

const serialize = (joinTable) => {
  const objCamelCase = {
    saleId: joinTable.sale_id,
    productId: joinTable.product_id,
    quantity: joinTable.quantity,
    date: joinTable.date,
  };

  return objCamelCase;
};

const serializeById = (joinTable) => {
  const objCamelCase = {
    productId: joinTable.product_id,
    quantity: joinTable.quantity,
    date: joinTable.date,
  };

  return objCamelCase;
};

const serializeUptadeById = (joinTable) => {
  const objCamelCase = {
    saleId: joinTable.sale_id,
    productId: joinTable.product_id,
    quantity: joinTable.quantity,
  };

  return objCamelCase;
};

const getAllSaleModel = async () => {
  const query = 'SELECT SALES_PRODUCTS.sale_id, SALES_PRODUCTS.product_id,'
    + 'SALES_PRODUCTS.quantity, SALES.`date` FROM StoreManager.sales_products'
    + ' AS SALES_PRODUCTS JOIN StoreManager.sales AS SALES ON SALES_PRODUCTS.sale_id = SALES.id;';
  const [result] = await connection.execute(query);
  return result.map(serialize);
};

const getByIdSaleModel = async (id) => {
  const query = 'SELECT SALES_PRODUCTS.sale_id, SALES_PRODUCTS.product_id,'
    + 'SALES_PRODUCTS.quantity, SALES.`date` FROM StoreManager.sales_products'
    + ' AS SALES_PRODUCTS JOIN StoreManager.sales AS SALES ON SALES_PRODUCTS.sale_id = SALES.id'
    + ' WHERE SALES_PRODUCTS.sale_id = ?;';
  const [result] = await connection.execute(query, [id]);
  return result.map(serializeById);
};

const createSaleModel = async () => {
  const query = 'INSERT INTO StoreManager.sales (date) VALUES (NOW())';
  const [result] = await connection.execute(query);
  return result.insertId;
};

// const updateSaleByIdModel = async (productId, quantity, id) => {
//   const query = 'UPDATE StoreManager.sales_products'
//     + ' SET product_id = ?, quantity = ? WHERE sale_id = ?';
//   const [result] = connection.execute(query, [productId, quantity, id]);
//   return result.map(serializeUptadeById);
// };

const deleteSaleModel = async (id) => {
  const query = 'DELETE FROM StoreManager.sales WHERE id = ?';
  const [result] = await connection.execute(query, [id]);
  return result;
};

module.exports = {
  createSaleModel,
  getAllSaleModel,
  getByIdSaleModel,
  deleteSaleModel,
  updateSaleByIdModel,
};
