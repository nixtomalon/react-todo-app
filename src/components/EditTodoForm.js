import React, { useState } from 'react'

export const EditTodoForm = ({updateTask, task}) => {
 const [value, setTask] = useState(task.task)

  const onUpdateTask = e => {
    e.preventDefault();

    updateTask(value, task.id)
    setTask('')
  }

  return (
    <form  className='add-task-form' onSubmit={onUpdateTask}>
      <input className='add-todo-input' type='text' placeholder='Whats your task?' onChange={(e) => setTask(e.target.value)} value={value}/>
      <button className='add-todo-button' type='submit'>Update Task</button>
    </form>
  )
}
