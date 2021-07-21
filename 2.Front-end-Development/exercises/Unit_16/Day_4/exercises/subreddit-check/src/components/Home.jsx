import React from 'react';
import { connect } from 'react-redux';
import { selectSubreddit, requestSubredditData } from '../redux/actions';

class Home extends React.Component {
  componentDidMount() {
    const { subredditSelectValue, requestSubreddits } = this.props;
    requestSubreddits(subredditSelectValue);
  }

  render() {
    const { subredditSelectValue, changeSubredditSelect, requestSubreddits } = this.props;
    return (
      <div>
        <h1>
          Selected:
          <span> { subredditSelectValue }</span>
        </h1>
        <form>
          <label htmlFor="select-subreddit">
            <select
              id="select-subreddit"
              value={ subredditSelectValue }
              onChange={ ({ target: { value } }) => {
                changeSubredditSelect(value);
                requestSubreddits(value);
               } }
            >
              <option>reactjs</option>
              <option>frontend</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  subredditSelectValue: state.subredditReducer.selectedSubreddit,
})

const mapDispatchToProps = (dispatch) => ({
  changeSubredditSelect: (value) => dispatch(selectSubreddit(value)),
  requestSubreddits: (subreddit) => dispatch(requestSubredditData(subreddit)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
