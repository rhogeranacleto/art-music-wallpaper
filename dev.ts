import albumRoute from './api/albums';
import { config } from 'dotenv';
import cors from 'cors';
import express from 'express';
import indexRoute from './api-deprecated/index';
import screenshotRoute from './api/screenshot';

config();

const app = express();

app.use(cors());

app.get('/api', indexRoute);
app.get('/api/screenshot', screenshotRoute);
app.get('/api/albums', albumRoute);

app.listen(8000, () => {
  console.log('subiu');
});
