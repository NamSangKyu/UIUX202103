import React from "react";

class Counter extends React.Component{
  constructor(props){
    super(props);
    this.state = {count : 0};
  }
  render(){
    return(
      <div>
        <button>-</button>
        <input type="text" value={this.state.count} />
        <button>+</button>
      </div>
    );
  }
}
export default Counter;
