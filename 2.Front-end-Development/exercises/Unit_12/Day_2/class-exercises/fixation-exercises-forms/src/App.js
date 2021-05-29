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
      userTerms: '',
    }

    this.fileInput = React.createRef();
  }

  handleSubmit(event) {
    event.preventDefault();
    alert(
      `Selected file - ${this.fileInput.current.files[0].name}`
    );
  }

  changeInfo({ target }) {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target

    this.setState(({
      [name]: value,
    }))
    console.log(target.type)
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
          <label>
            Foto de Perfil:
            <input type="file" onSubmit={this.handleSubmit} ref={this.fileInput}></input>
          </label>
          <label>
            Aceita os termos de usuário:
            <input name="userTerms" type="checkbox" onChange={this.changeInfo}></input>
          </label>
           <button type="submit">Enviar</button>
        </form>
      </div>
    );
  }
}

export default App;
