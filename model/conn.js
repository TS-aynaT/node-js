const mongoose=require('mongoose')
mongoose.connect(`mongodb://localhost:${process.env.DB_PORT}/${process.env.DB_NAME}`)
const db= mongoose.connection;

db.on('err',console.log.bind("connection error"));
db.once('open',function(callback){
    console.log("connection successfull");
})

console.log("hello");
module.exports=db;