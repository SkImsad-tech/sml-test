import { ObjectId } from "mongodb";

export default interface SML {
  fio: string;
  score: number;
  birthday: string;
  _id?: ObjectId;
}
