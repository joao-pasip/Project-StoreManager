require('mocha');
const { expect } = require('chai');
const sinon = require('sinon');

const service = require('../../../services/ProductsService');
const model = require('../../../models/ProductsModel');

describe('test deleteProductService', () => {
    const mockDelete = {
      affectedRows: 0
    };

    before(() => {
      sinon.stub(model, 'deleteProductModel').resolves(mockDelete);
    });

    after(() => {
      model.deleteProductModel.restore();
    });

    it('if affectedRows equal 0', async () => {
      try {
        await service.deleteProductService(1);
      } catch (error) {
        expect(error.message).to.eql('Product not found');
      }
    });

  })
