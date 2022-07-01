require('mocha');
const { expect } = require('chai');
const sinon = require('sinon');

const service = require('../../../services/ProductsService');
const model = require('../../../models/ProductsModel');

describe('Testa o service create', async () => {
  const mock = 'Pasip';

  before(() => {
    sinon.stub(model, 'createProductModel').resolves(mock)
  });

  after(() => {
    model.createProductModel.restore();
  });

  it('Testa o service: ProductsSevices - getAllProducts', async () => {
    const result = await service.createProductService('Pasip');
    expect(result).to.be.eql(mock);
  });

});
