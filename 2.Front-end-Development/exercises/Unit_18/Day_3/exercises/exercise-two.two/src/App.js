import React, { useState, useEffect } from 'react';

function Greeting({ initialName = '' }) {
  const [name, setName] = useState(localStorage.getItem('name') || initialName);

  useEffect(() => {
    localStorage.setItem('name', name)
  }, [name])

  function handleChange(event) {
    setName(event.target.value);
  }
  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input onChange={handleChange} id="name" value={ name } />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  );
}

function App() {
  return <Greeting />;
}

export default App;
