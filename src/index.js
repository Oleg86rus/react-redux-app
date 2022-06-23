import React, { useState } from 'react'
import ReactDOM from 'react-dom/client';

function taskReducer(state, action) {
  switch (action.type) {
    case 'task/completed':
      const newArray = [...state]
      const elementIndex = newArray.findIndex(el=>el.id===action.payload.id)
      newArray[elementIndex].completed = true
      return newArray
  }
}

function createStore(reducer, initialState) {
  let state = initialState
  function getState() {
    return state
  }
  function dispatch(action) {
    state = reducer(state, action)
  }
  return {getState, dispatch}
}
const store = createStore(taskReducer, [
  {id: 1, description: 'Task 1', completed: false},
  {id: 2, description: 'Task 2', completed: false}
])

const App = (params) => {
  console.log(store.getState())
  const completedTask = (taskId) => {
    store.dispatch({type: "task/completed", payload: {id:taskId}})
    console.log(store.getState())
  }
  const state = store.getState()
  // store.dispatch({type: 'task/completed', preload: {id:1}})
  return <>
    <h1>app</h1>
    <ul>
      {state.map(el=>(
        <li key={el.id}>
          <p>{el.description}</p>
          <p>{`Completed: ${el.completed}`}</p>
          <button onClick={()=>completedTask(el.id)}>Completed</button>
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