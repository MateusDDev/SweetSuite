import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../src/app';
import { Response } from 'superagent';
import loginMock from './mocks/login.mock';
import LoginService from '../src/services/LoginService';
import JWT from '../src/utils/JWT';
import SequelizeUser from '../src/database/models/SequelizeUser';
import userMock from './mocks/user.mock';

chai.use(chaiHttp);

const { expect } = chai;

describe('User tests', () => {
    let chaiHttpResponse: Response;
    const token = 'ValidToken';

    beforeEach(() => {
        sinon.stub(JWT, 'sign').returns(token)
        sinon.stub(JWT, 'verify').returns({ id: 1 })
    })


    it('Should return a user', async () => {
        sinon.stub(SequelizeUser, 'findByPk').resolves(userMock.validUser as any);

        chaiHttpResponse = await chai.request(app)
            .get('/user')
            .set('authorization', token);

        expect(chaiHttpResponse.status).to.be.equal(200);
        expect(chaiHttpResponse.body).to.be.deep.equal(userMock.validUser);
    });

    it('Should return 404 if user is not found', async () => {
        sinon.stub(SequelizeUser, 'findByPk').resolves(null);

        chaiHttpResponse = await chai.request(app)
            .get('/user')
            .set('authorization', token);

        expect(chaiHttpResponse.status).to.be.equal(404);
        expect(chaiHttpResponse.body).to.be.deep.equal({ message: 'User not found' });
    });

    afterEach(() => {
        sinon.restore();
    })
});