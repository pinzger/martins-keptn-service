import 'reflect-metadata';
import { Controller } from '../src/controller/controller';
import * as express from 'express';
import { expect } from 'chai';
import 'mocha';
import * as sinon from 'sinon';
// import { Service } from '../service/service';
import { cleanUpMetadata } from 'inversify-express-utils';

describe('Controller', () => {

  beforeEach(() => {
    cleanUpMetadata();
  });
  it('should ...', async () => {
    expect(true).is.true;
  });
});
