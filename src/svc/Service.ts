import 'reflect-metadata';
import { injectable, inject } from 'inversify';
import { RequestModel } from './RequestModel';

@injectable()
export class Service {

  constructor() {}

  public async handleRequest(event: RequestModel): Promise<boolean> {
    return true;
  }
}
