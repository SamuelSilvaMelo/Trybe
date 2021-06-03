import React from 'react';
import './App.css';
import Name from './name';
import Email from './email';
import CPF from './CPF';
import Address from './address';
import City from './city';
import State from './state';
import Home from './home';
import ProfessionalResume from './professionalResume';
import Occupation from './occupation';
import JobDescription from './jobDescription';
import CurriculumPreview from './curriculumPreview'

class App extends React.Component {
  constructor() {
    super()

    this.inputValue = this.inputValue.bind(this);
    this.checkCityName = this.checkCityName.bind(this);
    this.occupationAlert = this.occupationAlert.bind(this);
    this.submitBtn = this.submitBtn.bind(this);
    this.cleanPage = this.cleanPage.bind(this);

    this.state = {
      name: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
      state: '',
      homeType: '',
      professionalResume: '',
      occupation: '',
      wasAlerted: false,
      jobDescription: '',
      isSend: false,
    }
  }

  inputValue({ target }) {
    let { name, value } = target;

    if (name === 'name') {
      value = value.toUpperCase();
      target.value = value;
    };

    if (name === 'address') {
      value = value.replace(/[^\w\s]/gi, '')
    };

    value = target.type === 'radio' ? target.id : target.value;

    this.setState({
      [name]: value
    })
  }

  checkCityName({ target }) {
    let value = target.value;
    value = target.value.replace(/^\d/, '');

    this.setState({
      city: value
    })
  }

  occupationAlert() {
    const { wasAlerted } = this.state;

    if (wasAlerted === false) {
      window.alert('Preencha com cuidado esta informação.');
      this.setState({
        wasAlerted: true,
      })
    }
  }

  submitBtn() {
    const { isSend } = this.state;
    this.setState({
      isSend: (isSend === false) ? true : false
    })
  }

  cleanPage() {
    this.setState({
      name: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
      state: '',
      homeType: '',
      professionalResume: '',
      occupation: '',
      wasAlerted: false,
      jobDescription: '',
      isSend: false,
    });
  }

  render() {
    const {
      name,
      email,
      cpf,
      address,
      city,
      state,
      homeType,
      professionalResume,
      occupation,
      jobDescription,
      isSend,
    } = this.state;
    return (
      <div>
        <h1>Currículo</h1>
        <form>
          <fieldset id="main-fieldset">
            <fieldset id="personal-information">
              <h2>Informações Pessoais</h2>
              <Name inputValue={ this.inputValue } name={ name } />
              <Email inputValue={ this.inputValue } email={ email } />
              <CPF inputValue={ this.inputValue } cpf={ cpf } />
              <Address inputValue={ this.inputValue } address={ address } />
              <City inputValue={ this.inputValue } checkCityName={ this.checkCityName } city={ city } />
              <State inputValue={ this.inputValue } state={ state } />
              <Home inputValue={ this.inputValue } homeType={ homeType } />
            </fieldset>
            <fieldset id="professional-information">
              <h2>Resumo do Currículo</h2>
              <ProfessionalResume inputValue={ this.inputValue } ProfessionalResume={ professionalResume } />
              <Occupation inputValue={ this.inputValue } occupationAlert={ this.occupationAlert } occupation={ occupation } />
              <JobDescription inputValue={ this.inputValue } jobDescription={ jobDescription } />
            </fieldset>
            <div className="button">
              <button
                type="button"
                onClick={ this.submitBtn }
              >
                Enviar
              </button>
              <button
                type="button"
                onClick={ this.cleanPage }
              >
                Limpar
              </button>
            </div>
          </fieldset>
        </form>
          
        { (isSend === true) ? <CurriculumPreview infos={ this.state }/> : null }
      </div>
    );
  }
}

export default App;
