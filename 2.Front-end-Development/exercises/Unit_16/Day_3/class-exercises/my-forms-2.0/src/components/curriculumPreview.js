import React from 'react';
import { connect } from 'react-redux';

function CurriculumPreview({ infos }) {
  return (
    <fieldset className="resume-fieldset">
      <div>
        <h1>Resumo do Currículo</h1>
        <p className="curriculum-resume">Nome Completo: { infos.name } </p>
        <p className="curriculum-resume">E-mail: { infos.email } </p>
        <p className="curriculum-resume">CPF: { infos.CPF } </p>
        <p className="curriculum-resume">Endereço:  { infos.address } </p>
        <p className="curriculum-resume">Cidade: { infos.city } </p>
        <p className="curriculum-resume">Estado/UF: { infos.state } </p>
        <p className="curriculum-resume">Moradia: { infos.homeType } </p>
        <p className="curriculum-resume">Resumo Profissional: { infos.ProfessionalResume } </p>
        <p className="curriculum-resume">Cargo: { infos.occupation } </p>
        <p className="curriculum-resume">Descriçaõ do Cargo: { infos.jobDescription } </p>
      </div>
    </fieldset>
  );
}

const mapStateToProps = state => ({
  infos: state.formReducer,
});

export default connect(mapStateToProps)(CurriculumPreview);
