import express from 'express';
import indexRoute from './api-deprecated/index';
import { config } from 'dotenv';
import screenshotRoute from './api/screenshot';
import albumRoute from './api/albums';
import cors from 'cors';

config();

const app = express();

app.use(cors());

app.get('/api', indexRoute);
app.get('/api/screenshot', screenshotRoute);
app.get('/api/albums', albumRoute);

app.listen(8000, () => {

  console.log('subiu');
});