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

const createProductModel = async (name) => {
  const query = 'INSERT INTO StoreManager.products (name) VALUES (?);';
  const [result] = await connection.execute(query, [name]);
  const { insertId } = result;
  const newObjProduct = {
    id: insertId,
    name,
  };
  return newObjProduct;
};

module.exports = {
  getAllProductsModel,
  getByIdProductModel,
  createProductModel,
};
