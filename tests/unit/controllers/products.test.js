require('mocha');
const { expect } = require('chai');
const sinon = require('sinon');

const service = require('../../../services/ProductsService');

const controller = require('../../../controllers/ProductsController');

describe('testa as funções do controller de Products', () => {

  describe('testa caso positivo do getByIdProduct', () => {
    const request = {
      params: {
        id: 1,
      },
    };
    const response = {
      id: 1, name: 'Martelo de Thor'
    };
    const mock = { id: 1, name: 'Martelo de Thor' }

    before(() => {
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
      sinon.stub(service, 'getByIdProductService').resolves(mock);
    });

    after(() => {
      service.getByIdProductService.restore();
    });

    it('Status code 200', async () => {
      await controller.getByIdProductController(request, response);
      expect(response.status.calledWith(200)).to.be.true;
    });

  });



  describe('testa caso positivo de getQueryNameProductController', () => {
    const request = {
      query: {
        q: 'martelo',
      },
    };
    const response = {
      id: 1, name: 'Martelo de Thor'
    };
    const mock = [{ id: 1, name: 'Martelo de Thor' }]

    before(() => {
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
      sinon.stub(service, 'getQueryNameProductService').resolves(mock[0]);
    });

    after(() => {
      service.getQueryNameProductService.restore();
    });

    it('Status code 200', async () => {
      await controller.getQueryNameProductController(request, response);
      expect(response.status.calledWith(200)).to.be.true;
    });

  });


  describe('testa caso negativo de getQueryNameProductController', () => {
    const request = {
      query: {
        q: '',
      },
    };
    const response = {};
    const mock = [];

    before(() => {
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
      sinon.stub(service, 'getQueryNameProductService').resolves(false);
    });

    after(() => {
      service.getQueryNameProductService.restore();
    });

    it('Message Error "Product not found"', async () => {
        await controller.getQueryNameProductController(request, response);
        expect(response.status.calledWith(404)).to.be.true;
    });

  });


  describe('testa caso de error do getByIdProduct', () => {
    const request = {
      params: {
        id: 'x',
      },
    };

    const response = {};

    const mock = [];

    before(() => {
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
      sinon.stub(service, 'getByIdProductService').resolves(false);
    });

    after(() => {
      service.getByIdProductService.restore();
    });

    it('Status code 404', async () => {
      await controller.getByIdProductController(request, response);
      expect(response.status.calledWith(404)).to.be.true;
    });

  });

})
