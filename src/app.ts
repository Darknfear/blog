import express from 'express';
import bodyParser from 'body-parser';

//
import router from './routes';

//init app
const app = express();

//config
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//routes
app.use('/apis', router);


export default app;
