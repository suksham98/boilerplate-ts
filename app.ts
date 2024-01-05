import express, { Express, Request, Response } from 'express';
import { dbConnect } from './bin/dbConnection';
import { serverConfig } from './config/dbConfig';
const router = express.Router();

require('dotenv').config();

const app: Express = express();
const port: number | string = process.env.PORT || 3000;

export { express, Request, Response };

app.use(express.json());

require('./views/index')(app);

dbConnect(serverConfig.mongodb.url);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
