const model = require('./db/db_models');

module.exports = {
    name: {
        get: (req,res) =>{
        const username = req.body 
        function send_name(err,result){
            if(err){
                return res.status(500).send('Not serch member');
            }
            else{
                return res.status(200).json(result)
            }
        }
            model.name.get(username, send_name(err,result))

        }
    },

    money: {
        get: (req,res)=>{
            const money = req.body
        function send_money(err,result){
            if(err){
                return res.status(500).send('Not serch member');
            }
            else{
                return res.status(200).json(result)
            }
        }
            model.money.get(username, send_money(err,result))
        }
    }
}