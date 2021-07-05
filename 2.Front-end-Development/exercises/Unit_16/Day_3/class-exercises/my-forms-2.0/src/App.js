import React from 'react';
import { connect } from 'react-redux';
import { submitBtn, cleanPage } from './redux/actions';
import './App.css';
import Name from './components/name';
import Email from './components/email';
import CPF from './components/CPF';
import Address from './components/address';
import City from './components/city';
import State from './components/state';
import Home from './components/home';
import ProfessionalResume from './components/professionalResume';
import Occupation from './components/occupation';
import JobDescription from './components/jobDescription';
import CurriculumPreview from './components/curriculumPreview'

function App(props) {
  const { isSend, submitBtn, cleanPage } = props;

  return (
    <div>
      <h1>Currículo</h1>
      <form>
        <fieldset id="main-fieldset">
          <fieldset id="personal-information">
            <h2>Informações Pessoais</h2>
            <Name />
            <Email />
            <CPF />
            <Address />
            <City />
            <State />
            <Home />
          </fieldset>
          <fieldset id="professional-information">
            <h2>Resumo do Currículo</h2>
            <ProfessionalResume />
            <Occupation />
            <JobDescription />
          </fieldset>
          <div className="button">
            <button
              type="button"
              onClick={ () => submitBtn() }
            >
              Enviar
            </button>
            <button
              type="button"
              onClick={ () => cleanPage() }
            >
              Limpar
            </button>
          </div>
        </fieldset>
      </form>
        
      { (isSend === true) ? <CurriculumPreview /> : null }
    </div>
  );
}

const mapStateToProps = state => ({
  isSend: state.formReducer.isSend,
});

const mapDispatchToProps = dispatch => ({
  submitBtn: () => dispatch(submitBtn()),
  cleanPage: () => dispatch(cleanPage()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
