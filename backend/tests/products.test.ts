import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../src/app';
import { Response } from 'superagent';
import productsMock from './mocks/products.mock';
import SequelizeProduct from '../src/database/models/SequelizeProduct';

chai.use(chaiHttp);

const { expect } = chai;

describe('Product tests', () => {
    let chaiHttpResponse: Response;

    it('Should return all products', async () => {
        sinon.stub(SequelizeProduct, 'findAll').resolves(productsMock.products as any)

        chaiHttpResponse = await chai.request(app).get('/products');

        expect(chaiHttpResponse.status).to.be.equal(200);
        expect(chaiHttpResponse.body).to.be.deep.equal(productsMock.products);
    });

    it('Should return all products', async () => {
        sinon.stub(SequelizeProduct, 'findByPk').resolves(productsMock.product as any)

        chaiHttpResponse = await chai.request(app).get('/products/1');

        expect(chaiHttpResponse.status).to.be.equal(200);
        expect(chaiHttpResponse.body).to.be.deep.equal(productsMock.product);
    });

    it('Should return 404 if product by id is not found', async () => {
        sinon.stub(SequelizeProduct, 'findByPk').resolves(null as any)

        chaiHttpResponse = await chai.request(app).get('/products/999');

        expect(chaiHttpResponse.status).to.be.equal(404);
        expect(chaiHttpResponse.body).to.be.deep.equal({ message: 'Product not found' });
    });

    it('Should edit a product', async () => {
        sinon.stub(SequelizeProduct, 'update').resolves([1]);
        sinon.stub(SequelizeProduct, 'findByPk').resolves(productsMock.product as any)

        chaiHttpResponse = await chai.request(app)
            .put('/products/1')
            .send(productsMock.newProduct);

        expect(chaiHttpResponse.status).to.be.equal(200);
        expect(chaiHttpResponse.body).to.be.deep.equal(productsMock.product);
    });

    it('Should return 400 if there is nothing to change when updating the product', async () => {
        sinon.stub(SequelizeProduct, 'update').resolves([0]);

        chaiHttpResponse = await chai.request(app)
            .put('/products/1')
            .send(productsMock.newProduct);

        expect(chaiHttpResponse.status).to.be.equal(400);
        expect(chaiHttpResponse.body).to.be.deep.equal({ message: 'There is nothing to change' });
    });

    it('Should create a product', async () => {
        sinon.stub(SequelizeProduct, 'create').resolves(productsMock.product as any);

        chaiHttpResponse = await chai.request(app)
            .post('/products')
            .send(productsMock.newProduct);

        expect(chaiHttpResponse.status).to.be.equal(201);
        expect(chaiHttpResponse.body).to.be.deep.equal(productsMock.product);
    });

    afterEach(() => {
        sinon.restore();
    })
});