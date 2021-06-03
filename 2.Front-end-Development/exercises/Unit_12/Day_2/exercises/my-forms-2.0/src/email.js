import React from 'react';

class Email extends React.Component {
  render() {
    const { inputValue, email } = this.props

    return (
      <div>
        <label class="label-definition" htmlFor="email">Email:</label>
        <input
          id="email"
          class="input-definition"
          name="email"
          type="email"
          value={ email }
          maxLength="50"
          placeholder="Digite seu e-mail"
          required={ true }
          onChange={ inputValue }
        />
      </div>
      
    )
  }
}

export default Email;
