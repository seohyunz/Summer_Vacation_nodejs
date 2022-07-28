var express = require('express');
var http = require('http');
var app = express();
app.set('port', process.env.port||4444);
var server = http.createServer(app).listen(app.get('port'),function(){
    console.log('서버 실행'+app.get('prot'));
});