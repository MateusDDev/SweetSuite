import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../src/app';
import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe('App tests', () => {
  let chaiHttpResponse: Response;

  it('API is running', async () => {
    chaiHttpResponse = await chai.request(app).get('/');

    expect(chaiHttpResponse.body).to.be.deep.equal({ message: 'Server running' });
    expect(chaiHttpResponse.status).to.be.equal(200);
  });

  afterEach(() => {
    sinon.restore();
  })
});
