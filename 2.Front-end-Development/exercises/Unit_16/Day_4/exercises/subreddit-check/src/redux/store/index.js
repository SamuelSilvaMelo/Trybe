import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
const { createStore, applyMiddleware } = require('redux');

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk, logger)
  )
)

export default store;
