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
    //alert(this.input.value);
    //ListApp에서 (props를 통해)보내준 addItem를 사용 
    this.props.addItem(this.input.value);
    //입력 후 텍스트 상자 초기화
    //this.input.value = "";
    event.target.reset();
  }
}
class ListItem extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <li>
        {this.props.text} - <button>삭제</button>
      </li>
    );
  }
}
class List extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    const tag = this.props.list.map((obj, index) =>(<ListItem
      text={obj} index={index} remove={this.props.remove}
    />));
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
        <List list={this.state.app_list} remove={this.removeItem.bind(this)}/>
      </div>
    );
  }
  addItem(text){
    this.setState(prevState=>{
      const newList = prevState.app_list.concat(text);
      return {app_list : newList};
    });
  }
  removeItem(removeIndex){
    this.state(prevState => {
      const newList = prevState.app_list.filter((obj,index) =>{
        return removeIndex != index;
      });
      return {app_list:newList};
    });
  }
}
export default ListApp;



