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

const getByQueryNameProductModel = async (name) => {
  const query = `SELECT * FROM StoreManager.products AS PRODUCTS
    WHERE PRODUCTS.name LIKE "%${name}%";`;
  const [result] = await connection.execute(query, [name]);
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

const updateProductModel = async (id, name) => {
  const query = 'UPDATE StoreManager.products AS PRODUCTS SET PRODUCTS.name=? WHERE id = ?;';
  const [result] = await connection.execute(query, [name, id]);
  return result;
};

const deleteProductModel = async (id) => {
  const query = 'DELETE FROM StoreManager.products WHERE id=?;';
  const [result] = await connection.execute(query, [id]);
  return result;
};

module.exports = {
  getAllProductsModel,
  getByIdProductModel,
  createProductModel,
  updateProductModel,
  deleteProductModel,
  getByQueryNameProductModel,
};
