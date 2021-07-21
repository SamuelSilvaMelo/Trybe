import {
  SELECT_SUBREDDIT,
  REQUEST_SUBREDDIT_DATA,
  RECEIVE_SUBREDDIT_DATA,
  GET_LAST_UPDATE_TIME,
} from '../actions';

const INITIAL_STATE = {
  selectedSubreddit: 'reactjs',
  isFetching: false,
  data: [],
  time: '',
};

const subredditReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SELECT_SUBREDDIT:
    return {
      ...state,
      selectedSubreddit: action.value,
    };
  case REQUEST_SUBREDDIT_DATA:
    return {
      ...state,
      isFetching: true,
    };
  case RECEIVE_SUBREDDIT_DATA:
    return {
      ...state,
      data: action.data,
      isFetching: false,
    };
  case GET_LAST_UPDATE_TIME:
    return {
      ...state,
      time: action.time,
    }
  default:
    return state;
  }
}

export default subredditReducer;
