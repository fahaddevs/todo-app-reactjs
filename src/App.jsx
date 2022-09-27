import { useReducer, useState } from 'react'
import './App.css'

import Modal from './Modal'

const reducer = (state, action) => {
  if(action.type === 'ADD_VALUE') {
    const newTask = [...state.tasks, action.payload];
    return {
      ...state,
      tasks: newTask,
      isModalOpen: true,
      modalContent: 'Item Added',
      modalClass: 'modal success'
    }
  } 

  if (action.type === 'NO_VALUE') {
    return {
      ...state,
      isModalOpen: true,
      modalContent: 'Please fill up',
      modalClass: 'modal danger'
    }
  }

  if (action.type === 'MODAL_CLOSE') {
    return {
      ...state,
      isModalOpen: false
    }
  }

  if (action.type === 'ITEM_REMOVE') {
    const newTask = state.tasks.filter(
      (task) => task.id !== action.payload 
    );

    return {
      ...state,
      tasks: newTask,
      isModalOpen: true,
      modalContent: 'Item Removed',
      modalClass: 'modal danger'
    }
  }

  throw new Error('no matching action type');
}

const defaultState = {
  tasks: [],
  isModalOpen: false,
  modalContent: '',
  modalClass: 'modal'
}

function App() {
  const [task, setTask] = useState('');
  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleSubmit = (e) => {
    e.preventDefault();

    if(task) {
      const newTask = {id: new Date().getTime().toString(), task}

      dispatch({type: 'ADD_VALUE', payload: newTask})

      setTask('');
    } else {
      dispatch({type: 'NO_VALUE'})
    }
  }

  const modalClose = () => {
    dispatch({ type: 'MODAL_CLOSE' })
  }

  return (
    <>
    {/* <Modal modalClose={modalClose} modalClass={state.modalClass} modalContent={state.modalContent} /> */}

      { state.isModalOpen && ( <Modal modalClose={modalClose} modalClass={state.modalClass} modalContent={state.modalContent} /> ) }

      <div className="App">
        <h2 className='app-title'>Todo App</h2>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            className='form-control' 
            placeholder='Task' 
            value={task}
            onChange={(e)=> setTask(e.target.value)}
          />
          <button type='submit' className='btn'>Add Item</button>
        </form>

        <div className="items-wrapper">
          {
            state.tasks.map((item)=>{
              return (
                <div className="item" key={item.id}>
                  <p className='item-text'>{item.task}</p>
                  <button 
                  type='button' 
                  onClick={() => dispatch({ type: 'ITEM_REMOVE', payload: item.id })} 
                  className='remove-item'>x</button>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default App