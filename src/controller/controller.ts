import * as express from 'express';
import { inject } from 'inversify';
import {
  controller,
  httpGet,
  httpPost,
  interfaces,
} from 'inversify-express-utils';

import { Service } from '../service/service';
import { KeptnRequest } from '../models/keptnRequest';
// tslint:disable-next-line: import-name
import TYPES from '../constant/types';

@controller('/')
export class Controller implements interfaces.Controller {
  constructor(@inject(TYPES.Service) private service: Service) {  }

  @httpGet('/')
  private getEvents(
    request: express.Request,
    response: express.Response,
    next: express.NextFunction): Promise<KeptnRequest[]> {

    return this.service.getKeptnRequest();
  }

  @httpPost('/')
  private handlePostEvent(
    request: express.Request,
    response: express.Response,
    next: express.NextFunction): Promise<KeptnRequest> {

    return this.service.postKeptnRequest(request.body);
  }
}
