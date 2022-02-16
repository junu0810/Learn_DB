require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 4000
const morgan = require('morgan')
const Mongo = require('mongodb').MongoClient

// app.use(nodemon())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(morgan('dev'))
app.use(
  cors({
    credentials: true,
    origin: process.env.ORIGIN,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  })
)

let db;
Mongo.connect(`mongodb+srv://Baek:${process.env.DB_PASSWORD}@cluster0.jolds.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, (err, client) => {
  if (err) {
    console.log('서버연결에 실패했습니다.')
    console.log(err)
  }
  else {
    db = client.db('learn_database')
  } 
})

app.post('/update', async (req,res) => {
  const result = await db.collection('post').updateOne({_id:req.body.id},{$set: {type:Date()}})
  if(result.matchedCount !== 0){
    return res.status(200).json({message:'update complete'})
  }
  else{
    return res.status(400).json({message:'update fail'})
  }
})

app.post('/post', (req, res) => {
 db.collection('post').insertOne({ type: Date(), _id: req.body.id }, (err, result) => {
    if(err){
      return res.status(400).send(err)
    }
    else{
      db.collection('counter').updateOne({_id:'counting'},{$inc: {count:1}})
      return res.status(200).send(Date())
    }
  })
})

app.get('/get', async (req,res) => {
  // const result;

  const result = await db.collection('post').findOne({_id:'baek'})
  console.log(result)

  return res.status(200).json(result)
})





app.listen(PORT, () => {
      console.log(`listening on port ${PORT}`)
})

module.exports = app
