const { get } = require('../routers')
const database = require('./db_index')

module.exports ={
    name: {
        get:(name,callback) =>{
            const namestring = `SELECT name FROM user_info WHERE name=${name}`
        
        database.query(namestring,(err,result)=>{
            callback(err, result)
        })    
        }
    },

    money:{
        get: (name,callback) =>{
            const namestring = `SELECT money FROM user_info WHERE name=${name}`

        database.query(namestring, (err,result)=>{
            callback(err,result)
        })
    }
    }
}