import { combineReducers } from 'redux';
import { CHANGE_SIGNAL, MOVE_CAR } from './actionCreators'

const CHANGE_SIGNAL_INITIAL_STATE = {
  signal: 'red',
};

const changeSignalReducer = (state = CHANGE_SIGNAL_INITIAL_STATE, action) => {
  switch (action.type) {
  case CHANGE_SIGNAL:
    return state = { signal: action.payload };
  default:
    return state;
  }
};

const MOVE_CAR_INITIAL_STATE = {
  cars: {
    red: false,
    yellow: false,
    blue: false,
  }
}

const moveCarReducer = (state = MOVE_CAR_INITIAL_STATE, action) => {
  switch(action.type) {
  case MOVE_CAR:
    return { ...state, cars: { ...state.cars, [action.car]: action.side } }
    // Precisei da ajuda do gabarito para atualizar esse state;
  default:
    return state;
  }
}

const rootReducer = combineReducers({ changeSignalReducer, moveCarReducer })

export default rootReducer;