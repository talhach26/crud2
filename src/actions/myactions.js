export const addTask=title=>{
  
  return{
    type:'ADD_TASK',
    payload:title
  }

}
 export const clearAllTask=()=>{
   return{
    type:'CLEAR_ALL_TASK'
   }
 }

 export const deleteTask=id=>{
   return{
    type:'DELETE_TASK',
    payload:id
   }

 }

 export const editTask=id=>{
   return{
     type:'EDIT_TASK',
     payload:id
   }

}

export const updateTask=(title)=>{
  console.log(title)
  return{
    type:'UPDATE_TASK',
    payload:title
  }
  
}
