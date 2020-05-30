import express from 'express';
import indexRoute from './api/index';
import { config } from 'dotenv';

config();

const app = express();

app.get('/', indexRoute);

app.listen(8000, () => {

  console.log('subiu');
});