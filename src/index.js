import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client';
import {
  completeTask, getTasks,
  taskDeleted,
  titleChanged,
} from './store/task'
import configureStore from './store/store'
import { Provider, useDispatch, useSelector } from 'react-redux'

const store = configureStore()

const App = (params) => {
  const state = useSelector((state) => state)
  const dispatch = useDispatch()
  
  useEffect(()=>{
    dispatch(getTasks())
  }, [])
  
  const changeTitle = (taskId) => {
    dispatch(titleChanged(taskId))
  }
  
  const deleteTask = (taskId) => {
    dispatch(taskDeleted(taskId))
  }
  
  return <>
    <h1>app</h1>
    <ul>
      {state.map(el=>(
        <li key={el.id}>
          <p>{el.title}</p>
          <p>{`Completed: ${el.completed}`}</p>
          <button onClick={()=>dispatch(completeTask(el.id))}>Completed</button>
          <button onClick={()=>changeTitle(el.id)}>Change title</button>
          <button onClick={()=>deleteTask(el.id)}>Delete</button>
          <hr/>
        </li>
      ))}
    </ul>
  </>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);