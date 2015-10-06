import express from 'express';
import routing from './middleware/routing.js';

const app = express();

app.use(routing);

app.listen(4000, () => {
  console.info('Server start at http://localhost:4000');
})