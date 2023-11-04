import Form from '../components/Form/index'
import List from '../components/List';
import Timer from '../components/Timer';
import { Task } from '../types/task';
import style from './app.module.scss'
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState<Task[] | []>([])
  const [selected, setSelected] = useState<Task>()

  function selectTask(selectedTask: Task) {
    setSelected(selectedTask)
    setTasks(prevTasks => prevTasks.map(task => ({
      ...task,
      selected: task.id === selectedTask.id ? true : false
    })))
  }

  function finishTask() {
    if(selected) {
      setSelected(undefined)
      setTasks(prevTasks => prevTasks.map((task) => {
        if(task.id === selected.id) {
          return {
            ...task,
            selected: false,
            completed: true
          }
        }
        return task
      }))
    }
  }
  
  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks}/>
      <List 
        selectTask={selectTask}
        tasks={tasks} 
      />
      <Timer 
      finishTask={finishTask}
      selected={selected}/>
    </div>
  );
}

export default App;
