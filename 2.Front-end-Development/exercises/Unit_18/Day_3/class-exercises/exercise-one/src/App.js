import React from 'react';
import useCounter from './useCounter';

function App() {
  const [counter, randomNumber, isCorrect] = useCounter();

  return (
    <div className="App">
      <p>Hello World!</p>
      <p>{ counter }</p>
      <p>{ randomNumber }</p>
      { isCorrect && <div>Acertou!</div>}
    </div>
  );
}

export default App;
