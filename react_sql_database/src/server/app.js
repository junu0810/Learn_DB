const express = require('express');
const indexRouter = require('./server/routers/index')
const port = 5000;
const cors = require('cors')

const app = express();

const corsOptions ={
  origin:'http://localhost:3000', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200
}
app.use(cors(corsOptions))
app.use(express.json({strict:false}));
app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter);


module.exports = app.listen(port, () => {
    console.log(`${port}로 서버가 시작되었습니다.`);
  });
