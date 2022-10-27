import { app } from "./app";
import * as http from "http";

import { MongoHelper } from "./mongo";
import { mongoConfig, httpPort } from "./config";

const server = http.createServer(app);

server.listen(httpPort);
server.on("listening", async () => {
  console.log(`Example app listening on port ${httpPort}!`);
  try {
    await MongoHelper.connect(
      `mongodb://${mongoConfig.url}?user=${mongoConfig.admin}&password=${mongoConfig.password}`
    );
    console.log("connected to db");
  } catch (err) {
    console.error(err);
  }
});
