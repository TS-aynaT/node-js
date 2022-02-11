var http = require('http');
const { text } = require('node:stream/consumers');
const { type } = require('os');
var page=`<h1> Hello World </h1> <input type='text'/><br><br>
<input type='text'/><br><br>
<input type='text'/><br><br>
<input type='text'/>`

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':"text/html"})
    res.write(page);
    res.end();
}).listen(4000)