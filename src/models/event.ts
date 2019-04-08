import { injectable } from 'inversify';

interface IEvent {
  timestamp: string;
  githuborg: string;
  project: string;
  teststategy: string;
  deploymentstrategy: string;
  stage: string;
  service: string;
  image: string;
  tag: string;
}

@injectable()
export class Event implements IEvent {
  constructor(
    public timestamp: string,
    public githuborg: string,
    public project: string,
    public teststategy: string,
    public deploymentstrategy: string,
    public stage: string,
    public service: string,
    public image: string,
    public tag: string,
    ) { }
}
