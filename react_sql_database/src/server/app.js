const express = require('express');
const indexRouter = require('./routers/index');

const app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter);


module.exports = app.listen(port, () => {
    console.log(`{port}로 서버가 시작되었습니다.`);
  });
