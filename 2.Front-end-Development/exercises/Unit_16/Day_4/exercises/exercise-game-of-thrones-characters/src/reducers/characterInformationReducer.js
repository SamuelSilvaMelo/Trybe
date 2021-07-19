import {
  REQUEST_CHARACTER_INFO,
  RECEIVE_CHARACTER_SUCCESS,
  RECEIVE_CHARACTER_FAILURE,
} from '../actions';

const INITIAL_STATE = {
  character: {},
  loading: true,
  error: '',
}

const characterInformationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_CHARACTER_INFO:
    return {
      ...state,
      loading: true,
    };
  case RECEIVE_CHARACTER_SUCCESS:
    return {
      ...state,
      character: action.data,
      loading: false,
    };
  case RECEIVE_CHARACTER_FAILURE:
    return {
      ...state,
      error: action.error,
      loading: false,
    }
  default: 
    return state;
  }
}

export default characterInformationReducer;
