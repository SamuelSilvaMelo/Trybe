import './App.css';
import { connect } from 'react-redux';
import { selectSubreddit } from './redux/actions';

function App(props) {
  const { subredditSelectValue, changeSubredditSelect } = props;
  return (
    <div className="App">
      <h1>
        Selected:
        <span> { subredditSelectValue }</span>
      </h1>
      <form>
        <label htmlFor="select-subreddit">
          <select
            id="select-subreddit"
            value={ subredditSelectValue }
            onChange={ changeSubredditSelect }
          >
            <option>reactjs</option>
            <option>frontend</option>
          </select>
        </label>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => ({
  subredditSelectValue: state.subredditReducer.selectedSubreddit,
})

const mapDispatchToProps = (dispatch) => ({
  changeSubredditSelect: ({ target }) => dispatch(selectSubreddit(target))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
