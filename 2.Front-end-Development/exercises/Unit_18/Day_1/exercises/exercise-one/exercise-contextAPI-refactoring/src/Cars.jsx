// src/Cars.jsx

import PropTypes from 'prop-types';
import React from 'react';
import CarContext from './Context/carContext';
import carBlue from './images/carBlue.jpeg';
import carRed from './images/carRed.jpeg';
import carYellow from './images/carYellow.jpeg';

class Cars extends React.Component {
  render() {
    return (
      <CarContext.Consumer>
        { (value) => {
          const { redCar, blueCar, yellowCar, moveCar } = value;
          return (
            <div>
              <div>
                <img
                  className={redCar ? 'car-right' : 'car-left'}
                  src={carRed}
                  alt="red car"
                />
                <button
                  onClick={() => moveCar('red', !redCar)}
                  type="button"
                >
                  Move
                </button>
              </div>
              <div>
                <img
                  className={blueCar ? 'car-right' : 'car-left'}
                  src={carBlue}
                  alt="blue car"
                />
                <button
                  onClick={() => moveCar('blue', !blueCar)}
                  type="button"
                >
                  Move
                </button>
              </div>
              <div>
                <img
                  className={yellowCar ? 'car-right' : 'car-left'}
                  src={carYellow}
                  alt="yellow car"
                />
                <button
                  onClick={() => moveCar('yellow', !yellowCar)}
                  type="button"
                >
                  Move
                </button>
              </div>
            </div>
          );
        }}
      </CarContext.Consumer>
    )
  }
}

Cars.propTypes = {
  moveCar: PropTypes.func,
  blueCar: PropTypes.bool,
  redCar: PropTypes.bool,
  yellowCar: PropTypes.bool,
};

Cars.defaultProps = {
  moveCar: null,
  blueCar: false,
  redCar: false,
  yellowCar: false,
}

export default Cars;
