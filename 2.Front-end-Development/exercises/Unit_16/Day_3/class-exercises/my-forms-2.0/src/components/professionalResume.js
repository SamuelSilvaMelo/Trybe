import React from 'react';
import { connect } from 'react-redux';
import { inputValue } from '../redux/actions';

function ProfessionalResume(props) {
  const { inputValue, professionalResume } = props;

  return (
    <div>
      <label className="label-definition">Resumo Profissional:</label>
      <textarea
        name="professionalResume"
        className="textarea-definition"
        cols="100"
        rows="10"
        placeholder="Digite o resumo da sua história profissional"
        maxLength="1000"
        value={ professionalResume }
        required={true}
        onChange={ inputValue }
      />
    </div>
  );
}

const mapStateToProps = state => ({
  professionalResume: state.formReducer.professionalResume,
});

const mapDispatchToProps = dispatch => ({
  inputValue: ({ target }) => dispatch(inputValue(target)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfessionalResume);

