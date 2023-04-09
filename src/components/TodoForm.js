import React, { useState } from 'react'

export const TodoForm = (props) => {
 const [task, setTask] = useState('')

  const addTask = e => {
    e.preventDefault();

    props.addTask(task)
    setTask('')
  }

  return (
    <form  className='add-task-form' onSubmit={addTask}>
      <input className='add-todo-input' type='text' placeholder='Whats your task?' onChange={(e) => setTask(e.target.value)} value={task}/>
      <button className='add-todo-button' type='submit'>Add Task</button>
    </form>
  )
}
