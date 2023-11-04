import React, { useState } from "react";
import Button from "../Button";
import style from './form.module.scss'
import { Task } from "../../types/task";
import { v4 as uuid } from 'uuid'

interface Props {
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}

const Form = ({ setTasks }: Props) => {

  const [task, setTask] = useState('')
  const [time, setTime] = useState('00:00:00')

  function addTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setTasks((prevState) =>( 
      [
        ...prevState, 
        {
          task,
          time,
          selected: false,
          completed: false,
          id: uuid()
        }
      ]
      )
    )
    setTask('')
    setTime('00:00:00')
  }


  return (
    <form 
        onSubmit={addTask}
        className={style.novaTarefa}>
          <div className={style.inputContainer}>
            <label htmlFor="task">
              Add a new task
            </label>
            <input
              type="text"
              name="task"
              id="task"
              placeholder="What do you want to study?"
              required
              value={task}
              onChange={event => setTask(event.target.value)}
            />
          </div>
          <div className={style.inputContainer}>
            <label htmlFor="time">
              Time
            </label>
            <input
              type="time"
              step="1"
              name="time"
              id="time"
              min="00:00:00"
              max="01:30:00"
              required
              value={time}
              onChange={(event) => {
                setTime(event.target.value)
              }}
            />
          </div>
          <Button type="submit">Add</Button>
        </form>
  )
}

// class Form extends React.Component<{
//   setTasks: React.Dispatch<React.SetStateAction<Task[]>>
// }> {

//   state = {
//     task: "",
//     time: "00:00"
//   }

//   addTask(event: React.FormEvent<HTMLFormElement>) {
//     event.preventDefault()
//     this.props.setTasks((prevState) =>( 
//       [
//         ...prevState, 
//         {
//           ...this.state,
//           selected: false,
//           completed: false,
//           id: uuid()
//         }
//       ]
//       )
//     )
//     this.setState({
//       task: '',
//       time: '00:00:00'
//     })
//   }

//   render() {
//       return (
//         <form 
//         onSubmit={this.addTask.bind(this)}
//         className={style.novaTarefa}>
//           <div className={style.inputContainer}>
//             <label htmlFor="task">
//               Add a new task
//             </label>
//             <input
//               type="text"
//               name="task"
//               id="task"
//               placeholder="What do you want to study?"
//               required
//               value={this.state.task}
//               onChange={event => this.setState({...this.state, task: event.target.value})}
//             />
//           </div>
//           <div className={style.inputContainer}>
//             <label htmlFor="time">
//               Time
//             </label>
//             <input
//               type="time"
//               step="1"
//               name="time"
//               id="time"
//               min="00:00:00"
//               max="01:30:00"
//               required
//               value={this.state.time}
//               onChange={(event) => {
//                 this.setState({...this.state, time: event.target.value})
//               }}
//             />
//           </div>
//           <Button type="submit">Add</Button>
//         </form>
//       )
//   }

// }

export default Form