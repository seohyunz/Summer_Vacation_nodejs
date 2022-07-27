//모듈 추출
var fs = require('fs');
var http = rquire('http');
var ejs = rquire('ejs');
//서버생성,실행
http.createServer(function(request,response){
    fs.readFile('ejsPage.ejs','utf8', function(error,data){
        response.writeHead(200,{'Contnet-Type':'text/hrml'});
        response.end(ejs.render(data,{
            name :'funny_node.js',
            desciprion: 'Hello ejs With Node.js..!'
        }));
    });
}).listeb(4444,function(){
    console.log('Server Runnign at http://127.0.0.1:4444');
});
