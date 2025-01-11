import express from 'express';
import 'dotenv/config';
import { MongoClient } from 'mongodb'
import bodyParser from 'body-parser';
import cors from 'cors'


const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(cors())

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'PasswordManager';
await client.connect();
const db = client.db(dbName);

// get all the passwrods
app.get('/', async (req, res) => {
    const collection = db.collection('documents');
    const findResult = await collection.find({}).toArray();
    console.log("get request")
    res.json(findResult)
  })
  
  // save the password
  app.post('/', async (req, res) => {
    const data = req.body;
    console.log(data);
    const collection = db.collection('documents');
    const added = await collection.insertOne(data);
    const findResult = await collection.find({}).toArray();
    console.log("post request")
    res.json(findResult)
  })
  
  // delete the password
  app.delete('/', async (req, res) => {
    const data = req.body;
    console.log(data);
    const collection = db.collection('documents');
    const deletedResult = await collection.deleteOne(data);
    const findResult = await collection.find({}).toArray();
    console.log("delete request")
    res.json(findResult)
})

// delete all the password
// app.delete('/all', async (req, res) => {
//     const data = req.body;
//     const collection = db.collection('documents');
//     const findResult = await collection.deleteMany(collection.find({}));

//   res.send({Success:true})
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})