const connection = require('./connection');

const verifyIfProductsExist = async (itemsSold) => {
  const verifyProduct = 'SELECT * FROM StoreManager.products WHERE id = ?;';
  const arrayBoolean = await Promise.all(itemsSold.map(async (sale) => {
    const [result] = await connection.execute(verifyProduct, [sale.productId]);
    return result.length <= 0;
  }));

  const testeThrow = arrayBoolean.some((element) => element);

  if (testeThrow) {
    throw new Error('Product not found');
  }
};

const createSaleProductModel = async ({ id, itemsSold }) => {
  const query = 'INSERT INTO StoreManager.sales_products'
    + '(sale_id, product_id, quantity) VALUES (?, ?, ?)';

  await Promise.all(itemsSold.map(async (sale) => {
    await connection.execute(query, [id, sale.productId, sale.quantity]);
  }));
};

module.exports = {
  createSaleProductModel,
  verifyIfProductsExist,
};
