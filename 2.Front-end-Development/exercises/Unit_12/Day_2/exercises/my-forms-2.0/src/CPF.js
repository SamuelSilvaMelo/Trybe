import React from 'react';

class CPF extends React.Component {
  render() {
    const { inputValue, cpf } = this.props

    return (
      <div>
        <label class="label-definition" htmlFor="cpf">CPF:</label>
        <input
          id="cpf"
          class="input-definition"
          name="cpf"
          type="text"
          value={ cpf }
          maxLength="11"
          placeholder="CPF (apenas números)"
          required={ true }
          onChange={ inputValue }
        />
      </div>

    )
  }
}

export default CPF;
