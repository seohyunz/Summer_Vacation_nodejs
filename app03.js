//fs모듈
const fs = require('fs');
fs.readFile('./sam.txt', (err,data)=>{
    if(err){
        throw err;
    } 
    console.log(data.toString()); //문자열로 변환
})

//promises속성 사용
const fs = require('fs').promises;
fs.readFile('./sam.txt').then((data)=>{
    console.log(data);
    confirm.log(data.toString());
}).catch((err)=>{
    console.error(err);
});

//동기식 파일 읽기
//순서대로 나온다.
const fs = require('fs'); 
console.log('시작');
let data = fs.readFileSync('./sam.txt');
console.log('1',data.toString());
data = fs.readFileSync('./sam.txt');
console.log('2', data.toString());
data = fs.readFileSync('./sam.txt');
console.log('3', data.toString());
console.log('끝');


//비동기식 파일 읽기
//실행할 때마다 순서가 다르게 나온다.
const fs = require('fs'); 
console.log('시작');
fs.readFileSync('./sam.txt',(err,data)=>{
    if(err){
        throw err;
    }
    console.log('1',data.toString());
});
fs.readFileSync('./sam.txt',(err,data)=>{
    if(err){
        throw err;
    }
    console.log('2',data.toString());
});
fs.readFileSync('./sam.txt',(err,data)=>{
    if(err){
        throw err;
    }
    console.log('3',data.toString());
});
console.log('끝');