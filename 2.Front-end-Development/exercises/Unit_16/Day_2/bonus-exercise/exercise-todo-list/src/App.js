import React from 'react';
import { connect } from 'react-redux';
import { filterTask } from './redux/actions/addTodo';
import InputTodo from './InputTodo';
import Item from './Item';

function App({ listTodo, doneTask, filterTask, filterBy }) {
  return (
    <div className="App">
      <InputTodo />
      <select onChange={ filterTask }>
        <option>Em andamento</option>
        <option>Finalizadas</option>
      </select>
      {(filterBy === 'Em andamento')
        ? (<ul>
          {
            listTodo.map((todo, index) => (
              <li key={index + 1} >
                <Item content={todo} />
              </li>
            ))
          }
        </ul>)
        : (<ul>
          {
            doneTask.map((todo, index) => (
              <li key={index + 1} >
                <Item content={todo} />
              </li>
            ))
          }
        </ul>)
      }
    </div>
  );
}

const mapStateToProps = state => ({
  listTodo: state.todoListReducer.listTodo,
  doneTask: state.todoListReducer.doneTask,
  filterBy: state.todoListReducer.filterBy,
})

const mapDispatchToProps = dispatch => ({
  filterTask: ({ target }) => dispatch(filterTask(target))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
