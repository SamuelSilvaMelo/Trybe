import React from 'react';

class City extends React.Component {
  render() {
    const { inputValue, checkCityName } = this.props

    return (
      <label>
        Cidade:
        <input 
          name="city" 
          type="text" 
          maxLength="28"
          placeholder="Digite seu cidade"
          required={ true }
          onChange={ inputValue }
          onBlur={ checkCityName }
        />
      </label>
    )
  }
}

export default City;
