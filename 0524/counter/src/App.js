import React from "react";

class Counter extends React.Component{
  constructor(props){
    super(props);
    this.state = {count : 0};
  }
  plus = () =>{
    this.setState({count : this.state.count + 1});
  }
  minus(){
    this.setState({count : this.state.count - 1});
  }
  render(){
    var style = {
      "background-color" : "white",
      "color" : "black",
      'font-size' : '24px',
      'text-align' : 'center'
    };
    if(this.state.count > 10){
      style['background-color'] = 'orange';
      style['color'] = 'red';
    }else if(this.state.count > 0){
      style['background-color'] = 'yellow';
      style['color'] = 'red';
    }else if(this.state.count < -10){
      style['background-color'] = 'blue';
      style['color'] = 'white';

    }else if(this.state.count < 0){
      style['background-color'] = 'skyblue';
      style['color'] = 'blue';
    }
    return(
      <div>
        <button onClick={this.minus.bind(this)}>-</button>
        <input type="text" value={this.state.count} style={style}/>
        <button onClick={this.plus}>+</button>
      </div>
    );
  }
}
export default Counter;
