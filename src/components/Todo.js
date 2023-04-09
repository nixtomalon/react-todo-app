import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'


export const Todo = ({task, deleteTask, completeTask, editTask}) => {
  
  return (
    <div className='todo-item'>
      <label onClick={() => completeTask(task.id)} className={`${task.completed ? 'completed': ''}`}>{task.task}</label>
      <div className='todo-action'>
        <FontAwesomeIcon onClick={() => editTask(task.id)} icon={faPenToSquare} />
        <FontAwesomeIcon onClick={() => deleteTask(task.id)} className='fa-trash' icon={faTrash} />
      </div>
    </div>
  )
}
