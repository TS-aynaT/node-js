var http = require('http');
var fs = require('fs');
http.createServer(function(req,res) 
    {   
        fs.readFile('sample.html',function(err,data)       
        {
            console.log(err,'err')
            res.writeHead(200,{'Content': 'text/html'})
            res.write(data)
            return res.end()   
        })
}).listen(7000)