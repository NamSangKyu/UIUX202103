import React, {Component} from 'react';
class ListForm extends React.Component{
  //생성자
  constructor(props){
    super(props);
  }
  //render --> input text, 버튼
  render(){
    return (<form>
        <input type='text'></input>{' '}
        <button>추가</button>
    </form>);
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
        <ListForm />
        <List list={this.state.app_list} />
      </div>
    );
  }
}
export default ListApp;



