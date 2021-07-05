import React from 'react';

class Address extends React.Component {
  render() {
    const { inputValue, address } = this.props

    return (
      <div>
        <label class="label-definition" htmlFor="address">Endereço:</label>
        <input
          id="address"
          class="input-definition"
          name="address" 
          type="text"
          value={ address }
          maxLength="200"
          placeholder="Digite seu endereço"
          required={ true }
          onChange={ inputValue }
        />
      </div>

    )
  }
}

export default Address;
