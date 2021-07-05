import React from 'react';

class Occupation extends React.Component {
  render() {
    const { inputValue, occupationAlert, occupation } = this.props;
    return (
      <div>
        <label class="label-definition">Cargo:</label>
        <textarea
          name="occupation"
          class="textarea-definition"
          maxLength="40"
          cols="100"
          rows="2"
          placeholder="Digite o cargo desejado"
          value={ occupation }
          required={true}
          onChange={ inputValue }
          onMouseEnter={ occupationAlert }
        >
        </textarea>
      </div>
      
    )
  }
}

export default Occupation;