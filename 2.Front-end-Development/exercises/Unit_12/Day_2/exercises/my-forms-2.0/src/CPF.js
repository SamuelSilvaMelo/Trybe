import React from 'react';

class CPF extends React.Component {
  render() {
    const { inputValue, cpf } = this.props

    return (
      <label>
        CPF:
        <input 
          name="cpf"
          type="text"
          value={ cpf }
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
