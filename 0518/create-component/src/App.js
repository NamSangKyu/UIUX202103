import './App.css';
import React,{Component} from 'react';
//컴포넌트를 함수로 만들었을때
// function App(props){
//   return <h1  className={props.css}>Hello React - {props.name}</h1>;
// }
class App extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
      return (<h2 className={this.props.css}>
          {this.props.name}</h2>);
  }
}
export default App;
