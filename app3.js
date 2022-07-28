var express = require('express');
var http = require('http');
var app = express();
app.set('port', process.env.port||4444);
app.use(function(req,res,next){
    console.log('1');
    req.user='hong';
    req.next();
   // res.writeHead(200,{'Content-Type':'text/html:charset = utf-8'});
    //res.end('<h1>결과'+req.user+'</h1>');
});
//2번째 미들웨서 사용
app.use(function(req,res,next){
    console.log('2');
    var student={name:'홍길동',tel:"010-101-101"};
    res.send(student);
    var studentStr = JSON.stringify(student);
   // res.send(studentStr);
    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    res.end(studentStr);
});

var server = http.createServer(app).listen(app.get('port'),function(){
    console.log('서버 실행'+app.get('prot'));
});