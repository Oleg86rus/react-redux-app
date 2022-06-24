import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client';
import {taskCompleted, taskDeleted, titleChanged} from './store/task'
import configureStore from './store/store'

const store = configureStore()

const App = (params) => {
  const [state, setState] = useState(store.getState())
  
  useEffect(()=>{
    store.subscribe(()=>{
      setState(store.getState())
    })
  }, [])
  
  const completedTask = (taskId) => {
    store.dispatch(taskCompleted(taskId))
  }
  
  const changeTitle = (taskId) => {
    store.dispatch(titleChanged(taskId))
  }
  
  const deleteTask = (taskId) => {
    store.dispatch(taskDeleted(taskId))
  }
  
  return <>
    <h1>app</h1>
    <ul>
      {state.map(el=>(
        <li key={el.id}>
          <p>{el.title}</p>
          <p>{`Completed: ${el.completed}`}</p>
          <button onClick={()=>completedTask(el.id)}>Completed</button>
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
    <App />
  </React.StrictMode>
);