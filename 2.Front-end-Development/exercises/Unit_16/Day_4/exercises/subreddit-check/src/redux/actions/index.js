export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT';

export const selectSubreddit = (target) => {
  const { value } = target;
  return ({
    type: SELECT_SUBREDDIT,
    value,
  });
}
