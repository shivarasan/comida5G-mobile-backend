import 'dotenv/config';
import cors from 'cors';
import bodyParser from 'body-parser';
import express from 'express';
import morgan from 'morgan';
import fs from 'fs';
import path from 'path';
import router from './routes';

// Starting point of the server
const app = express();
app.use(
  morgan('common', {
    stream: fs.createWriteStream(path.join(__dirname, 'access.log'), {
      flags: 'a',
    }),
  })
);

// Application-Level Middleware
app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

// Routes
app.use(router);

// Start
app.listen(process.env.PORT, () => console.log(`Server is listening on port ${process.env.PORT}!`));
