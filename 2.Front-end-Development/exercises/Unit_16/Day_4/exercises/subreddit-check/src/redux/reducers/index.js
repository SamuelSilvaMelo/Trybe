import { combineReducers } from 'redux';
import subredditReducer from './subredditReducer'

const rootReducer = combineReducers({ subredditReducer })

export default rootReducer;
