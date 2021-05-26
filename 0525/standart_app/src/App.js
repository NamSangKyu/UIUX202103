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
    this.state = {editMode : false};
  }
  changeEditMode(){
    //editMode state 값을 true로 바꿈
    this.setState({editMode : true});
  }
  cancelEdit(){
    //editMode값 false 변경 --> input 태그에 이벤트 처리(onBlur)
    this.setState({editMode : false});
  }
  render(){
    //editMode 값에 따라서 span이 아니라 input 태그로 편집 할수 있게 태그를 추가
    const normal = (
      <li>
        <span onDoubleClick={this.changeEditMode.bind(this)}>
          {this.props.text}</span> - <button onClick={this.removeItem.bind(this)}>
            삭제</button>
      </li>
    );
    const edit = (
      <li>
          <input type="text" defaultValue={this.props.text} 
          onBlur={this.cancelEdit.bind(this)} autoFocus/>
      </li>
    );
    return this.state.editMode ? edit : normal;
  }
  removeItem(){
    this.props.remove(this.props.index);
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
    this.setState(prevState => {
      const newList = prevState.app_list.filter((obj,index) =>{
        return removeIndex != index;
      });
      return {app_list:newList};
    });
  }
}
export default ListApp;



