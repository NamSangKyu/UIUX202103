import './App.css';
import React from 'react';

function RoundButton(){
  const btnStyle ={
    "width" : "100px",
    "height" : "40px",
    "border-radius" : "10px",
    "background-color" : "yellowgreen"
  };
  return <button style={btnStyle}>기본</button>;
}

export default RoundButton;
