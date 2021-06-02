import React from 'react';

class ProfessionalResume extends React.Component {
  render() {
    const { inputValue } = this.props;
    return (
      <label>
        Resumo Profissional:
        <textarea
          name="ProfessionalResume"
          maxLength="1000"
          required={true}
          onChange={ inputValue }
        />
      </label>
    )
  }
}

export default ProfessionalResume;
