import React from 'react';

class Name extends React.Component {
  render() {
    const { inputValue, name } = this.props

    return (
      <label>
        Nome:
        <input 
          name="name" 
          type="text"
          value={ name }
          maxLength="40"
          placeholder="Digite seu nome"
          required={ true }
          onChange={ inputValue }
        />
      </label>
    )
  }
}

export default Name;
