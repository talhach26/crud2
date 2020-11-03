import React from 'react'
import { Form } from 'react-bootstrap'
import {useDispatch} from 'react-redux'
import {deleteTask} from '../actions/myactions'
import {editTask} from '../actions/myactions'

function Task({task}) {
  const dispatch=useDispatch()
  return (
    <div>
    <li className='list-item'>
    <span>{task.title}</span>
    <div>
      <button onClick={()=>dispatch(deleteTask(task.id))} className='btn-delete task-btn'><i className='fas fa-trash-alt'></i></button>
      <button onClick={()=>dispatch(editTask(task.id))}  className='btn-edit task-btn'><i className='fas fa-pen '></i></button>
    </div>
    </li>
  </div>
  )
}

export default Task
