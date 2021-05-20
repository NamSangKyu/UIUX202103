import './App.css';
import React from 'react';

function RoundButton(props){
  const btnStyle ={
    "width" : "100px",
    "height" : "40px",
    "border-radius" : "10px",
    "background-color" : "yellowgreen"
  };
  return (<button style={btnStyle} 
    onClick={eventFunction} id={props.id}>{props.children} - {props.id}</button>);
}
function eventFunction(){
    alert("이벤트 발생");
}
export default RoundButton;
