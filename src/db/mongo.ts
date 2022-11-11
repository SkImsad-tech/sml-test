import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";
import createSmlService from "./services/sml";

export const collections: { sml? } = {};

export async function connectToDatabase() {
  dotenv.config();
  console.log("process.env", process.env.DB_CONN_STRING);
  console.log("process.env from docker ", process.env.MONGODB_CONN_STRING);

  const client: mongoDB.MongoClient = new mongoDB.MongoClient(
    process.env.MONGODB_CONN_STRING || process.env.DB_CONN_STRING
  );

  await client.connect();

  const db: mongoDB.Db = client.db(process.env.DB_NAME);

  const smlCollection: mongoDB.Collection = db.collection(
    process.env.SML_COLLECTION_NAME
  );

  collections.sml = createSmlService(smlCollection);

  console.log(
    `Successfully connected to database: ${db.databaseName} and collection: ${smlCollection.collectionName}`
  );
}
