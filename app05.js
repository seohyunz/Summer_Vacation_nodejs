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