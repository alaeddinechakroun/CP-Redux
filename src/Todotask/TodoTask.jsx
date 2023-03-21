import React, { useState ,  useEffect } from 'react';
import { useDispatch, useSelector  } from 'react-redux';
import { addTODO , deletTODO , uapdateTodo , doneTodo } from '../Actions/TodoActions';
import './TodoTask.css';


const TodoTask = () => {

  const [newToDo, SetNewToDo] = useState('')
  const [updateToDo, SetUpdateToDo] = useState('')
  const task = useSelector(state => state.TodoReducer)
  const [filteredTasks, setFilteredTasks] = useState(task);
  const dispatch = useDispatch()
  const [id,setID]=useState('')

const [upInput , setUpInput] = useState(false)
const toggleInput = (id,title) => {
  setUpInput(!upInput);
  setID(id)
  SetUpdateToDo(title)
}
const filterTasks = (filterType) => {
  if (filterType === 'done') {
    setFilteredTasks(task.filter((e) => e.isDone === true));
  } else if (filterType === 'Notdone') {
    setFilteredTasks(task.filter((e) => e.isDone === false));
  } else {
    setFilteredTasks(task);
  }
};
useEffect(() => {
  setFilteredTasks(task);
}, [task]);


  
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
              <input type="text"  className="modal__input" placeholder='updating...' value={updateToDo} onChange={(e) => SetUpdateToDo(e.target.value)} ></input>
             <button className='add__btn' onClick={() => {dispatch(uapdateTodo(id,updateToDo));toggleInput()}} >Up Date</button>
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