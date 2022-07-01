require('mocha');
const { expect } = require('chai');
const sinon = require('sinon');
const model = require('../../../models/ProductsModel')

const connection = require('../../../helpers/connection');

describe('Testa model:ProductsModel - getAllProducts', async () => {
  const mock = ['Pasip'];

  before(() => {
    sinon.stub(connection, 'execute').resolves(mock);
  })

  after(() => {
    connection.execute.restore();
  });

  it('Se o retorno é "Pasip"', async () => {
    const result = await model.getAllProductsModel()
    expect(result).to.be.equal(mock[0])
  })
})
