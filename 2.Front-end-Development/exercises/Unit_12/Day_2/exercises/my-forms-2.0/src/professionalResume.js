import React from 'react';

class ProfessionalResume extends React.Component {
  render() {
    const { inputValue, professionalResume } = this.props;
    return (
      <label>
        Resumo Profissional:
        <textarea
          name="professionalResume"
          maxLength="1000"
          value={ professionalResume }
          required={true}
          onChange={ inputValue }
        />
      </label>
    )
  }
}

export default ProfessionalResume;
