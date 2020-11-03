import React from 'react'
import { useSelector } from 'react-redux'
import Task from './Task'

function TaskList() {
  const allTask = useSelector(state => state.task)
  console.log(allTask)
  return (
    <div>
      {
         allTask.length ? allTask.map(task => <Task task={task} key={task.id} />):
         <div className='no-tasks'>No Tasks</div>
       }
       </div>
    
    
   
   
   
    
  )
}

export default TaskList
