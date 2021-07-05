export const ADD_TODO = 'ADD_TODO';
export const DONE_TASK = 'DONE_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';
export const FILTER_TASK = 'FILTER_TASK'

export const addTodo = (todo) => ({
  type: ADD_TODO,
  todo,
});

export const doneTask = (target) => ({
  type: DONE_TASK,
  payload: {
    selectTask: target.innerHTML,
    disabled: false,
  }
});

export const removeTask = () => ({
  type: REMOVE_TASK,
})

export const filterTask = (target) => ({
  type: FILTER_TASK,
  filterTask: target.value,
})
