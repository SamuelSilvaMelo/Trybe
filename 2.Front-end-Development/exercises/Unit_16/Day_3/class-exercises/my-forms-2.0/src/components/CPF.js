import React from 'react';
import { connect } from 'react-redux';
import { inputValue } from '../redux/actions';

function CPF(props) {
  const { inputValue, cpf } = props;

  return (
    <div>
      <label className="label-definition" htmlFor="cpf">CPF:</label>
      <input
        id="cpf"
        className="input-definition"
        name="cpf"
        type="text"
        value={ cpf }
        maxLength="11"
        placeholder="CPF (apenas números)"
        required={ true }
        onChange={ inputValue }
      />
    </div>
  );
}

const mapStateToProps = state => ({
  cpf: state.formReducer.cpf,
});

const mapDispatchToProps = dispatch => ({
  inputValue: ({ target }) => dispatch(inputValue(target)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CPF);
