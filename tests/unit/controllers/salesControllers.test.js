require('mocha');
const sinon = require('sinon');
const { expect } = require('chai');

const service = require('../../../services/SalesService');

const controller = require('../../../controllers/SalesControllers');

describe('testa as funções do controller de Sales', () => {

  describe('testa os casos positivos de getAllSaleControllers', () => {
    const request = {};
    const response = {};

    const mock = 'pasip';

    before(() => {
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
      sinon.stub(service, 'getAllSalesServices').resolves(mock)
    });

    after(() => {
      service.getAllSalesServices.restore();
    });

    it('Status Code 200', async () => {
      await controller.getAllSaleControllers(request, response);
      expect(response.status.calledWith(200)).to.be.true;
    });

  });


  describe('testa os casos positivos de getByIdSaleController', () => {
    const request = {
      params: {
        id: 1,
      },
    };
    const response = [
      {
        productId: 3,
        quantity: 15,
        date: "2022-07-06T23:30:23.000Z"
      }
    ];

    const mock = [
      {
        productId: 3,
        quantity: 15,
        date: "2022-07-06T23:30:23.000Z"
      }
    ];

    before(() => {
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
      sinon.stub(service, 'getByIdSaleService').resolves(mock[0])
    });

    after(() => {
      service.getByIdSaleService.restore();
    });

    it('Status Code 200', async () => {
      await controller.getByIdSaleController(request, response);
      expect(response.status.calledWith(200)).to.be.true;
    });

  });

  describe('Testa as falhas no controller getAllSaleControllers', async () => {
    const request = {};
    const response = {};

    before(() => {
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();

      sinon.stub(service, 'getAllSalesServices').throws(new Error('Error'));
    });

    after(() => {
      service.getAllSalesServices.restore();
    });

    it('Status Code Error', async () => {
      await controller.getAllSaleControllers(request, response);
      expect(response.status.calledWith(500)).to.be.true;
    });
  });

})
