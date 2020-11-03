import React,{useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {addTask} from '../actions/myactions'
import {clearAllTask} from '../actions/myactions'
import {updateTask} from '../actions/myactions'

function TaskForm() {
  const dispatch=useDispatch()

  const [title,setTitle]=useState('');
  const data = useSelector(state => state)
  const singleTask=data.single_Task
 


  useEffect(()=>{
    if(singleTask){
      setTitle(singleTask.title)
      console.log(title)

    }
    else
    {
      setTitle('')
    }

  },[singleTask])
 
  

  const titleHandler=e=>{
    setTitle(e.target.value)
    
    
  }
  const handleSubmit=e=>{
    e.preventDefault()
    if(singleTask){
      dispatch(updateTask({title,id:singleTask.id}))

    }else{
      const len=data.task?data.task.length+1:0
      dispatch(addTask({title,id:len}))
      setTitle('')
    }
    
  }
  const clearAll=e=>{
    e.preventDefault()
    dispatch(clearAllTask())
  }
 

  return (
    <form  className='form'>
      <input type='text' className='task-input' placeholder='Add Task...' required
      onChange={titleHandler}
      value={title}
      
       />
      <div className='buttons'>
  <button onClick={handleSubmit} type='submit' className='btn add-task-btn'>{singleTask? `Edit Task` : `Add Task`}</button>
        <button onClick={clearAll}  className='btn clear-btn'>Clear</button>
      </div>
    </form>
  )
}

export default TaskForm
