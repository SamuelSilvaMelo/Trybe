import React from 'react';

class Name extends React.Component {
  render() {
    const { inputValue, name } = this.props

    return (
      <div>
        <label class="label-definition" htmlFor="name">Nome:</label>
        <input
          id="name"
          class="input-definition"
          name="name" 
          type="text"
          value={ name }
          maxLength="40"
          placeholder="Digite seu nome"
          required={ true }
          onChange={ inputValue }
        />
      </div>
      
    )
  }
}

export default Name;
