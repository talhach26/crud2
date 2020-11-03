  import {uuid} from 'uuid'
  
  const isState={
  task:[
  {title:'Read the book',id:1},
  {title:'Wash the Car',id:2,},
  {title:'Write some code',id:3}
  ],
  single_Task:null
  }


const reducer = (state=isState,action)=>{
 switch(action.type){
   case 'ADD_TASK':
    return{
      ...state,
      task: [...state.task, action.payload]
     
     }
    case 'CLEAR_ALL_TASK':
     return{
      ...state,
      task:[]
     }
    case 'DELETE_TASK':
      return{
        ...state,
        task:state.task.filter(task=>task.id !==action.payload)    
      }  
    case 'EDIT_TASK':
      return{
        ...state,
      single_Task:state.task.find(task=>task.id===action.payload)
      
      }  
    case 'UPDATE_TASK':
     
      return{
        ...state,
        task:state.task.map(task=> (task.id===action.payload.id? {title:action.payload.title,id:action.payload.id}:task)),
        single_Task:null
      }  
    
   default:
     return state  
 }

}
export default reducer