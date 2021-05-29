import React from 'react';

class Address extends React.Component {
  render() {
    const { inputValue } = this.props

    return (
      <label>
        Endereço:
        <input 
        name="address" 
        type="text" 
        maxLength="200"
        placeholder="Digite seu endereço"
        required={ true }
        onChange={ inputValue }
        />
      </label>
    )
  }
}

export default Address;
