const connection = require('../helpers/connection');

// const serialize = (joinTable) => {
//   const objCamelCase = {
//     saleId: joinTable.sale_id,
//     productId: joinTable.product_id,
//     quantity: joinTable.quantity,
//   };

//   return objCamelCase;
// };

const getAllSalesProductsModel = async () => {
  const query = 'SELECT * FROM StoreManager.sales_products;';
  const [result] = await connection.execute(query);
  return result;
};

const createSaleProductModel = async ({ id, itemsSold }) => {
  const verifyProduct = 'SELECT * FROM StoreManager.products WHERE id = ?;';
  const arrayBoolean = await Promise.all(itemsSold.map(async (sale) => {
    const [result] = await connection.execute(verifyProduct, [sale.productId]);
    return result.length === 0;
  }));

  const testeThrow = arrayBoolean.some((element) => element);

  if (testeThrow) {
    throw new Error('Product not found');
  }

  const query = 'INSERT INTO StoreManager.sales_products'
    + '(sale_id, product_id, quantity) VALUES (?, ?, ?)';
  itemsSold.map(async (sale) => {
    await connection.execute(query, [id, sale.productId, sale.quantity]);
  });
};

module.exports = {
  createSaleProductModel,
  getAllSalesProductsModel,
};
