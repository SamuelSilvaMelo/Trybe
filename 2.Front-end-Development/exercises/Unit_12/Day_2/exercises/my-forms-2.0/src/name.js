import React from 'react';

class Name extends React.Component {
  render() {
    const { inputValue } = this.props

    return (
      <label>
        Nome:
        <input 
        name="name" 
        type="text" 
        maxLength="40"
        placeholder="Digite seu nome"
        required={true}
        onChange={ inputValue }
        />
      </label>
    )
  }
}

export default Name;
