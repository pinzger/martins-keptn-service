import 'reflect-metadata';
import * as bodyParser from 'body-parser';
import * as express from 'express';
import { Container } from 'inversify';
import {
  interfaces,
  InversifyExpressServer,
  TYPE,
} from 'inversify-express-utils';

// tslint:disable-next-line: import-name
import TYPES from './constant/types';
import { Service } from './service/service';

// import controllers
import './controller/controller';

// tslint:disable-next-line: import-name
import RequestLogger = require('./middleware/requestLogger');

const port: number = Number(process.env.PORT) || 5001; // or from a configuration file

// set up container
const container = new Container();

// set up bindings
container.bind<Service>(TYPES.Service).to(Service);

// create server
const server = new InversifyExpressServer(container);

// config app
server.setConfig((app: any) => {
  app.use(bodyParser.json({ type: 'application/*' }));
  app.use(RequestLogger);
});

server.setErrorConfig((app: any) => {
  app.use(
    (
      err: Error,
      request: express.Request,
      response: express.Response,
      next: express.NextFunction,
    ) => {
      console.error(err.stack);
      response.status(500).send('Something broke in my keptn service!');
    },
  );
});

const serverInstance = server.build();
serverInstance.listen(port);
console.info(`Server is listening at http://localhost:${port}`);
