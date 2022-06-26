import httpService from './http.service'
const todosEndpoint = 'todos/'
function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}
const todosService = {
  fetch: async () => {
    const { data } = await httpService.get(todosEndpoint, {
      params: {
        _page: 1,
        _limit: 10,
      }
    })
    return data
  },
  create: async () => {
    const newTaskId = getRandomNumber(11, 1000000)
    const {data} = await httpService.post(todosEndpoint, {
      id: newTaskId,
      title: 'new task',
      completed: false
    })
    return data
  }
}
export default todosService