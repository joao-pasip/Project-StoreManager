require('mocha');
const { expect } = require('chai');
const sinon = require('sinon');
const model = require('../../../models/ProductsModel')

const connection = require('../../../helpers/connection');

describe('Testa model:ProductsModel - createProduct', () => {
  const mock = [{ insertId: 1, name: 'Pasip' }];

  before(() => {
    sinon.stub(connection, 'execute').resolves(mock);
  });

  after(() => {
    connection.execute.restore();
  });

  it('testa se o retorno é um object', async () => {
    const result = await model.createProductModel('Pasip');
    expect(result).to.be.eql({ id: 1, name: 'Pasip' })
  });

})
