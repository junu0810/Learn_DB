const mysql = require('mysql');
const dotenv = require('dotenv');
const config = require('../config/config');
dotenv.config();

const learn_mysql = mysql.createConnection(
    config[process.env,NODE_ENV || 'development']
);

learn_mysql.connect((err)=>{
    if(err){
        throw err;
    }
});

module.exports = learn_mysql