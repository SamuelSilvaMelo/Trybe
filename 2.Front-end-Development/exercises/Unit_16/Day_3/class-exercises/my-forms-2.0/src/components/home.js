import React from 'react';

class Home extends React.Component {
  render() {
    const { inputValue, homeType } = this.props
    return (
      <div>
        <label class="label-definition" htmlFor="homeType">Moradia:</label>
        <label htmlFor="house">Casa</label>
          <input id="house" name="homeType" type="radio" onClick={ inputValue } value={ homeType } />
        <label htmlFor="apartment">Apartamento</label>
          <input id="apartment" name="homeType" type="radio" onClick={ inputValue } value={ homeType } /> 
      </div>
    )
  }
}

export default Home;
