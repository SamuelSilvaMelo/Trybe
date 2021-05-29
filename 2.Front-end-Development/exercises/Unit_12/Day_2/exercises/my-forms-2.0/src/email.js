import React from 'react';

class Email extends React.Component {
  render() {
    const { inputValue } = this.props

    return (
      <label>
        Email:
        <input 
          name="email"
          type="email"
          maxLength="50"
          placeholder="Digite seu e-mail"
          required={ true }
          onChange={ inputValue }
        />
      </label>
    )
  }
}

export default Email;
