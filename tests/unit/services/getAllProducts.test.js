require('mocha');
const { expect } = require('chai');
const sinon = require('sinon');

const service = require('../../../services/ProductsService');
const model = require('../../../models/ProductsModel');

describe('Testa o service getAllProducts', () => {
  const mock = 'Pasip';

  before(() => {
    sinon.stub(model, 'getAllProductsModel').resolves(mock)
  });

  after(() => {
    model.getAllProductsModel.restore();
  });

  it('Testa o service: ProductsSevices - getAllProducts', async () => {
    const result = await service.getAllProductsService();
    expect(result).to.be.eql(mock);
  });

});
