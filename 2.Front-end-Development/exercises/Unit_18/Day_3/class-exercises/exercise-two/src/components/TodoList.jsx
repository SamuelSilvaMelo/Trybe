import React from 'react';

const TodoList = (props) => {
  const { todos: { todoList }, removeTodo } = props;
  return (
    <div>
      <h3>Lista de Tarefas</h3>
      <ul>
        { (todoList.length === 0)
          ? (<div>Nenhuma tarefa</div>)
          : todoList.map(({ task, id }) => (
            <li
              id={ id }
              key={ id }
            >
              { task }
              <button
                type="button"
                onClick={ () => removeTodo(id) }
              >
                Apagar
              </button>
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default TodoList;
