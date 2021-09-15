import React from 'react';
import Basket from '../../icons/Basket/basket.svg'

function TaskItem(props){
  let data = new Date(),
      mon  = data.getMonth()+1,
      hour = data.getHours(),
      min  = data.getMinutes();


  if(mon < 10){mon = `0${data.getMonth()+1}`};
  if(hour < 10){hour = `0${data.getHours()}`};
  if(min < 10){min = `0${data.getMinutes()}`};

  let ymd = `${data.getDate()}.${mon}.${data.getFullYear()}`;

  let hm = `${hour}:${min}`;

  return (
    <li className="task-item" key={props.task.id}>
      <span className="task-text">
        {props.task.text}
      </span>
      <div className="basket-blcok" onClick={()=>props.click(props.task)}>
        <img src={Basket} alt="Basket" className="basket"/>
      </div>
      <div className="date">
        <span className="date-ymd">{ymd}</span>
        <span className="date-hm">{hm}</span>
      </div>
    </li>
  )
}

export default TaskItem;