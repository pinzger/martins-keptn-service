import { inject, injectable } from 'inversify';
import { KeptnRequest } from '../models/keptnRequest';

@injectable()
export class Service {
  constructor() { }

  // return empty event array
  public getKeptnRequest(): Promise<KeptnRequest[]> {
    return new Promise<KeptnRequest[]>((resolve, reject) => {
      resolve(<KeptnRequest[]>[]);
    });
  }

  public postKeptnRequest(keptnRequest: KeptnRequest): Promise<KeptnRequest> {
    return new Promise<KeptnRequest>((resolve, reject) => {
      console.log(`Received event: ${JSON.stringify(keptnRequest)}`);
      resolve(keptnRequest);
    });
  }
}
