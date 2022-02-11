var http = require('http');
http.createServer(function(req,res){
    res.write("Hello Everyone.How are u??");
    res.end();

}).listen(2000)