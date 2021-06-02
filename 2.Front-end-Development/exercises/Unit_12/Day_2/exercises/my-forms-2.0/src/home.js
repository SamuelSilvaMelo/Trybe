import React from 'react';

class Home extends React.Component {
  render() {
    const { inputValue } = this.props
    return (
      <label htmlFor="homeType">
        Moradia:
        <label htmlFor="house">
          Casa:
          <input id="house" name="homeType" type="radio" onClick={ inputValue } />
        </label>
        <label htmlFor="apartment">
          Apartamento:
          <input id="apartment" name="homeType" type="radio" onClick={ inputValue } />
        </label>
      </label>
    )
  }
}

export default Home;
