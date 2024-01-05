import express, { Express } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import user from './views/user';
import mongoose from 'mongoose';

dotenv.config({path:"/env"});
// console.log(processenv)
const MONGOURI =
  process.env.MONGOURI || 'mongodb+srv://sukshamaryaitwaves:T5N8XRxy4q4bfRYT@cluster0.7k89d2j.mongodb.net/';
const app: Express = express();
const port = process.env.PORT || 3000;
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

mongoose.connect(MONGOURI);
mongoose.connection.on('connected', () => {
  console.log('Connected to mongo DB!');
});

mongoose.connection.on('error', (err: string) => {
  console.log('Error connecting', err);
});

app.use('/api', user);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
