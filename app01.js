console.log("Hello world");
console.log(10+10);

console.time('전체시간');
console.log('hello');
var sum = 0;
for(i = 0;i<1000; i++){
    sum+=i;
}
console.timeEnd('전체시간');

console.log('filename:',__filename);
console.log('dirname:',__dirname);
console.log('%d+%d=%d:',10,20,10+20);
console.log('%d+%d=%d:',10,20,10+20,30);
console.log('%d+%d=%d:',10,20);
console.log("JSPN:%j",{name:"tom"});

console.log('\u001b[33m', 'Hello World...'); // 글씨 색상
console.log('\u001b[31m', 'Hello World...');
console.log('\u001b[37m', 'Hello World...');

console.log('\u001b[42m','Hello world...'); //배경 색상
console.log('\u001b[0m'); //초기화


console.time('mirim');
var output =0;
for(var i =1; i<=100; i++){
    output +=i;
}

process.exit(); //프로그램 종료
console.log('Result:', output);
console.timeEnd('mirim');

if(1){
    var x =10;
}
console.log(x);

/*if(1){
    const y =20
}
console.log(y); const 범위를 벗어나 에러 */

var x =10;
console.log(x);

const y =100; //값을 바꿀 수 없음
console.log(y); 

let z =1000;//바꿀 수 있음
z=10;
console.log(z);

const num1 =1;
const num2 =2;
const string = `${nunm1} 더하기 ${num2} `; //문자를 합칠 수 있음
console.log(string);


//함수
function helloworld(){
    console.log('Hello World');
    hellonode();
}

function hellonode(){
    console.log('node');
}
helloworld();

//화살표 함수
function add(x,y){
    return x+y;
}
const add1 = function(x,y){
    return x+y;
}
const add3 = (x,y)=>x+y; //function 대신 사용가능  

const fs = require('fs'); //파일 내용 읽기
fs.readFile('./app01.js',(err,data)=>{
    if(err){
        throw err;
    }
    console.log(data.toString());
});

//setTimeout
function run(){
    console.log('3초후 실행');
}
console.log('시작');
setTimeout(run,3000);
console.log('끝');

const odd = '홀수';
const even = '짝수';
module.exports = {odd,even};

const ddd = require('.\mmodule01');
var qlus = ddd.aaa(2,10);


//os모듈
const os = require('os');
console.log('운영체제 정보');
console.log('os.arch():', os.arch());
console.log('os.type():', os.type());
console.log('os.hostname', os.hostname());

console.log('경로');
console.log('os.homedir():', os.homedir());

console.log('cpu정보');
console.log('os.cpus():', os.cpus());

//path 모듈
const path = require('path');
const string2 = __filename;
console.log('파일명은:',___filename);




