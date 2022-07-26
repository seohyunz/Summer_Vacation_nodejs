//예외처리
setInterval(()=>{
    console.log('시작');
    try{
        throw new Error('무한 출력');
    }
    catch(err){
        console.log(err);
    }
},500);

const fs = require('fs'); //파일 삭제
setInterval(()=>{
    fs.unlink('./sam.txt',(err)=>{
        if(err){
            console.log(err);
        }
    });
},500);

//예측 불가능한 에러처리
process.on('uncaughtException',(err)=>{
    console.error('예기치 못한 에러',err);
});
setInterval(()=>{
    throw new Error('무한출력');
},1000);
setTimeout(()=>{
    console.log('실행됩니다.');
},2000);