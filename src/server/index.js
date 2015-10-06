import Relay from 'react-relay';
import express from 'express';
import graphQl from 'express-graphql';
import routing from './middleware/routing.js';
import {schema} from './graphql/schema.js';

const port = 4000;
const appPath = `http://localhost:${port}`
const graphqlPath = `${appPath}/graphql`;

Relay.injectNetworkLayer(
  new Relay.DefaultNetworkLayer('http://localhost:4000/graphql')
);

const app = express();

app.use('/graphql', graphQl({schema: schema}));
app.use(routing);

app.listen(4000, () => {
  console.info(`Server start at ${appPath}`);
})