//파일var express = require('express');
var http=require('http');
var static=require('serve-static');
var path=require('path');
var bodyParser=require('body-parser');
var multer=require('multer');
var fs=require('fs');
var cors=require('cors');

var expressSeesion=require('express-session');

var app=express();
app.set('port',process.env.PORT ||4444);

var router = express.Router();
app.use("/",router);

var storage = multer.diskStorage({
    destination: function(req, file, callback){
        callback(null,'upload')
    },
    filename: function(req,file,callback){
        callback(null,file.originalname+Date.now())
    }
});
var upload = multer({
    storage:storage,
    limits:{
        files:10,
        fileSize : 102410241024
    }
});


router.route('/process/photo').post(upload.array('photo',1),function(req,res){
    console.log('/process/photo 호출됨');
    var files=req.files;
    console.log('업로드 된 파일');
    if(files.length>0){
        console.dir(files[0]);
    }
    else{
        console.log('파일이 없습니다.');
    }

    var originalname='';
    var filename='';
    var mimetype='';
    var size=0;

    if(Array.isArray(files)){
        for(var i=0; i<files.length;i++){
            originalname=files[i].originalname;
            filename=files[i].filename;
            mimetype=files[i].mimetype;
            size=files[i].size();
        }
    }
    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    res.wirte("<h1> 파일 업로드 성공 </h1>");
    res.wirte("<p>원본파일:"+originalname+"</p>");
    res.wirte("<p>저장파일:"+filename+"</p>");
    res.end();

});

var server=http.createServer(app).listen(app.get("port"),function(){
    console.log("익스프레스 웹서버 실행: "+app.get("port"));
});