import React, { useState, createContext, useEffect } from 'react';
import PropTypes from 'prop-types';

import { getPostsBySubreddit } from '../services/redditAPI';

const Context = createContext();

function RedditProvider({ children }) {
  const [postsBySubreddit, setPostsBySubreddit] = useState({
    frontend: {},
    reactjs: {},
  });
  const [selectedSubreddit, setSelectedSubreddit] = useState('reactjs');
  const [shouldRefreshSubreddit, setShouldRefreshSubreddit] = useState(false);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    const fetchPosts = () => {
      if (!shouldFetchPosts()) return;
  
      setShouldRefreshSubreddit(false);
      setIsFetching(true);
  
      getPostsBySubreddit(selectedSubreddit)
        .then(handleFetchSuccess, handleFetchError);
    }

    const shouldFetchPosts = () => {
      const posts = postsBySubreddit[selectedSubreddit];
  
      if (!posts.items) return true;
      if (isFetching) return false;
      return shouldRefreshSubreddit;
    }
  
    const handleFetchSuccess = (json) => {
      const lastUpdated = Date.now();
      const items = json.data.children.map((child) => child.data);
      const newPostsBySubreddit = {
        ...postsBySubreddit,
        [selectedSubreddit]: { items, lastUpdated },
      }
  
      setShouldRefreshSubreddit(false);
      setIsFetching(false);
      setPostsBySubreddit(newPostsBySubreddit)
    }
  
    const handleFetchError = (error) => {
      const newPostsBySubreddit = {
        ...postsBySubreddit,
        [selectedSubreddit]: {
          error: error.message,
          items: [],
        }
      }
  
      setShouldRefreshSubreddit(false);
      setIsFetching(false);
      setPostsBySubreddit(newPostsBySubreddit)
    }

    fetchPosts();
  }, [isFetching, postsBySubreddit, selectedSubreddit, shouldRefreshSubreddit])

  const handleSubredditChange = (selectedSubreddit) => {
    setSelectedSubreddit(selectedSubreddit)
  }

  const handleRefreshSubreddit = () => {
    setShouldRefreshSubreddit(true)
  }

  const context = {
    postsBySubreddit,
    selectedSubreddit,
    shouldRefreshSubreddit,
    isFetching,
    selectSubreddit: handleSubredditChange,
    refreshSubreddit: handleRefreshSubreddit,
    availableSubreddits: Object.keys(postsBySubreddit),
    posts: postsBySubreddit[selectedSubreddit].items,
  };

  return (
    <Context.Provider value={context}>
      {children}
    </Context.Provider>
  );
}

RedditProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { RedditProvider as Provider, Context };