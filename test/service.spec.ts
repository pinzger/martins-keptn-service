import 'reflect-metadata';
import * as express from 'express';
import { expect } from 'chai';
import 'mocha';
import * as sinon from 'sinon';
import { cleanUpMetadata } from 'inversify-express-utils';
import { Service } from '../src/service/service';
import { Event } from '../src/models/event';

describe('Service', () => {
// tslint:disable-next-line: prefer-const
  service: Service;
  beforeEach(() => {
    cleanUpMetadata();
  });
  it('should ...', async () => {
    expect(true).is.true;
  });
});
