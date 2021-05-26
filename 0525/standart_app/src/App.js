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
class ListFilter extends React.Component{
  render(){
    return (
      <div>
        필터 : <input type='text' ref = {ref => this.input = ref} 
          onChange={this.changeFilter.bind(this)}
        />
      </div>
    );
  }
  changeFilter(e){
    console.log(e.target.value);
    this.props.changeFilter(this.input.value);
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
  editFin(event){//편집이 완료된 경우
    if(event.keyCode == 13){//엔터를 눌렀을때
      this.props.update(this.props.item.id,this.txt.value);
      this.cancelEdit();
    }
  }
  render(){
    //editMode 값에 따라서 span이 아니라 input 태그로 편집 할수 있게 태그를 추가
    const normal = (
      <li>
        <span onDoubleClick={this.changeEditMode.bind(this)}>
          {this.props.item.text}</span> - <button onClick={this.removeItem.bind(this)}>
            삭제</button>
      </li>
    );
    const edit = (
      <li>
          <input type="text" defaultValue={this.props.item.text} 
          onBlur={this.cancelEdit.bind(this)} ref ={ref=>this.txt = ref} 
          onKeyUp={this.editFin.bind(this)}
          autoFocus/>
      </li>
    );
    return this.state.editMode ? edit : normal;
  }
  removeItem(){
    console.log(this.props);
    this.props.remove(this.props.item.id);
  }
}
class List extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    const tag = this.props.list.filter((obj)=>{
      return obj.text.includes(this.props.filter);
    }).map((obj, index) =>(<ListItem
      item={obj} index={index} key={obj.id} remove={this.props.remove} update={this.props.update}
    />));
    return (<ul>{tag}</ul>);
  }
}
class ListApp extends React.Component{
  constructor(props){
    super(props);
    this.state = {app_list : [],filter : ''};
    this.id = 1;
  }
  render(){
    return (
      <div>
        <ListForm addItem = {this.addItem.bind(this)}/>
        <ListFilter changeFilter={this.changeFilter.bind(this)} />
        <List list={this.state.app_list} remove={this.removeItem.bind(this)}
          update={this.updateItem.bind(this)} filter={this.state.filter}/>
      </div>
    );
  }
  changeFilter(newFilter){
    this.setState({filter : newFilter});
  }
  addItem(itemText){
    this.setState(prevState=>{
      const newList = prevState.app_list.concat({
        id:this.id++,
        text : itemText
      });
      return {app_list : newList};
    });
  }
  removeItem(removeId){
    this.setState(prevState => {
      const newList = prevState.app_list.filter((obj) =>{
        return removeId != obj.id;
      });
      return {app_list:newList};
    });
  }
  updateItem(updateId, item){
    this.setState(prevState => {
      const newList = prevState.app_list.map((obj)=>{
        if(updateId == obj.id){
          obj.text = item;
        }
        return obj; 
      });
      return {app_list : newList};
    });
  }
}
export default ListApp;



