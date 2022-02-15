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
  // else{
  //   //learn_database에 연결할 예정 
  //   db = client.db('learn_database')

  //   db.collection('post').insertOne({type:'testData' , id:1} ,(err, result) => {
  //     console.log('저장이 완료되었습니다.')
  //   })

  //   //connect완료시 작성
  //   
})

// app.get('/', (req, res) => {
//   res.status(200).send('서버 개발 완료')
// })

app.get('/post', (req, res) => {
 const result = db.collection('post').insertOne({ type: Date(), id: 1 }, (err, result) => {
    if(err){
      return res.status(400).send(err)
    }
    else{
      return res.status(200).send(Date())
    }
  })
  return result
})

app.listen(PORT, () => {
      console.log(`listening on port ${PORT}`)
})

module.exports = app
