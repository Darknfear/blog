import express from 'express';
import bodyParser from 'body-parser';

//
import router from './routes';
import DB from "./database/database";

//init app
const app = express();

//config
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//init db


DB.initialize()
  .then(() => {
    DB.runMigrations();
    //routes
    app.use("/apis", router);
  })
  .catch((error) => console.log(error));



export default app;
