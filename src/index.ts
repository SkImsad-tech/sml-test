import { app } from "./app";
import * as http from "http";

import { connectToDatabase } from "./db/mongo";
import * as dotenv from "dotenv";

(() => {
  const server = http.createServer(app);
  dotenv.config();

  server.listen(process.env.HTTP_PORT);
  server.on("listening", async () => {
    console.log(`Example app listening on port ${process.env.HTTP_PORT}!`);
    try {
      await connectToDatabase();
      console.log("connected to db");
    } catch (err) {
      console.error(err);
    }
  });
})();
