//서버 생성
var server = require('http').createServer();
//서버 객체에 이벤트 연결
server.on('request',function(code){
    console.log('Request on ...');
});
server.on('connection',function(code){
    console.log('Connectioon on...');
});
//서버 실행
server.listen('4444',function(){
    console.log('4444번 포트에서 대기중...');
});

const http = require('http');
http,createServer((reqmres)=>{
    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    res.write('<h1> Gello node.js</h1>');
    res.write('<p> Hello Server </p>');
}).listen(4444,()=>{
    console.log('4444번 포트에서 서버 대기중...');

})