
const { token } = require('morgan');
const passport = require('passport')
const db= require('../model/user');
const gg=require('../token')

const userAdd=async(req,res)=>
{
    //console.log(req.body,)
    const data = new db({
            name:req.body.name,
            phone:req.body.phone,
            email:req.body.email,
            password:req.body.password,
            token:gg.getAuthToken({email:req.body.email,
                            password:req.body.password})
   
            })
    await data.save().then(async(result)=>
    {
        // let myToken = await result.getAuthToken();
        res.status(200).json({
            message:"Done"
            // result:result,
            // token:myToken
        });

        console.warn("new user added!..",{result});
    })
        
}


const db_list= async(req,res)=>{
    let data= await db.find()
    res.json(data)
}
module.exports={userAdd,db_list}
