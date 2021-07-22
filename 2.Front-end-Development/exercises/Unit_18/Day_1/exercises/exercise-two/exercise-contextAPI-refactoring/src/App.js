import React from 'react';
import './App.css';
import TrafficSignalContext from './ContextAPI/TrafficSignalContext';
import TrafficSignal from './TrafficSignal';
import CarsContext from './ContextAPI/CarsContext';
import Cars from './Cars';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cars: {
        red: false,
        blue: false,
        yellow: false,
      },
      signal: { color: 'red' },
    };

    this.moveCar = this.moveCar.bind(this);
    this.changeSignal = this.changeSignal.bind(this);
  }

  moveCar(car, side) {
    this.setState({
      cars: {
        [car]: side
      },
    });
  }

  changeSignal(signalColor) {
    this.setState({
      signal: {
        color: signalColor,
      },
    });
  }

  render() {
    const {
      cars: { red, blue, yellow },
      signal: { color },
    } = this.state;

    const CarsContextValue = {
      redCar: red,
      blueCar: blue,
      yellowCar: yellow,
      moveCar: this.moveCar,
    }

    const TrafficSignalContextValue = {
      signalColor: color,
      changeSignal: this.changeSignal,
    }

    return (
      <div className="container">
        <CarsContext.Provider value={ CarsContextValue }>
          <Cars />
        </CarsContext.Provider>
        <TrafficSignalContext.Provider value={ TrafficSignalContextValue }>
          <TrafficSignal />
        </TrafficSignalContext.Provider>
      </div>
    );
  }
}

export default App;
