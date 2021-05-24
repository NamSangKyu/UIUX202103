import React, { useState } from "react";

//함수형 컴포넌트에서 state 값을 쓸수 있게 해주는 기능
const AppFunc = () =>{
    const [count, setCount] = useState(0);
    const plus = () => {
        setCount(count+1);
    }
    const minus = () => setCount(count-1);
    var style = {
        "background-color" : "white",
        "color" : "black",
        'font-size' : '24px',
        'text-align' : 'center'
      };
      if(count > 10){
        style['background-color'] = 'orange';
        style['color'] = 'red';
      }else if(count > 0){
        style['background-color'] = 'yellow';
        style['color'] = 'red';
      }else if(count < -10){
        style['background-color'] = 'blue';
        style['color'] = 'white';
  
      }else if(count < 0){
        style['background-color'] = 'skyblue';
        style['color'] = 'blue';
      }


    return(
        <div>
          <button onClick={minus}>-</button>
          <input type="text" value={count} style={style}/>
          <button onClick={plus}>+</button>
        </div>
      );
}
export default AppFunc;