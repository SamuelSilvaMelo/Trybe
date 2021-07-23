import { createContext } from 'react';

const defaultContext = {
  cars: {
    red: false,
    blue: false,
    yellow: false,
  },
}

const CarsContext = createContext(defaultContext);

export default CarsContext;
