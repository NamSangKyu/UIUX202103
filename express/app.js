const { request, response } = require('express');
const express = require('express');
const session = require('express-session')
const FileStore = require('session-file-store')(session)
var mysql = require('mysql')
const app = express()
const port = 3000
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