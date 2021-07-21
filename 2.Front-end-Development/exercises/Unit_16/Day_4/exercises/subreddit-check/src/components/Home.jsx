import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { selectSubreddit, requestSubredditData, getLastUpdateTime } from '../redux/actions';

class Home extends React.Component {
  componentDidMount() {
    const { subredditSelectValue, requestSubreddits, requestTime } = this.props;
    requestSubreddits(subredditSelectValue);
    requestTime();
  }

  render() {
    const {
      subredditSelectValue,
      changeSubredditSelect,
      requestSubreddits,
      requestTime,
      time,
      subredditList,
      loading,
    } = this.props;

    return (
      <div>
        <header>
          <h1>
            Selected:
            <span> { subredditSelectValue }</span>
          </h1>
        </header>
        <nav>
          <form>
            <label htmlFor="select-subreddit">
              <select
                id="select-subreddit"
                value={ subredditSelectValue }
                onChange={ ({ target: { value } }) => {
                  changeSubredditSelect(value);
                  requestTime();
                  requestSubreddits(value);
                } }
              >
                <option>reactjs</option>
                <option>frontend</option>
              </select>
            </label>
          </form>
          <div>
            <p>
              { `Last update at: ${time} `}
            </p>
          </div>
          <div>
            <button
              type="button"
              onClick={ () => {
                requestSubreddits(subredditSelectValue)
                requestTime()
              }}
            >
              Refresh
            </button>
          </div>
        </nav>
        <main>
          <ul>
            { (loading) 
              ? <div>Loading...</div>
              : (
                subredditList.map((subreddit, index) => (
                  <li key={ index }>
                    <a href={ subreddit.url } target="_blank" rel="noreferrer">{ subreddit.title }</a>
                  </li>
                ))
              )}
          </ul>
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  subredditSelectValue: state.subredditReducer.selectedSubreddit,
  subredditList: state.subredditReducer.data,
  loading: state.subredditReducer.isFetching,
  time: state.subredditReducer.time,
})

const mapDispatchToProps = (dispatch) => ({
  changeSubredditSelect: (value) => dispatch(selectSubreddit(value)),
  requestSubreddits: (subreddit) => dispatch(requestSubredditData(subreddit)),
  requestTime: () => dispatch(getLastUpdateTime()),
})

Home.propTypes = {
  subredditSelectValue: PropTypes.string.isRequired,
  changeSubredditSelect: PropTypes.func.isRequired,
  requestSubreddits: PropTypes.func.isRequired,
  requestTime: PropTypes.func.isRequired,
  time: PropTypes.string.isRequired,
  subredditList: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
