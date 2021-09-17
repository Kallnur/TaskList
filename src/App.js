import './App.css';
import NewTask from './components/NewTask/NewTask';
import Button from './components/Button/Button';
import TaskItem from './components/TaskItem/TaskItem';
import {useState, useEffect} from 'react';

function App() {
  const [tasks, setTasks] = useState([]);  //  Элементы списка
  const [val, setVal] = useState('');  //  Текст для нового элемета 

  let saveTask = [];  //  для локал хранения 

  const addTask = function (){  //  Добавление нового элемента
    let inp = document.querySelector('.new-task-block');  //  для динамики
    if(val !== ''){
      inp.classList.remove('warn');

      const newTask = {  //  собственно новый элемент
        id: new Date().getTime(),
        text: val
      }
      setTasks([...tasks, newTask]);  //  собственно обнова

      saveTask.push(...tasks);  //  для локал хранения 
      localStorage.setItem('Task-List', JSON.stringify(saveTask));
      //  новый элемент списка не сразу пушится в локал... не знаю/помню решение :(

      setVal('');  //  чистка поля
    }else{
      inp.classList.add('warn');  //  для динамики
    }
 };

  function reloadTask(){  //  вывод из локал после рестарта
    let loadTasks = JSON.parse(localStorage.getItem('Task-List'));

    if(loadTasks != null){
      setTasks(loadTasks);
    }
  };

  useEffect(()=>reloadTask(),[]);

  const removeTask = function (task){  //  удаление элемента
    setTasks(tasks.filter(el => el.id !== task.id));  //  удаление элемента на стр.

    let localTask = JSON.parse(localStorage.getItem('Task-List'));

    let res = localTask.filter((el)=> el.id !== this.task.id);  //  удаление элемента в локал

    localStorage.setItem('Task-List', JSON.stringify(res));
  };

  return (
    <div className="App">
      <h1 className="title">Список задач</h1>
      <div className="new-task-block">
        <NewTask val={val} setVal={setVal}/>
        <Button onClick={addTask}/>
      </div>
      <ul className="task-list">
        {tasks.map(el =>
          <TaskItem task={el} key={el.id} click={removeTask}/>
        )}      
      </ul>

    </div>
  );
}

export default App;
