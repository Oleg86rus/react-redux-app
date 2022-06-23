import * as actionTypes from './actionTypes'

export function taskCompleted(id) {
  return {
    type: actionTypes.taskUpdated,
    payload: {id: id, completed: true}
  }
}
export function changeTitle(id) {
  return {
    type: actionTypes.taskUpdated,
    payload: { id: id, title: `New title for ${id}` }
  }
}
export function deleteTask(id) {
  return {
    type: actionTypes.taskDeleted,
    payload: {id: id, }
  }
}