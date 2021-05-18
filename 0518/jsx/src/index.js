import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
function clickFunction(){
  alert("클릭이벤트");
}
var age = 20;
var name = '홍길동';
const tag = (
  <div>
  <h1 className="bg-color" onClick={clickFunction}>제목태그</h1>
    <p>이름 : {name}<br></br>나이 : {age}</p>
    <hr></hr>
    <p>이름 : {name}<br/>나이 : {age}</p>
   </div>
);
const element = React.createElement('h1',{
  className : 'bg-color', onClick : clickFunction 
}, 'JSX는 Babel에 의해서 컴파일 됨');

//ReactDOM.render(tag, document.getElementById("root"));
ReactDOM.render(element, document.getElementById("root"));

