import React from 'react';

class JobDescription extends React.Component {
  render() {
    const { inputValue } = this.props;
    return (
      <label>
        Descrição do Cargo:
        <input
          type="text"
          name="jobDescription"
          maxLength="500"
          required={ true }
          onChange={ inputValue }
        />
      </label>
    )
  }
}

export default JobDescription;
