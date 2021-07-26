import React, { useContext } from 'react';
import { Context } from './components/RedditContext';
import LastUpdatedAt from './components/LastUpdate';
import RefreshButton from './components/RefreshButton';
import Posts from './components/Posts';
import Selector from './components/Selector';

function App() {
  const {
    selectedSubreddit,
    postsBySubreddit,
    isFetching,
  } = useContext(Context);

  const { items: posts = [] } = postsBySubreddit[selectedSubreddit];
  const isEmpty = posts.length === 0;

  return (
    <div>
      <Selector />
      <div>
        <LastUpdatedAt />
        <RefreshButton />
      </div>
      {isFetching && <h2>Loading...</h2>}
      {!isFetching && isEmpty && <h2>Empty.</h2>}
      {!isFetching && !isEmpty && <Posts />}
    </div>
  );
}

export default App;