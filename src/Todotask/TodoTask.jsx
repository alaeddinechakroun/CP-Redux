import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTODO , deletTODO , uapdateTodo , doneTodo } from '../Actions/TodoActions';
import './TodoTask.css';


const TodoTask = () => {

  const [newToDo, SetNewToDo] = useState('')
  const task = useSelector(state => state.TodoReducer)
  const dispatch = useDispatch()

const [upInput , setUpInput] = useState(false)
const toggleInput = () => {
  setUpInput(!upInput);
}

  
  return (
    <div className='Back'>
      <div className='main-div'>
        <div className='header'>
          <h1>TO DO</h1>
        </div>
        <div className='task__list'>
          <h3>✍️ Add New TO DO</h3>
           {upInput? 
             <>
             <input type="text"  className="modal__input" placeholder='Adding...' onChange={(e) => SetNewToDo(e.target.value)} ></input>
             <button className='add__btn' onClick={() => dispatch(addTODO(newToDo))} >Up Date</button>
             </>  :   <>
          <input type="text"  className="modal__input" placeholder='Adding...' onChange={(e) => SetNewToDo(e.target.value)} ></input>
          <button className='add__btn' onClick={() => dispatch(addTODO(newToDo))} >ADD</button>
          </>
             }
         
          <div className='delet'>
            <ul className='task'>
              {task.map(e => <li className={`${e.isDone?"Done" : ""}`} >
                <button className='done-btn' onClick={()=>dispatch(doneTodo(e.id))}>Done</button>
                {e.title} 
               <button className='far fa-edit add-btn' onClick={()=>dispatch(uapdateTodo(toggleInput(e.id)))}></button>
               <button className="far fa-trash-alt add-btn" onClick={() => dispatch(deletTODO(e.id))}></button>
               </li>)}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TodoTask;