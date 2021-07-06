import React from 'react';
import { connect } from 'react-redux';
import { inputValue } from '../redux/actions';

function JobDescription(props) {
  const { inputValue, jobDescription } = props;

  return (
    <div>
    <label className="label-definition">Descrição do Cargo:</label>
    <input
      type="text"
      className="input-definition"
      name="jobDescription"
      placeholder="Digite a descrição do cargo"
      value={ jobDescription }
      maxLength="500"
      required={ true }
      onChange={ inputValue }
    />
    </div>
  );
}

const mapStateToProps = state => ({
  jobDescription: state.formReducer.jobDescription,
});

const mapDispatchToProps = dispatch => ({
  inputValue: ({ target }) => dispatch(inputValue(target)),
});

export default connect(mapStateToProps, mapDispatchToProps)(JobDescription);
