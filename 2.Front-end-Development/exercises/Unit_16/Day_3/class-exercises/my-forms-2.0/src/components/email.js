import React from 'react';
import { connect } from 'react-redux';
import { inputValue } from '../redux/actions';

function Email(props) {
  const { inputValue, email } = props;

  return (
    <div>
      <label className="label-definition" htmlFor="email">Email:</label>
      <input
        id="email"
        className="input-definition"
        name="email"
        type="email"
        value={ email }
        maxLength="50"
        placeholder="Digite seu e-mail"
        required={ true }
        onChange={ inputValue }
      />
    </div>
  )
}

const mapStateToProps = state => ({
  email: state.formReducer.email,
});

const mapDispatchToProps = dispatch => ({
  inputValue: ({ target }) => dispatch(inputValue(target)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Email);
