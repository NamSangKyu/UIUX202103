import React, {Component} from 'react';

class List extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      list : [
        {name:'홍길동', age:30},
        {name:'김철수', age:44},
        {name:'김영희', age:22},
        {name:'홍길동', age:30}
      ]
    };
  }
  render(){
    const itemList = this.state.list;
    console.log(itemList);
    return (
      <ul></ul>
    );
  }
}

export default List;
