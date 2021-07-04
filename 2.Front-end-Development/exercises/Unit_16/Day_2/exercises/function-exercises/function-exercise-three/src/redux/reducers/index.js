import { combineReducers } from 'redux';
import changeSignalReducer from './changeSignalReducer';
import moveCarReducer from './moveCarReducer';

const rootReducer = combineReducers({ changeSignalReducer, moveCarReducer });

export default rootReducer;
