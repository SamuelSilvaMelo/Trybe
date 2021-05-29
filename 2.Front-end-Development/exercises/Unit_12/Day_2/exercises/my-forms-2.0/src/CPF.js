import React from 'react';

class CPF extends React.Component {
  render() {
    const { inputValue } = this.props

    return (
      <label>
        CPF:
        <input 
          name="CPF"
          type="text"
          maxLength="11"
          placeholder="CPF (apenas números)"
          required={ true }
          onChange={ inputValue }
        />
      </label>
    )
  }
}

export default CPF;
