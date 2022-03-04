const mongoose=require('mongoose');
const conn=require('../model/conn');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const { param } = require('express/lib/request');


const user_Schema = new mongoose.Schema({
   name:String,
   phone:String,
   email:String,
   password:{
       type:String,
       select:false
   },
   token: {
    type: String,
    required:true
    // default: randToken.generate(64),
},
   
});

console.log("in user");

// user_Schema.pre('save',(next)=>{
//     var salt=bcrypt.genSaltSync(10);
//     this.password=bcrypt.hashSync(this.password,salt)
//     console.log(this.password);
//     next();

// })

// const getAuthToken=async function(data){
//     let param={
//         id:this._id,
//         email:this.email,
//         password:this.password
//     }
//     var tokenV = jwt.sign(param,process.env.SECRET_KEY);
//    // this.token= this.tokens.concat({token:tokenV})
//     console.log(tokenV,"token");
//     // await this.save();
//     return tokenV;
// }

module.exports=mongoose.model("user",user_Schema)
// module.exports={getAuthToken}