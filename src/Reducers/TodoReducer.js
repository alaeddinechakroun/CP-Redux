import { ADD_TODO ,DELETE_TODO , UAPDATE_TODO ,DONE__TODO } from "../Actions/TypeActions"
import { v4 as uuidv4 } from 'uuid';

const Add=[]


const TodoReducer = ( state = Add , action) => {
    switch (action.type){
        case ADD_TODO : 
        return  [...state,{ id:uuidv4() , title:action.payload}]
        case DELETE_TODO:
        return state.filter((e)=>e.id!==action.payload)
       
        case UAPDATE_TODO :
            let UAPDATETODO=state.map((e)=>{if (e.id === action.payload.id)
                return{...e , title:action.payload.UapdataTODO}
                else{
                    return e
                }})
                return UAPDATETODO
         
                case DONE__TODO : 
                return state.map(e=>{if(e.id===action.payload)return {...e , isDone : !e.isDone}
                else return e})
      
        default:
            return state
}
}

export default TodoReducer