require('mocha');
const { expect } = require('chai');
const sinon = require('sinon');

const connection = require('../../../helpers/connection');
const model = require('../../../models/SalesModel');

const mock = require('../../../__tests__/_dataMock');

describe('Testa o getAllSalesModel', async () => {
  const mockSale = mock.rightSaleBody;

  before(() => {
    sinon.stub(connection, 'execute').resolves([mockSale]);
  });

  after(() => {
    connection.execute.restore();
  });

  it('should return an array', async () => {
    const sale = await model.getAllSaleModel();
    expect(sale).to.be.a('array');
  });
})


describe('Testa o getAllSalesModel se existe', async () => {
    const mockSale = [];

    before(() => {
      sinon.stub(connection, 'execute').resolves([mockSale]);
    });

    after(() => {
      connection.execute.restore();
    });

    it('should return an empty array', async () => {
      const saleEmpty = await model.getAllSaleModel();
      expect(saleEmpty).to.be.empty;
    });
})


describe('test getByIdSaleModel', async () => {
  const mockSaleById = mock.saleCreateResponse;

  before(() => {
    sinon.stub(connection, 'execute').resolves([[mockSaleById]]);
  });

  after(() => {
    connection.execute.restore();
  });

  it('should return array', async () => {
    const saleById = await model.getByIdSaleModel(1);
    expect(saleById).to.be.a('array');
  });

})

// describe('test createSaleModel', async () => {
//   const mockSaleById = 1;

//   before(() => {
//     sinon.stub(connection, 'execute').resolves(mockSaleById);
//   });

//   after(() => {
//     connection.execute.restore();
//   });

//   it('should return insertId', async () => {
//     const saleById = await model.createSaleModel();
//     console.log(saleById);
//     expect(saleById).to.include(mockSaleById);
//   });
// })

describe('test deleteSaleModel', async () => {
  const mockSaleById = mock.saleCreateResponse;

  before(() => {
    sinon.stub(connection, 'execute').resolves([mockSaleById]);
  });

  after(() => {
    connection.execute.restore();
  });

  it('should return array', async () => {
    await model.deleteSaleModel(1);
    expect(connection.execute.calledOnce).to.be.true;
    // expect(deleteSale).to.be.a('object');
  });

})
