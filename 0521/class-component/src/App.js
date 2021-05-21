import React, {Component} from 'react';

class RoundButton extends React.Component{
    //생성자에서 할일 props로 속성값 목록을 받음
    constructor(props){
      super(props);
    }

    //렌더링하기위한 함수 - JSX를 이용하여 태그 만드는 부분
    render(){
      const btnStyle ={
        "width" : "100px",
        "height" : "40px",
        "border-radius" : "10px",
        "background-color" : "yellowgreen"
      };
      return (<button style={btnStyle} 
        onClick={this.eventFunction} id={this.props.id}>
          {this.props.children}- {this.props.id}</button>);
    }
    eventFunction = () => {
      alert(this.props.id + "버튼 클릭이벤트 발생");
      console.log(this);
    }
}

export default RoundButton;
