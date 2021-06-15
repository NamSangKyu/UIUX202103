const { request, response } = require('express');
const express = require('express');
const session = require('express-session')
const FileStore = require('session-file-store')(session)
var mysql = require('mysql')
const app = express()
const port = 3000
//mysql 접속 설정
var connection = mysql.createConnection({
    host : '127.0.0.1',
    port : '3306',
    user : 'root',
    password : '123456',
    database : 'web_db'
});
connection.connect();
//세션 설정
app.use(session({
    secret : 'seesionID',
    resave : false,
    saveUninitialized : false,
    store : new FileStore()
}))
//-------------------------

app.listen(port, () =>{
    console.log(`서버 실행 완료 포트번호 ${port}`)
})
app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
})
app.all('/',(request,response)=>{
        response.send("express 서버 접속 완료")
})
app.get('/get.do',(request,response)=>{
    const data = {key1 : "데이터1", key2 : "데이터2"}
    //사용자가 ajax로 보낸 데이터를 확인하는 부분
    console.log(request.query);
    for(const key in request.query){
        const element = request.query[key];
        console.log(element);
    }
    response.send(JSON.stringify(data))
})
//로그인
app.get('/login.do',(request,response)=>{
    var sess = request.session;
    if(sess.is_logined){
        console.log("이미 로그인 되어 있습니다.");
        return
    }
    var id = request.query.id;
    var pass = request.query.pass;
    var result = {};
    if(!request.session.num)
        request.session.num = 1;
    else
        request.session.num += 1;
    sess.is_logined = true;
    result["flag"] = 0;
    result["tokken"] = sess.id;
    sess.name = id;
    console.log(sess.name + " 로그인 성공");
    response.send(result);
})
//로그인 정보 가져오기
app.get('/profile.do',(request,response)=>{
    var tokken = request.query.tokken;
    var fs = require('fs');
    var result = {};
    fs.readFile(`sessions/${tokken}.json`,'utf8',function(err,data){
        console.log(data);
        var d = JSON.parse(data);
        result['name'] = d.name;
        response.send(result);
    });
});
//로그아웃
app.get('/logout.do',(request,response)=>{
    var tokken = request.query.tokken;
    var fs = require('fs');
    var result = {};
    request.session.destroy();//세션 정보 삭제
    fs.rm(`sessions/${tokken}.json`,{recursive:true}, (err)=>{
        if(err != null)
            console.log(err);
    });
    result[flag] = 1;
    response.send(result);
})