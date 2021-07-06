import React from 'react';
import { connect } from 'react-redux';
import { inputValue } from '../redux/actions';

function Name(props) {
  const { inputValue, name } = props;

  return (
    <div>
      <label className="label-definition" htmlFor="name">Nome:</label>
      <input
        id="name"
        className="input-definition"
        name="name" 
        type="text"
        value={ name }
        maxLength="40"
        placeholder="Digite seu nome"
        required={ true }
        onChange={ inputValue }
      />
    </div>
  );
}

const mapStateToProps = state => ({
  name: state.formReducer.name,
});

const mapDispatchToProps = dispatch => ({
  inputValue: ({ target }) => dispatch(inputValue(target)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Name);
