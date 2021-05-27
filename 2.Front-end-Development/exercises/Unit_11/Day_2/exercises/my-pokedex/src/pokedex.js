import React from 'react'
import Data from './data'
import Pokemon from './pokemon'

class Pokedex extends React.Component {
  render() {
    return (
      <div>
        <h1>Pokedex</h1>
        <div className='pokedex'>
          {Data.map(pokemon => <Pokemon key={pokemon.id} PokemonInfo={pokemon} />)}
        </div>
      </div>
    )
  }
}

export default Pokedex