import React from 'react';
import { connect } from 'react-redux';
import { inputValue } from '../redux/actions';

function Home(props) {
  const { inputValue, homeType } = props;

  return (
    <div>
      <label className="label-definition" htmlFor="homeType">Moradia:</label>
      <label htmlFor="house">Casa</label>
        <input id="house" name="homeType" type="radio" onClick={ inputValue } value={ homeType } />
      <label htmlFor="apartment">Apartamento</label>
        <input id="apartment" name="homeType" type="radio" onClick={ inputValue } value={ homeType } /> 
    </div>
  );
}

const mapStateToProps = state => ({
  homeType: state.formReducer.homeType,
});

const mapDispatchToProps = dispatch => ({
  inputValue: ({ target }) => dispatch(inputValue(target)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
