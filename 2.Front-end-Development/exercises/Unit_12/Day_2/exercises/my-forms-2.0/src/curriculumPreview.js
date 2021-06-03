import React from 'react';

class CurriculumPreview extends React.Component {
  render() {
    const { infos } = this.props;
    return (
      <div>
          <p>Nome Completo: { infos.name } </p>
          <p>E-mail: { infos.email } </p>
          <p>CPF: { infos.CPF } </p>
          <p>Endereço:  { infos.address } </p>
          <p>Cidade: { infos.city } </p>
          <p>Estado/UF: { infos.state } </p>
          <p>Moradia: { infos.homeType } </p>
          <p>Resumo Profissional: { infos.ProfessionalResume } </p>
          <p>Cargo: { infos.occupation } </p>
          <p>Descriçaõ do Cargo: { infos.jobDescription } </p>
      </div>
    )
  }
}

export default CurriculumPreview;
