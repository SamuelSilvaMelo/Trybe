import React from 'react';


class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight, image } = this.props.PokemonInfo

    return (
      <div className='Pokemon'>
        <div>
          <div>Nome: {name}</div>
          <div>Tipo: {type}</div>
          <div>Peso médio: {averageWeight.value}{averageWeight.measurementUnit}</div>
        </div>
        <div>
          <img src={image} alt={name}/>
        </div>
      </div>
    );
  }
}

export default Pokemon;
