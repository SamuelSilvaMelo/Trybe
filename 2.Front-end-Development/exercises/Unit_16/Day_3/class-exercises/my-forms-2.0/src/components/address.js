import React from 'react';
import { connect } from 'react-redux';
import { inputValue } from '../redux/actions';

function Address(props) {
  const { inputValue, address } = props;

  return (
    <div>
      <label className="label-definition" htmlFor="address">Endereço:</label>
      <input
        id="address"
        className="input-definition"
        name="address" 
        type="text"
        value={ address }
        maxLength="200"
        placeholder="Digite seu endereço"
        required={ true }
        onChange={ inputValue }
      />
    </div>
  );
}

const mapStateToProps = state => ({
  address: state.formReducer.address,
});

const mapDispatchToProps = dispatch => ({
  inputValue: ({ target }) => dispatch(inputValue(target)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Address);
