import React,{Component} from 'react';
class Rect extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    const style = {
      "width" : "100px",
      "height" : "100px",
      "border" : "1px solid black",
      "background-color" : "red",
      "display":"inline-block"
    };
    return (<div style={style}></div>);
  }
}

export default Rect;
