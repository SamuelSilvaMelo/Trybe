const requestSubreddit = (subreddit) => (
  fetch(`https://www.reddit.com/r/${subreddit}.json`)
    .then((response) => response.json())
    .then((data) => data)
)

export default requestSubreddit;
