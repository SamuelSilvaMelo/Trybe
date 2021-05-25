import React from 'react';
import './App.css';

class App extends React.Component {
  render() {

    const Task = (value) => {
      return (
        <li>{value}</li>
      );
    }

    const toDo = ['Resumo conteúdo', 'Exercícios', 'FlashCards', 'Refatoração projeto'];

    return (
      <ul>
        { toDo.map(item => Task(item)) }
      </ul>
    );
  }
}

export default App;

// [
//   <li>{'Resumo conteúdo'}</li>, 
//   <li>{'Exercícios'}</li>, 
//   <li>{'FlashCards'}</li>,
//   <li>{'Refatoração projeto'}</li>,
// ]
