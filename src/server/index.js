import express from 'express';
import graphQl from 'express-graphql';
import routing from './middleware/routing.js';
import {schema} from './graphql/schema.js';

const app = express();

app.use('/graphql', graphQl({schema: schema}));
app.use(routing);

app.listen(4000, () => {
  console.info('Server start at http://localhost:4000');
})