import { inject, injectable } from 'inversify';
import { Event } from '../models/event';

@injectable()
export class Service {
  constructor() { }

  // return empty event array
  public getEvents(): Promise<Event[]> {
    return new Promise<Event[]>((resolve, reject) => {
      resolve(<Event[]>[]);
    });
  }

  public postEvent(event: Event): Promise<Event> {
    return new Promise<Event>((resolve, reject) => {
      console.log(`Received event: ${JSON.stringify(event)}`);
      resolve(event);
    });
  }
}
