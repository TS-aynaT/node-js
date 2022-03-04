var jwt = require('jsonwebtoken');
const { param } = require('express/lib/request');


const getAuthToken=async function(data){
    let param={
        email:data.email,
        password:data.password
    }
    console.log(param,"paam");
    var tokenV = await jwt.sign(param,process.env.SECRET_KEY)
    //this.token= this.tokens.concat({token:tokenV})
    console.log(tokenV,"token");
    // await this.save();
    return tokenV
}
module.exports={getAuthToken}