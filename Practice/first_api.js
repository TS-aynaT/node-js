var http = require('http');
var data = [{name:"Tanya",age:"23", email:"tanya@faircent.com"},
{name:"Anya",age:"13", email:"Anya@faircent.com"},
{name:"Nya",age:"25", email:"Nya@faircent.com"},
{name:"Nitya",age:"6", email:"nitya@faircent.com"}]
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'application\json'})
    res.write(JSON.stringify(data));
    res.end();
}).listen(3900)
  