import React from 'react';

class Address extends React.Component {
  render() {
    const { inputValue, address } = this.props

    return (
      <label>
        Endereço:
        <input 
          name="address" 
          type="text"
          value={ address }
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
