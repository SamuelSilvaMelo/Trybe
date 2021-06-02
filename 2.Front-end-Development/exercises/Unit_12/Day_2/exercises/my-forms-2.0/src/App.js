import React from 'react';
import './App.css';
import Name from './name';
import Email from './email';
import CPF from './CPF';
import Address from './address';
import City from './city';
import State from './state'

class App extends React.Component {
  constructor() {
    super()

    this.inputValue = this.inputValue.bind(this);
    this.checkCityName = this.checkCityName.bind(this);

    this.state = {
      name: '',
      email: '',
      CPF: '',
      address: '',
      city: '',
      state: '',
    }
  }

  inputValue({ target }) {
    let { name, value } = target;

    if (name === 'name') {
      value = value.toUpperCase();
      target.value = value;
    }

    if (name === 'address') {
      value = value.replace(/[^\w\s]/gi, '')
    }

    this.setState({
      [name]: value
    })
    console.log(target.value)
  }

  checkCityName({ target }) {
    let value = target.value;
    value = target.value.replace(/^\d/, '');

    this.setState({
      city: value
    })
  }

  render() {
    return (
      <form>
        <fieldset>
          <Name inputValue={ this.inputValue } />
          <Email inputValue={ this.inputValue } />
          <CPF inputValue={ this.inputValue } />
          <Address inputValue={ this.inputValue } />
          <City inputValue={ this.inputValue } checkCityName={ this.checkCityName } />
          <State inputValue={ this.inputValue } />
        </fieldset>
        <button type="submit">Enviar</button>
      </form>);
  }
}

export default App;
