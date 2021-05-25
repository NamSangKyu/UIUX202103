import React, {Component} from 'react';

class List extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      list : [
        {name:'홍길동', age:30, id:1},
        {name:'김철수', age:44, id:2},
        {name:'김영희', age:22, id:3},
        {name:'홍길동', age:30, id:1}
      ]
    };
  }
  render(){
    const itemList = this.state.list.map((item, index)=>{
      return (<li key={item.id.toString()}>{item.name} : {item.age}</li>);
    });
    console.log(itemList);
    return (
      <div>
        <button onClick={this.addItem.bind(this)}>내용 추가</button>
        <ul>{itemList}</ul>
      </div>
    );
  }
  addItem(){
      var item = {
        name : '테스트',
        age : Math.ceil(Math.random() * 20) + 10,
        id : Math.ceil(Math.random() * 20),
      }
      var list = this.state.list;
      //list.push(item);
      var newList = list.concat(item);
      console.log("state에 저장중인 list",list);
      console.log("concat 후에 생성된 newList",newList);
      this.setState({list:list});
  }
}

export default List;
