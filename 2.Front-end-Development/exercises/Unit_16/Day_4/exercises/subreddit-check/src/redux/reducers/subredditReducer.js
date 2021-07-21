import {
  SELECT_SUBREDDIT,
  REQUEST_SUBREDDIT_DATA,
  RECEIVE_SUBREDDIT_DATA,
} from '../actions';

const INITIAL_STATE = {
  selectedSubreddit: 'reactjs',
  isFetching: false,
  data: {},
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
    }
  default:
    return state;
  }
}

export default subredditReducer;
