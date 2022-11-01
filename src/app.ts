import express from 'express';
import bodyParser from 'body-parser';

//
import router from './routes';
import DB from "./database/database";
import {handleError} from "./middlewares/error-response.middleware";

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

    // error handle
      app.use(handleError);
  })
  .catch((error) => console.log(error));



export default app;
