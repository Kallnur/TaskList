import React from 'react';

function NewTask(props){
  return (
    <input 
      type="text" 
      className="new-task" 
      placeholder="Новая задача"
      value={props.val}
      onChange={event => {
        document.querySelector('.new-task-block').classList.remove('warn');
        props.setVal(event.target.value);
      }}
    />
  )
}

export default NewTask;