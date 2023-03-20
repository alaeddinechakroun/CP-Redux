import {ADD_TODO , DELETE_TODO , UAPDATE_TODO , DONE__TODO} from "./TypeActions"


export const addTODO = (NewTODO) => {
    return{
    type : ADD_TODO ,
    payload : NewTODO
}
};
export const deletTODO =( DeletTODO) => {
    return{
        type : DELETE_TODO ,
        payload : DeletTODO
        
    }
    
};
export const uapdateTodo = (UapdataTODO) => {
    return{
        type : UAPDATE_TODO ,
        payload : UapdataTODO
    }
};
export const doneTodo = (id) => {
    return{
        type : DONE__TODO ,
        payload : id
    }
}

