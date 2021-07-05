import React from 'react';

class JobDescription extends React.Component {
  render() {
    const { inputValue, jobDescription } = this.props;
    return (
      <div>
      <label class="label-definition">Descrição do Cargo:</label>
      <input
        type="text"
        class="input-definition"
        name="jobDescription"
        placeholder="Digite a descrição do cargo"
        value={ jobDescription }
        maxLength="500"
        required={ true }
        onChange={ inputValue }
      />
      </div>

    )
  }
}

export default JobDescription;
