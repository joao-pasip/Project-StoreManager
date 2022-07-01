require('mocha');
const { expect } = require('chai');
const sinon = require('sinon');

const service = require('../../../services/ProductsService');

const controller = require('../../../controllers/ProductsController');

describe('Testa controller PoductsControllers - getAllProductsController', async () => {

  describe('Testa as falhas no controller getAllProductsController', async () => {
    const request = {};
    const response = {};

    before(() => {
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();

      sinon.stub(service, 'getAllProductsService').throws(new Error('Error'));
    });

    after(() => {
      service.getAllProductsService.restore();
    });

    it('Status Code Error', async () => {
      await controller.getAllProductsController(request, response);
      expect(response.status.calledWith(404)).to.be.true;
    });
  });

  describe('Testa os sucessos no controller getAllProductsController', async () => {
    const request = {};
    const response = {};

    const mock = 'Pasip'
    before(() => {
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();

      sinon.stub(service, 'getAllProductsService').resolves(mock);
    });

    after(() => {
      service.getAllProductsService.restore();
    });

    it('Status Code 200', async () => {
      await controller.getAllProductsController(request, response);
      expect(response.status.calledWith(200)).to.be.true;
    });
  });
})
