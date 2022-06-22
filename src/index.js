import React, { useState } from 'react'
import ReactDOM from 'react-dom/client';

function createStore(initialState) {
  let state = initialState
  function getState() {
    return state
  }
  return {getState}
}
const store = createStore([{id:1, description: 'Task 1', completed: false}])

const App = (params) => {
  console.log(store.getState())
  return <h1>Фзз</h1>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);