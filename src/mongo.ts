import * as mongodb from 'mongodb'

export class MongoHelper {
  public static client: mongodb.MongoClient
  public static testCollection: mongodb.Collection

  // if we want to use custom db/collection
  private static getCollection () {
    return MongoHelper.client.db('sml').collection('test')
  }
  
  public static connect(url: string, login?: string, password?: string) {
    return new Promise((resolve, reject) => {
      mongodb.MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client: mongodb.MongoClient) => {
        if (err) {
          reject(err)
        } else {
          MongoHelper.client = client
          MongoHelper.testCollection = client.db('sml').collection('test')
          resolve(client)
        } 
      })
    })
  }

  public static async getAll() {
    return MongoHelper.testCollection.find({}).toArray()
  }

  public static async insertOne({ body }) {
    return MongoHelper.testCollection.insertOne({ ...body })
  }

  public static async updateOne({ id, body }) {
    return MongoHelper.testCollection.findOneAndUpdate({ "_id": new mongodb.ObjectId(id) }, {$set : { ...body } })
  }

  public static async deleteOne(id) {
    return MongoHelper.testCollection.remove({ "_id": new mongodb.ObjectId(id) })
  }
}