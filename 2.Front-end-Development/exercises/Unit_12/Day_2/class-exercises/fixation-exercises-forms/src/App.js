import React from 'react'
import './App.css';

class App extends React.Component {
  constructor() {
    super()

    this.changeName = this.changeName.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changeRegion = this.changeRegion.bind(this);
    this.changeHistory = this.changeHistory.bind(this);

    this.state = {
      nomeCompleto: '',
      email: '',
      regiaoEscolhida: '',
      resumoHistoria: '',
    }
    console.log('constructor')
  }

  changeName(event) {
    this.setState(({
      nomeCompleto: event.target.value,
    }))
  }

  changeEmail(event) {
    this.setState(({
      email: event.target.value,
    }))
  }

  changeRegion(event) {
    this.setState(({
      regiaoEscolhida: event.target.value,
    }))
  }

  changeHistory(event) {
    this.setState(({
      resumoHistoria: event.target.value,
    }))
  }


  render() {
    console.log('render')
    console.log(this)
    return (
      <div className="App">
        <form>
          <label>
            Nome Completo:
            <input onChange={this.changeName} type="text" />
          </label>
  
          <label>
            Email:
            <input onChange={this.changeEmail} type="email" />
          </label>
  
          <label>
            Escolha sua região:
            <select onChange={this.changeRegion}>
            <option>Nordeste</option>
              <option>Nordeste</option>
              <option>Norte</option>
              <option>Sudeste</option>
              <option>Sul</option>
            </select>
          </label>
  
          <label>
            Resumo de sua história:
            <textarea onChange={this.changeHistory}></textarea>
          </label>
  
        </form>
      </div>
    );
  }
}

export default App;
