import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../src/app';
import { Response } from 'superagent';
import loginMock from './mocks/login.mock';
import LoginService from '../src/services/LoginService';

chai.use(chaiHttp);

const { expect } = chai;

describe('Login tests', () => {
    let chaiHttpResponse: Response;

    beforeEach(() => sinon.restore())

    it('Should return a token', async () => {
        sinon.stub(LoginService.prototype, 'login').resolves({ status: 'SUCCESSFUL', data: { token: 'validToken' } })

        chaiHttpResponse = await chai.request(app)
            .post('/login')
            .send(loginMock.login);

        expect(chaiHttpResponse.status).to.be.equal(200);
        expect(chaiHttpResponse.body).to.haveOwnProperty('token')
            .that.is.a('string');
        expect(chaiHttpResponse.body).to.be.deep.equal({ token: 'validToken' });
    });

    it('Should return a bad request if email is not provided during login', async () => {
        chaiHttpResponse = await chai.request(app).post('/login').send(loginMock.loginWithoutUsername);

        expect(chaiHttpResponse.status).to.be.equal(400);
        expect(chaiHttpResponse.body).to.be.deep.equal({ message: 'All fields must be filled' });
    });

    it('Should return a bad request if password is not provided during login', async () => {
        chaiHttpResponse = await chai.request(app).post('/login').send(loginMock.loginWithoutPassword);

        expect(chaiHttpResponse.status).to.be.equal(400);
        expect(chaiHttpResponse.body).to.be.deep.equal({ message: 'All fields must be filled' });
    });

    it('Should return unauthorized if password or email is invalid', async () => {
        sinon.stub(LoginService.prototype, 'login').resolves({ status: 'UNAUTHORIZED', data: { message: 'Invalid username or password' } })

        chaiHttpResponse = await chai.request(app)
            .post('/login')
            .send(loginMock.login);

        expect(chaiHttpResponse.status).to.be.equal(401);
        expect(chaiHttpResponse.body).to.be.deep.equal({ message: 'Invalid username or password' });
    });

    afterEach(() => {
        sinon.restore();
    })
});