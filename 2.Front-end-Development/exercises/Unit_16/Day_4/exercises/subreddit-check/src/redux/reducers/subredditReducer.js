import { SELECT_SUBREDDIT } from '../actions';

const INITIAL_STATE = {
  selectedSubreddit: 'reactjs',
  data: [],
};

const subredditReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SELECT_SUBREDDIT:
    return {
      ...state,
      selectedSubreddit: action.value,
    }
  default:
    return state;
  }
}

export default subredditReducer;
