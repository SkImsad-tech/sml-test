import { Collection, ObjectId } from "mongodb";
import SmlModel from "../models/sml";

export default (collection: Collection) => {
  const getAll = async () => {
    return await collection.find({}).toArray();
  };

  const insertOne = async (body: SmlModel) => {
    return await collection.insertOne({ ...body });
  };

  const updateOne = async (id: ObjectId, body: SmlModel) => {
    return await collection.findOneAndUpdate(
      { _id: new ObjectId(id) },
      { $set: { ...body } }
    );
  };

  const deleteOne = async (id: ObjectId) => {
    return await collection.deleteOne({
      _id: new ObjectId(id),
    });
  };

  return {
    getAll,
    insertOne,
    updateOne,
    deleteOne,
  };
};
