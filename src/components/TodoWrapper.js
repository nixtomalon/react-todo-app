import React, { useState } from 'react'
import { TodoForm } from './TodoForm'
import { Todo } from './Todo'
import { v4 as uuidv4 } from 'uuid'
import { EditTodoForm } from './EditTodoForm'

export const TodoWrapper = () => {
  const [taskList, setTaskList] = useState([])

  const addTask = task => {
    setTaskList(prevTaskList => [...prevTaskList, {id: uuidv4(), task: task, completed:false, isEditing: false}])
  }

  const completeTask = taskId => {
    setTaskList(prevTaskList => prevTaskList.map(item => item.id === taskId ? {...item, completed: !item.completed} : item))
  }

  const editTask = taskId => {
    setTaskList(prevTaskList => prevTaskList.map(item => item.id === taskId ? {...item, isEditing: !item.isEditing} : item))
  }

  const deleteTask = taskId => {
    setTaskList(prevTaskList => prevTaskList.filter(item => item.id !== taskId))
  }

  const updateTask = (task, id) =>{
    setTaskList(prevTaskList => prevTaskList.map(item => item.id === id ? {...item, task: task, isEditing:!item.isEditing} : item))
  }

  return (
    <div className='todo-container'>
      <h1 className='todo-heading'>Get Things Done!</h1>
      <TodoForm addTask={addTask}/>
      {taskList.map((task, index) => (
        task.isEditing ? (<EditTodoForm key={index} updateTask={updateTask} task={task}/>) : 
        (<Todo task={task} key={index} deleteTask={deleteTask} completeTask={completeTask} editTask={editTask}/>)
      ))}
    </div>
  )
}
