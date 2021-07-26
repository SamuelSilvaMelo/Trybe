import { useState } from 'react';

const useArray = () => {
  const [todos, setTodos] = useState({
    id: 0,
    todoList: []
  })

  const addTodo = (task) => {
    if(todos.id === 0) {
      setTodos({
        id: 1,
        todoList: [
          {
            id: 1,
            task,
          },
        ]
      });
    } else {
      setTodos({
        id: todos.id + 1,
        todoList: [
          ...todos.todoList,
          {
            id: todos.id + 1,
            task,
          }
        ]
      });
    }
  }

  const removeTodo = (id) => {
    setTodos({
      ...todos,
      todoList: todos.todoList.filter((task) => task.id !== id)
    })
  }

  return [todos, addTodo, removeTodo]
}

export default useArray;
