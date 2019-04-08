import { injectable } from 'inversify';

interface Data {
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
export class KeptnRequest {
  id: string;
  specversion: string;
  type: string;
  time: string;
  source: string;
  shkeptncontext: string;
  datacontenttype: string;
  data: Data;
}
