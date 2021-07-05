import React from 'react';

class ProfessionalResume extends React.Component {
  render() {
    const { inputValue, professionalResume } = this.props;
    return (
      <div>
        <label class="label-definition">Resumo Profissional:</label>
        <textarea
          name="professionalResume"
          class="textarea-definition"
          cols="100"
          rows="10"
          placeholder="Digite o resumo da sua história profissional"
          maxLength="1000"
          value={ professionalResume }
          required={true}
          onChange={ inputValue }
        />
      </div>

    )
  }
}

export default ProfessionalResume;
