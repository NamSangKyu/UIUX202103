import React, { Component } from "react";
class Circle extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    var line = ['1호선', '2호선', '3호선', '4호선', '5호선'];
    var color = ['#0B0B61','#0B610B','#FF8000','#2ECCFA','#BF00FF'];
    var style = {
      "width" : "100px",
      "height" : "100px",
      "box-sizing" : "border-box",
      "padding": "35px 0px",
      "text-align" : "center",
      "line-height" : "20px",
      "font-size" : "20px",
      "border-radius" : "50px",
      "border" : "5px solid red"
    };
    const lineItems = line.map((data,index) =>{
      var itemStyle = {...style}; //객체 복사
      var border = itemStyle.border.split(" ");
      border[2] = color[index];
      itemStyle.border = border.join(" ");
      console.log(itemStyle.border);
      return (<div style={itemStyle}>{data}</div>);
    } );
    return (<div>{lineItems}</div>);
  }


}
export default Circle;
