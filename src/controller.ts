import { collections } from "./db/mongo";
import { WithId } from "mongodb";
import {
  Controller,
  Route,
  Post,
  Get,
  Put,
  Delete,
  BodyProp,
  Tags,
} from "tsoa";
import { IAddReq, IListRes, IUpdateReq } from "./Icontroller";

@Route("pupils")
@Tags("PupilController")
export class PupilController extends Controller {
  @Get("/list")
  public async getAll(): Promise<IListRes[]> {
    try {
      let items = await collections.sml.getAll();
      const filteredItems: WithId<IListRes>[] = items.map((item) => {
        return { id: item._id, ...item, _id: undefined };
      });
      return filteredItems;
    } catch (err) {
      this.setStatus(500);
      console.error("Caught error", err);
    }
  }

  @Post("/add")
  public async create(@BodyProp() body: IAddReq): Promise<string> {
    const result = await collections.sml.insertOne(body);
    return result.insertedId.toString();
  }

  @Put("/{id}")
  public async update(id: string, @BodyProp() body: IUpdateReq): Promise<void> {
    await collections.sml.updateOne(id, body);
  }

  @Delete("/{id}")
  public async remove(id: string): Promise<void> {
    await collections.sml.deleteOne(id);
  }
}
