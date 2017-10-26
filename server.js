import express from 'express';
import path from 'path';
import endpoints from './endpoints/index';

const app = express();
const port = 3000;

app.use('/dist', express.static(path.join(__dirname, 'dist')));

app.get('/', endpoints.base);

app.listen(port, () => {
  console.log(`Listening on port: ${port}. Serving static resources via: ${path.join(__dirname, 'dist')}`);
});






