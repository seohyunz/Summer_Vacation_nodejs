var express = require('express');
var http = require('http');
var static = require('serve-static');  //경로 static를 위한 미들웨어
var path = require('path');
var bodyParser = require('body-parser');

//익스프레스 시작
var app = express();

app.set('port', process.env.PORT || 4444);

//static 미들웨어 사용
app.use(static(path.join(__dirname, 'media')));

//body-parser 미들웨어 시작
//body-parser 는 post 방식의 데이터를 주고 받을 수 있다
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//미들웨어 사용
app.use(function(req, res, next) {
    console.log('첫번째 미들웨어');

    //데이터를 주고 받을 수 있게 get, post 방식 사용
    var useAgent = req.header('User-Agent');
    // var paramName = req.query.name;
    // var paramTel = req.query.tel;
    // res.send('<h2> 서버에서 응답 User-Agent --> ' + useAgent + 
    //          '<br>paramName -->' + paramName + 
    //          '<br>paramTel -->' + paramTel + '</h2>');

    //body-parser
    var paramId = req.body.id
    var paramPw = req.body.password;
    res.send('<h2> 서버에서 응답 User-Agent --> ' + useAgent + 
             '<br>paramId -->' + paramId + 
             '<br>paramPw -->' + paramPw + '</h2>');

    //다른 사이트 이동
    res.redirect('http://www.google.com');
    //req.user = 'hong';
    req.next(); //두번째 가져오기
    // res.writeHead(200, {'Content-Type' : 'text/html;charset=utf-8'});
    // res.end('<h1>서버에서 응답한 결과 : ' + req.user + '</h1>');
});

//두번째 미들웨어 사용 (json 형태로 정의해서 send()로 가져온다)
app.use(function(req, res, next) {
    console.log('두번째 미들웨어_send()\n');

    //res.send('<h1>서버에서 응답한 결과...' + req.user + '</h1>');

    //json 형태로 정의
    var student = {name:'홍길동', tel:'010-123-123'};
    res.send(student)
    var studentStr = JSON.stringify(student);
    //res.sendStatus(studentStr);

    res.writeHead(200, {'Content-Type' : 'text/html;charset=utf-8'});
    res.end(studentStr);
});

var server = http.createServer(app).listen(app.get('port'), function() {
    console.log('익스프레스 웹서버 실행 : ' + app.get('port'));
});