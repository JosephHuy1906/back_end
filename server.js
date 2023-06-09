import express from 'express';
import * as dotenv from 'dotenv';
dotenv.config();
import bodyParser from 'body-parser';
import cors from 'cors';
import connect from './configs/database.js';
import rootRouter from './router/index.js';
import swaggerUi from 'swagger-ui-express';
import fs from 'fs';
import YAML from 'yaml';

const app = express();
const port = process.env.PORT || 3002;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api', rootRouter);


app.use(cors({
    origin: '*'
}));

app.listen(port, async () => {
    await connect();
    console.log(`server running to port: ${port}`);
});
