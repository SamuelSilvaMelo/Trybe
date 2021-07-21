import requestSubreddit from '../../services/requesRedditApi';

export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT';
export const REQUEST_SUBREDDIT_DATA = 'REQUEST_SUBREDDIT_DATA'
export const RECEIVE_SUBREDDIT_DATA = 'RECEIVE_SUBREDDIT_DATA';

export const selectSubreddit = (value) => ({
    type: SELECT_SUBREDDIT,
    value,
});

const requestSubredditApiData = () => ({
  type: REQUEST_SUBREDDIT_DATA
});

const receiveSubredditApiData = (data) => ({
  type: RECEIVE_SUBREDDIT_DATA,
  data,
});

export const requestSubredditData = (value) => (dispatch) => {
  dispatch(requestSubredditApiData());

  return (
    requestSubreddit(value)
      .then(({ data: {children} }) => {
        const data = children.map(({data: {title, subreddit, url}}) => (
          {
            title,
            subreddit,
            url,
          }
        ));
        return (
          dispatch(receiveSubredditApiData(data))
          );
      })
  );
};
