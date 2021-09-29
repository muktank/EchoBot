import express from 'express';
import dotenv  from 'dotenv';
import cors from 'cors';
import parser from 'body-parser';

import echoRoutes from './routes/echoRoutes.js';

dotenv.config();
const app = express();

app.use(cors({ origin: true, credentials: true }));

// app.use(parser.urlencoded({
//     extended: true
// }));
// app.use(parser.json());

app.use(express.json({extended: false}));
app.use(echoRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`App is running in ${process.env.NODE_ENV} mode on port ${PORT}`))
