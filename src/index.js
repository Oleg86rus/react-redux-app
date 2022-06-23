import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client';
import * as actions from './store/actions'
import { initiateStore } from './store/store'
import { taskCompleted } from './store/actions'

const store = initiateStore()

const App = (params) => {
  const [state, setState] = useState(store.getState())
  
  useEffect(()=>{
    store.subscribe(()=>{
      setState(store.getState())
    })
  }, [])
  
  const completedTask = (taskId) => {
    store.dispatch(actions.taskCompleted(taskId))
  }
  
  const changeTitle = (taskId) => {
    store.dispatch(actions.changeTitle(taskId))
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