require('mocha');
const { expect } = require('chai');
const sinon = require('sinon');

const service = require('../../../services/ProductsService');
const model = require('../../../models/ProductsModel');

describe('Testa o service getByIdProduct', () => {
  const mock = ['Pasip'];

  before(() => {
    sinon.stub(model, 'getByIdProductModel').resolves(mock)
  });

  after(() => {
    model.getByIdProductModel.restore();
  });

  it('Testa o service: ProductsSevices - getByIdProductService', async () => {
    const result = await service.getByIdProductService(1);
    expect(result).to.be.eql(mock[0]);
  });

});
