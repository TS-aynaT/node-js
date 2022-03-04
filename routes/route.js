const express=require('express')
const route = express.Router();
const conn= require('../Controller/func')
const fast2sms=require('fast-two-sms')

route.use(express.urlencoded({extended:false}))


route.post('/ph',conn.userAdd)

console.log("connected to route");

route.post('/send',async(req,res)=>{
    const response=await fast2sms.sendMessage({authorization:process.env.API_KEY, message:req.body.message,numbers:[req.body.number]})
        res.send(response)
})

route.get('/ls',conn.db_list)
module.exports = route