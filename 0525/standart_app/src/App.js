import React, {Component} from 'react';
class ListForm extends React.Component{
  //생성자
  constructor(props){
    super(props);
  }
  //render --> input text, 버튼
  render(){
    return (<form onSubmit={this.addItem.bind(this)}>
        <input type='text' ref={ref => this.input = ref}></input>{' '}
        <button>추가</button>
    </form>);
  }
  addItem(event){
    event.preventDefault();
    alert(this.input.value);
  }
}
class List extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    const tag = this.props.list.map((obj) =>(<li>{obj}</li>));
    return (<ul>{tag}</ul>);
  }
}
class ListApp extends React.Component{
  constructor(props){
    super(props);
    this.state = {app_list : ['A','1',2]};
  }
  render(){
    return (
      <div>
        <ListForm addItem = {this.addItem.bind(this)}/>
        <List list={this.state.app_list} />
      </div>
    );
  }
  addItem(text){
    this.setState(prevState=>{
      const newList = prevState.app_list.concat(text);
      return {app_list : newList};
    });
  }
}
export default ListApp;



