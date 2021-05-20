import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import RoundButton from './App';

ReactDOM.render(
    <div>
      <RoundButton id="id1">버튼1</RoundButton>
      <RoundButton id="id2">버튼2</RoundButton>
      <RoundButton id="id3">버튼3</RoundButton>
      <RoundButton id="id4">버튼4</RoundButton>
      <RoundButton id="id5">버튼5</RoundButton>
    </div>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
