var http = require('http');
var jade = require('jade');
var fs = require('fs');

http.createServer(function(request, response){
    fs.readFile('JadePage.jade', 'utf8', function(error, data){
        var fn = jade.commpile(data);
        response.writeHead(200, {'Content-Type':'text/html ; charset= utf-8'});
        responseend(fn({
            name : 'node.js'
            
        }))
    })
})
