import React from 'react'
import './App.css';

class App extends React.Component {
  constructor() {
    super()

    this.changeInfo = this.changeInfo.bind(this);

    this.state = {
      fullName: '',
      email: '',
      selectedRegion: '',
      historySummary: '',
    }
  }

  changeInfo({ target }) {
    const { value } = target;
    const { name } = target

    this.setState(({
      [name]: value,
    }))
  }

  render() {
    return (
      <div className="App">
        <form>
          <label>
            Nome Completo:
            <input name="fullName" onChange={this.changeInfo} type="text" />
          </label>
  
          <label>
            Email:
            <input name="email" onChange={this.changeInfo} type="email" />
          </label>
  
          <label>
            Escolha sua região:
            <select name="selectedRegion" onChange={this.changeInfo}>
            <option>Nordeste</option>
              <option>Nordeste</option>
              <option>Norte</option>
              <option>Sudeste</option>
              <option>Sul</option>
            </select>
          </label>
  
          <label>
            Resumo de sua história:
            <textarea name="historySummary" onChange={this.changeInfo}></textarea>
          </label>
  
        </form>
      </div>
    );
  }
}

export default App;
