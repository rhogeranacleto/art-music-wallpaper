import express from 'express';
import indexRoute from './api/index';
import { config } from 'dotenv';
import screenshotRoute from './api/screenshot';
import cors from 'cors';

config();

const app = express();

app.use(cors());

app.get('/api', indexRoute);

app.get('/api/screenshot', screenshotRoute);

app.listen(8000, () => {

  console.log('subiu');
});