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

const verifyIfProductsExist = async (itemsSold) => {
  const verifyProduct = 'SELECT * FROM StoreManager.products WHERE id = ?;';
  const arrayBoolean = await Promise.all(itemsSold.map(async (sale) => {
    const [result] = await connection.execute(verifyProduct, [sale.productId]);
    return result.length < 1;
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
  getAllSalesProductsModel,
  verifyIfProductsExist,
};
