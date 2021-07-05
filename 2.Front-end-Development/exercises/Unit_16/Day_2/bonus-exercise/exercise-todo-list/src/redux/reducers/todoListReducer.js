import { ADD_TODO, DONE_TASK, REMOVE_TASK, FILTER_TASK } from '../actions/addTodo';

const INITIAL_STATE = {
  listTodo: [],
  selectTask: [],
  doneTask: [],
  filterBy: 'Em andamento',
  disabled: true,
}

const todoListReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_TODO:
    return { ...state, listTodo: [...state.listTodo, action.todo] };
  case DONE_TASK:
    return { ...state, selectTask: [...state.selectTask, action.payload.selectTask], disabled: action.payload.disabled};
  case REMOVE_TASK:
    const { listTodo, selectTask } = state;
    // Para realizar a filtragem realiza-se um filter no listTodo, se o item corrente estiver presente no array de selectTask será retornado false e o filter não vai pegar o item.
    const newArr = listTodo.filter((selectedItem) => !selectTask.includes(selectedItem));
    return ({
      ...state,
      listTodo: [...newArr],
      doneTask: [...state.doneTask, ...selectTask],
      selectTask: [],
      disabled: true,
    })
  case FILTER_TASK:
    return { ...state, filterBy: action.filterTask }
  default:
    return state;
  }
}

export default todoListReducer;
