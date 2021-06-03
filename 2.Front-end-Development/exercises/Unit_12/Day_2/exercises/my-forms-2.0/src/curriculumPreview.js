import React from 'react';

class CurriculumPreview extends React.Component {
  render() {
    const { infos } = this.props;
    return (
      <fieldset className="resume-fieldset">
        <div>
          <h1>Resumo do Currículo</h1>
          <p class="curriculum-resume">Nome Completo: { infos.name } </p>
          <p class="curriculum-resume">E-mail: { infos.email } </p>
          <p class="curriculum-resume">CPF: { infos.CPF } </p>
          <p class="curriculum-resume">Endereço:  { infos.address } </p>
          <p class="curriculum-resume">Cidade: { infos.city } </p>
          <p class="curriculum-resume">Estado/UF: { infos.state } </p>
          <p class="curriculum-resume">Moradia: { infos.homeType } </p>
          <p class="curriculum-resume">Resumo Profissional: { infos.ProfessionalResume } </p>
          <p class="curriculum-resume">Cargo: { infos.occupation } </p>
          <p class="curriculum-resume">Descriçaõ do Cargo: { infos.jobDescription } </p>
        </div>
      </fieldset>

    )
  }
}

export default CurriculumPreview;
