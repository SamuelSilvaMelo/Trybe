import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import useArray from './hooks/useArray';

function App() {
  const [todos, addTodo, removeTodo] = useArray();
  return (
    <div className="App">
      <TodoForm addTodo={ addTodo } />
      <TodoList todos={ todos } removeTodo={ removeTodo } />
    </div>
  );
}

export default App;
