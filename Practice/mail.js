//install nodemailer package first

var nodemailer = require('nodemailer');
// const { text } = require('stream/consumers');
var transport = nodemailer.createTransport({
    host:'smtp.gmail.com',
    port:587,
    secure:false,
    requireTLS:true,
    auth:{
        user:'tanya.sharma@faircent.com',
        pass:'Tanya@789'
    }

});
var mailOptions={
    from:'tsaynat2468@gmail.com',
    to:'satyams2812@gmail.com',
    subject:'kutte',
    text:'kutte'
}
transport.sendMail(mailOptions,function(error,info){
    if(error){
        console.warn(error);
    }
    else{
        console.warn("mail has been sent",info.response);
    }
})
