import { createContext } from 'react';

const defaultContext = {
  cars: {
    red: false,
    blue: false,
    yellow: false,
  },
};

const CarContext = createContext(defaultContext);

export default CarContext;
