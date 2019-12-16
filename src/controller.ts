import { MongoHelper } from './mongo'
import { Controller, Route, Post, Get, Put, Delete, BodyProp } from 'tsoa'
import { IAddReq, IListRes, IUpdateReq } from './Icontroller'

@Route('pupils')
export class PupuilController extends Controller {
  @Get('/list')
  public async getAll(): Promise<IListRes[]> {
    try {
      let items = await MongoHelper.getAll() 
      items = items.map(item => { return { id: item._id, ...item, _id: undefined } })
      return items
    } catch (err) {
      this.setStatus(500)
      console.error('Caught error', err)
    }
  }
  
  @Post('/add')
  public async create(@BodyProp() body: IAddReq): Promise<string> {
    const result = await MongoHelper.insertOne({ body })
    return result.insertedId.toString()
  }
  
  @Put('/{id}')
  public async update(id: string, @BodyProp() body: IUpdateReq): Promise<void> {
    await MongoHelper.updateOne({ id, body })
  }
  
  @Delete('/{id}')
  public async remove(id: string): Promise<void> {
    await MongoHelper.deleteOne(id)
  }
}
