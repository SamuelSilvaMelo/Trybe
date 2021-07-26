import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [taskInput, setTaskInput] = useState('');

  const handleInput = ({ target: { value } }) => {
    setTaskInput(value);
  }

  const addTask = () => {
    addTodo(taskInput);
    setTaskInput('');
  }

  return (
    <form>
      <label>
        Tarefa:
        <input
          type="text"
          placeholder="Adicione uma tarefa"
          value={ taskInput }
          onChange={ handleInput }
        />
      </label>
      <button type="button" onClick={ () => addTask() }>Adicionar</button>
    </form>
  );
};

export default TodoForm;
