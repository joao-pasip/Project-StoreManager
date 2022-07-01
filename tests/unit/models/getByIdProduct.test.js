require('mocha');
const { expect } = require('chai');
const sinon = require('sinon');
const model = require('../../../models/ProductsModel')

const connection = require('../../../helpers/connection');

describe('Testa model:ProductsModel - getByIdProduct', () => {
  const mock = ['Pasip'];

  before(() => {
    sinon.stub(connection, 'execute').resolves(mock);
  });

  after(() => {
    connection.execute.restore();
  });

  it('Se o retorno do model é "Pasip"', async () => {
    const product = await model.getByIdProductModel(1);
    expect(product).to.be.equal(mock[0]);
  })
})
