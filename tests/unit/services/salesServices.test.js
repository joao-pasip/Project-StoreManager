require('mocha');
const { expect } = require('chai');
const sinon = require('sinon');

const service = require('../../../services/SalesService');
const model = require('../../../models/SalesModel');

const mock = [
  {
    'saleId': 1,
    'productId': 1,
    'quantity': 5,
    'date': '2022-07-06T16:30:10.000Z'
  }
];

describe('test salesServices', () => {

  describe('test getAllSalesServices', () => {
    before(() => {
      sinon.stub(model, 'getAllSaleModel').resolves([mock]);
    });

    after(() => {
      model.getAllSaleModel.restore();
    });

    it('Has the following attributes: saleId, productId, quantity, date', async () => {
      const [result] = await service.getAllSalesServices();
      expect(result).to.be.a('array');
      expect(result[0]).to.have.property('saleId');
      expect(result[0]).to.have.property('productId');
      expect(result[0]).to.have.property('quantity');
      expect(result[0]).to.have.property('date');
    })

  });

  describe('test getByIdSaleService', () => {
    before(() => {
      sinon.stub(model, 'getByIdSaleModel').resolves([mock]);
    });

    after(() => {
      model.getByIdSaleModel.restore();
    });

    it('Has the following attributes: productId, quantity, date', async () => {
      const [result] = await service.getByIdSaleService();
      expect(result).to.be.a('array');
      expect(result[0]).to.have.property('productId');
      expect(result[0]).to.have.property('quantity');
      expect(result[0]).to.have.property('date');
    });

  });

  describe('test deleteSaleService', () => {
    const mockDelete = {
      affectedRows: 0
    };

    before(() => {
      sinon.stub(model, 'deleteSaleModel').resolves(mockDelete);
    });

    after(() => {
      model.deleteSaleModel.restore();
    });

    it('if affectedRows equal 0', async () => {
      try {
        await service.deleteSaleService(1);
      } catch (error) {
        expect(error.message).to.eql('Sale not found');
      }
    });

  })

  describe('Error', () => {

    before(() => {
      sinon.stub(model, 'getByIdSaleModel').resolves([]);
    });

    after(() => {
      model.getByIdSaleModel.restore();
    });

    it('If sale not found', async () => {
      try {
        await service.getByIdSaleService(1);
      } catch (error) {
        expect(error.message).to.equal('Sale not found');
      }
    });

  })

})
