import React, { useState } from 'react'

function Name({name, onNameChange}) {
  return (
    <div>
      <label htmlFor="name">Name: </label>
      <input
        id="name"
        value={name}
        onChange={ ({ target: {value } }) => onNameChange(value) }
        />
    </div>
  )
}

function FavoriteAnimal({ animal, onAnimalChange }) {
  return (
    <div>
      <label htmlFor="animal">Favorite Animal: </label>
      <input
        id="animal"
        value={animal}
        onChange={ ({ target: { value } }) => onAnimalChange(value) }
      />
    </div>
  )
}

function Display({name, animal}) {
  return <div>{`Hey ${name}, your favorite animal is: ${animal}!`}</div>
}

function App() {
  const [animal, setAnimal] = useState('')
  const [name, setName] = useState('')
  return (
    <form>
      <Name name={name} onNameChange={ setName } />
      <FavoriteAnimal animal={ animal } onAnimalChange={ setAnimal } />
      <Display name={name} animal={ animal } />
    </form>
  )
}

export default App