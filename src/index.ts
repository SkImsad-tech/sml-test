import { app } from './app'
import * as http from 'http'

import { MongoHelper } from './mongo'

const PORT = 3001
const server = http.createServer(app)

server.listen(PORT)
server.on('listening', async () => {
  console.log(`Example app listening on port ${PORT}!`)
  try {
    await MongoHelper.connect('mongodb://localhost:27017?user=mongoadmin&password=secret')
    console.log('connected to db')
  } catch (err) {
    console.error(err)
  }
})
