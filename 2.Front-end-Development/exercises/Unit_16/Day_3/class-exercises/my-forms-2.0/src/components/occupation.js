import React from 'react';
import { connect } from 'react-redux';
import { inputValue, occupationAlert } from '../redux/actions';

function Occupation(props) {
  const { inputValue, occupationAlert, occupation } = props;

  return (
    <div>
      <label className="label-definition">Cargo:</label>
      <textarea
        name="occupation"
        className="textarea-definition"
        maxLength="40"
        cols="100"
        rows="2"
        placeholder="Digite o cargo desejado"
        value={ occupation }
        required={ true }
        onChange={ inputValue }
        onMouseEnter={ occupationAlert }
      >
      </textarea>
    </div>
  );
}

const mapStateToProps = state => ({
  occupation: state.formReducer.occupation,
});

const mapDispatchToProps = dispatch => ({
  inputValue: ({ target }) => dispatch(inputValue(target)),
  occupationAlert: () => dispatch(occupationAlert()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Occupation);