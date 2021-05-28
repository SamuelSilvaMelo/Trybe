import './App.css';
import React from 'react'; 

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      numeroDeCliquesBtn1: 0,
      numeroDeCliquesBtn2: 0,
      numeroDeCliquesBtn3: 0
    }

    this.clickBtn = this.clickBtn.bind(this)
  }

  clickBtn(event) {
    const classBtn = event.target.className;
    const btnColor = event.target.style;

    if (classBtn === 'first-btn') {
      this.setState((estadoAnterior, _props) => ({
        numeroDeCliquesBtn1: estadoAnterior.numeroDeCliquesBtn1 + 1,
      }));
      
      (this.state.numeroDeCliquesBtn1 % 2 === 0) ? btnColor.backgroundColor = 'grey' : btnColor.backgroundColor = 'green';

      console.log(btnColor.backgroundColor);
    } 
    
    if (classBtn === 'second-btn') {
      this.setState((estadoAnterior, _props) => ({
        numeroDeCliquesBtn2: estadoAnterior.numeroDeCliquesBtn2 + 1,
      }));

      (this.state.numeroDeCliquesBtn2 % 2 === 0) ? btnColor.backgroundColor = 'grey' : btnColor.backgroundColor = 'green';

      console.log(btnColor.backgroundColor);
    }
    
    if (classBtn === 'third-btn') {
      this.setState((estadoAnterior, _props) => ({
        numeroDeCliquesBtn3: estadoAnterior.numeroDeCliquesBtn3 + 1,
      }));

      (this.state.numeroDeCliquesBtn3 % 2 === 0) ? btnColor.backgroundColor = 'grey' : btnColor.backgroundColor = 'green';

      console.log(btnColor.backgroundColor);
    }
  }

  render() {
    return (
      <div>
        <button className="first-btn" onClick={this.clickBtn}>Clique aqui! <br /> Você clicou {this.state.numeroDeCliquesBtn1} vezes</button>
        <button className="second-btn" onClick={this.clickBtn}>Acho melhor clicar aqui. <br /> Você clicou {this.state.numeroDeCliquesBtn2} vezes</button>
        <button className="third-btn" onClick={this.clickBtn}>Não aperte esse botão! <br /> Você clicou {this.state.numeroDeCliquesBtn3} vezes</button>
      </div>
    )
  }
}

export default App;
