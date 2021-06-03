import React from 'react';

class City extends React.Component {
  render() {
    const { inputValue, checkCityName, city } = this.props

    return (
      <div>
        <label class="label-definition" htmlFor="city">Cidade:</label>
        <input 
          name="city"
          class="input-definition"
          type="text"
          value={ city }
          maxLength="28"
          placeholder="Digite seu cidade"
          required={ true }
          onChange={ inputValue }
          onBlur={ checkCityName }
        />
      </div>
      
    )
  }
}

export default City;
