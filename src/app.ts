import * as express from "express";
import * as bodyParser from "body-parser";
import * as cors from "cors";

import { loggerMiddleware } from "./loggerMiddleware";
import { connectToDatabase } from "./db/mongo";
import { RegisterRoutes } from "./routes";
import * as swaggerUI from "swagger-ui-express";

const app = express();

async () => {
  app.use(cors());
  app.use(bodyParser.json());
  app.use(loggerMiddleware);
  RegisterRoutes(app);
  await connectToDatabase();

  try {
    const swaggerDocument = require("../swagger.json");
    app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));
  } catch (err) {
    console.error(err);
  }
};

export { app };
