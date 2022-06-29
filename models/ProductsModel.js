const connection = require('../helpers/connection');

const getAllProductsModel = async () => {
  const query = 'SELECT * FROM StoreManager.products;';
  const [result] = await connection.execute(query);
  return result;
};

const getByIdProductModel = async (id) => {
  const query = 'SELECT * FROM StoreManager.products WHERE id = ?;';
  const [result] = await connection.execute(query, [id]);
  return result;
};

module.exports = {
  getAllProductsModel,
  getByIdProductModel,
};