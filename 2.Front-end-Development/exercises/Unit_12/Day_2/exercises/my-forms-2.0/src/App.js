import React from 'react';
import './App.css';
import Name from './name';
import Email from './email';
import CPF from './CPF';

class App extends React.Component {
  constructor() {
    super()

    this.inputValue = this.inputValue.bind(this);

    this.state = {
      name: '',
      email: '',
    }
  }

  inputValue({ target }) {
    let { name, value } = target;

    if (name === 'name') {
      value = value.toUpperCase();
      target.value = value;
    }

    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <form>
        <fieldset>
          <Name inputValue={ this.inputValue } />
          <Email inputValue={ this.inputValue } />
          <CPF inputValue={ this.inputValue } />
        </fieldset>
        <button type="submit">Enviar</button>
      </form>);
  }
}

export default App;
