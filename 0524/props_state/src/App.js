import React, {Component} from 'react';
class App extends React.Component{
  constructor(props){
    super(props);
    //props.id = 'test';//props는 읽기 전용
    //state : 컴포넌트 내부에서 바뀔 수 있는 값, 
    //        props는 부모 컴포넌트에서만 바꿀수 있음(읽기 전용)
    this.state ={
      count : 0
    };
  }
  eventClick(){
    this.setState({count : this.state.count + 1});
    //this.props.click();
  }
  render(){
    return (
      <div id={this.props.id} onClick={this.eventClick.bind(this)}>
        {this.props.children} - {this.state.count}
      </div>
    );
  }
}


export default App;
