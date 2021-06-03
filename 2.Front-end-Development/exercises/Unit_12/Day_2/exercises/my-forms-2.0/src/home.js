import React from 'react';

class Home extends React.Component {
  render() {
    const { inputValue, homeType } = this.props
    return (
      <label htmlFor="homeType">
        Moradia:
        <label htmlFor="house">
          Casa:
          <input id="house" name="homeType" type="radio" onClick={ inputValue } value={ homeType } />
        </label>
        <label htmlFor="apartment">
          Apartamento:
          <input id="apartment" name="homeType" type="radio" onClick={ inputValue } value={ homeType } />
        </label>
      </label>
    )
  }
}

export default Home;
