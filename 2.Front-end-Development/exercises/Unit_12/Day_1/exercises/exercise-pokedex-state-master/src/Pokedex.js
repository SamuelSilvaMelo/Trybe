import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
    constructor() {
        super()
        this.state = {
            currentPokemon: 0,
            pokemonType: 'All'
        }

        this.nextPokemon = this.nextPokemon.bind(this);
    }

    filterPokemonByType() {
        const { pokemons } = this.props
        if (this.state.pokemonType === 'All') {
            return pokemons
        } else {
            return pokemons.filter(pokemon => pokemon.type === this.state.pokemonType)
        }
    }

    nextPokemon() {
        if (this.state.currentPokemon === this.filterPokemonByType().length - 1) {
            this.setState(() => ({
                currentPokemon: 0
            }))
        } else {
            this.setState((beforePokemon) => ({
                currentPokemon: beforePokemon.currentPokemon + 1
            }))
        }
    }

    changePokemonType(Type) {
        this.setState(() => ({
            currentPokemon: 0,
            pokemonType: Type
        }));
        if (this.filterPokemonByType().length - 1 === 0) {
            document.querySelector('.Next-Pokemon').disabled = true
        } else {
            document.querySelector('.Next-Pokemon').disabled = false
        }
    }

    render() {
        return (
            <div>
                 <div className="pokedex">
                    {this.filterPokemonByType().filter((_pokemon, index) => index === this.state.currentPokemon )
                    .map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)}
                </div>
                <div>
                    <button className="All" onClick={() => this.changePokemonType('All')}>All</button>
                    <button className="Electric" onClick={() => this.changePokemonType('Electric')}>Electric</button>
                    <button className="Fire" onClick={() => this.changePokemonType('Fire')}>Fire</button>
                    <button className="Bug" onClick={() => this.changePokemonType('Bug')}>Bug</button>
                    <button className="Poison" onClick={() => this.changePokemonType('Poison')}>Poison</button>
                    <button className="Psychic" onClick={() => this.changePokemonType('Psychic')}>Psychic</button>
                    <button className="Normal" onClick={() => this.changePokemonType('Normal')}>Normal</button>
                    <button className="Dragon" onClick={() => this.changePokemonType('Dragon')}>Dragon</button>
                </div>
                <div>
                    <button className="Next-Pokemon" onClick={this.nextPokemon}>Próximo Pokemon</button>
                </div>
            </div>

        );
    }
}

export default Pokedex;