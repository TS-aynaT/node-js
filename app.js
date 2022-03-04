const express= require('express')
const app = express();
const mongoose = require("mongoose")
require('dotenv').config();

app.set("view engine","ejs");

//middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))
const port=3001;
const route=require('../myProj/routes/route')

app.use('/',route)



//index route
app.get('/',(req,res)=>{
    res.status(200).json({
        type:"success",
        message:"server is up and running",
        data:null
    });
});
app.get('/send',(req,res)=>{
    res.render("index.ejs")
})

app.listen(port,console.log(`Server is working on ${port}`))