import React from 'react';
import './App.css';
import Cars from './Cars';
import CarContext from './Context/carContext';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cars: {
        red: false,
        blue: false,
        yellow: false,
      },
    }

    this.moveCar = this.moveCar.bind(this);
  }

  moveCar(car, side) {
    this.setState({
      cars: {
        [car]: side,
      }
    })
  }

  render() {
    const { cars: { red, blue, yellow } } = this.state;
    
    const state = {
      redCar: red,
      blueCar: blue,
      yellowCar: yellow,      
      moveCar: this.moveCar,
    }
    return (
      <CarContext.Provider value={ state }>
        <Cars />
      </ CarContext.Provider >
    );
  }
}

export default App;
