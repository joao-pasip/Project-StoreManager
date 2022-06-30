const connection = require('../helpers/connection');

const getAllSaleModel = async () => {
  const query = 'SELECT * FROM StoreManager.sales;';
  const [result] = await connection.execute(query);
  return result;
};

const createSaleModel = async () => {
  const query = 'INSERT INTO StoreManager.sales (date) VALUES (CURRENT_TIMESTAMP())';
  const [result] = await connection.execute(query);
  return result.insertId;
};

module.exports = {
  createSaleModel,
  getAllSaleModel,
};
