const TASK_UPDATED = "task/updated"
const TASK_DELETED = "task/deleted"

export function taskCompleted(id) {
  return {
    type: TASK_UPDATED,
    payload: {id: id, completed: true}
  }
}
export function titleChanged(id) {
  return {
    type: TASK_UPDATED,
    payload: { id: id, title: `New title for ${id}` }
  }
}
export function taskDeleted(id) {
  return {
    type: TASK_DELETED,
    payload: {id: id, }
  }
}

export function taskReducer(state = [], action) {
  switch (action.type) {
    case TASK_UPDATED: {
      const newArray = [...state]
      const elementIndex = newArray.findIndex(el=>el.id===action.payload.id)
      newArray[elementIndex] = {...newArray[elementIndex], ...action.payload}
      return newArray
    }
    case TASK_DELETED: {
      const newArray = [...state]
      const elementIndex = newArray.findIndex(el=>el.id===action.payload.id)
      newArray.splice(elementIndex, 1)
      return newArray
    }
    default:
      return state
  }
}

export default taskReducer