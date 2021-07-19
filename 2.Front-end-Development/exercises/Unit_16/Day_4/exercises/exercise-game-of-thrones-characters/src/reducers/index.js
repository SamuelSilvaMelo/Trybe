import { combineReducers } from 'redux';
import characterInformationReducer from './characterInformationReducer';

const rootReducer = combineReducers({ characterInformationReducer });

export default rootReducer;
