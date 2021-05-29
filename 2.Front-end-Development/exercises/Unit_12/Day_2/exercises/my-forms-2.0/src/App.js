import React from 'react';
import './App.css';
import Name from './name'

class App extends React.Component {
  constructor() {
    super()

    this.inputValue = this.inputValue.bind(this);

    this.state = {
      name: ''
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
          <Name inputValue={this.inputValue} />
        </fieldset>
        <button type="submit">Enviar</button>
      </form>);
  }
}

export default App;
