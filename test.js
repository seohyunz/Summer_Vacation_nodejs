const http = require("http"); // require라는 명령어로 http 모듈을 불러올수 있다.

const server = http.createServer((req, res) => {//http 모듈에 있는 createServer라는 함수로 Client의 요청 수립과 Server의 응답을 수행하는 과정을 처리한다.
//} 중괄호의 모양의 코드를 규칙을 보고 람다식이라고 한다.
//Client 서버 안에 아래의 함수를 집어 넣는다.
    if (req.url === "/"){ //요청을 보내는데 url로 보내는 작업이다. "/" 모양은 /를 입력할때라는 걸 말하는데, 주소 url에는 /가 기본적으로 생략되어있는 상태이다.
        res.write("<h1>Hello NodeJS Glory</h1>");//res는 응답을 의미한다. 정상적으로 접속하면 이 글씨를 출력
    } else {
        res.write(`<h1>You have entered this url : &{req.url}</h1>`);//` 모양은 따옴표가 아니라 백틱이라고 하는데 키보드 1 왼쪽에 있는 문자이다.
//위의 조건이 아니면 이 글씨를 출력한다.
//` 백틱은 ${} 를 사용해서 문자열과 변수를 적절히 같이 사용할 수 있다. 추가로 저것의 의미는 출력과 동시에 입력받은 문자를 출력을 할 수 있게 해준다. 
    }
    
    res.end();// 응답 끝
});


server.listen(3000, ()=> { //서버를 구동시키는 것이다. 3000번 포트를 열리는것이다. { } 람다식으로 익명 함수를 구현 할 수 있다.
    console.log("The server is listening on port 3000");
});