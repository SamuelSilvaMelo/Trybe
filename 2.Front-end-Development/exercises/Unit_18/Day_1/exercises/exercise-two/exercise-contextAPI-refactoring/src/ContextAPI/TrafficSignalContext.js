import { createContext } from 'react';

const defaultContext = {
  signal: { color: 'red' }
}

const TrafficSignalContext = createContext(defaultContext);

export default TrafficSignalContext;
