import { CHANGE_SIGNAL } from '../actions/actionCreators';

const INITIAL_STATE = {
  signal: 'red',
};

const changeSignalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case CHANGE_SIGNAL:
    return { ...state, signal: action.payload }
  default:
    return state;
  }
}

export default changeSignalReducer;
