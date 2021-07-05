import React from 'react';
import { connect } from 'react-redux';
import { inputValue, checkCityName } from '../redux/actions';

function City(props) {
  const { inputValue, checkCityName, city } = props;

  return (
    <div>
      <label className="label-definition" htmlFor="city">Cidade:</label>
      <input 
        name="city"
        className="input-definition"
        type="text"
        value={ city }
        maxLength="28"
        placeholder="Digite seu cidade"
        required={ true }
        onChange={ inputValue }
        onBlur={ checkCityName }
      />
    </div>
    
  );
}

const mapStateToProps = state => ({
  city: state.formReducer.city,
});

const mapDispatchToProps = dispatch => ({
  inputValue: ({ target }) => dispatch(inputValue(target)),
  checkCityName: ({ target }) => dispatch(checkCityName(target)),
});

export default connect(mapStateToProps, mapDispatchToProps)(City);
