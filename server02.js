var fs = require('fs');
var http = rquire('http');
http.createServer(function(request, response){
   //이미지파일 읽기
    fs.readFile('./nodejs/eximage.png', function(error,data){
        response.writeHead(200,{'Content-Type':'image/jpeg'});
        response.end(data);
    });
}).listen(4444,function(){
    console.log('4444번 포트에서 서버 대기 중입니다.');
});

//쿠키 생성하기

//모듈 추출
var http = require('http');
http.createServer(function(reuest,response){
    //변수 선언
    var data = new Date();
    Date.setDate(date.getDate()+7);
    //쿠키 생성
    response.writeHead(200,{
        'Content-Type':'text/html',
        'Set-Cookie':['breakfast = toast', 'dinner = chicken']
    });
//쿠키 출력
    response.end('<h1>'+ http.request.headers.cookie+'<h1>');
}).listen(4444, function(){
    console.log('서버 대기 중');
})

