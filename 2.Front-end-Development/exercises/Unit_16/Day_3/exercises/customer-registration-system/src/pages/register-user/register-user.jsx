import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { registerNewUser } from '../../redux/actions/index';

class RegisterUser extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      age: '',
      user: '',
      password: '',
      checkPassword: '',
      disabled: true,
      redirect: false,
    };

    this.handleInput = this.handleInput.bind(this);
    this.checkPassword = this.checkPassword.bind(this);
    this.submitNewUser = this.submitNewUser.bind(this);
  }

  checkPassword() {
    const { password, checkPassword } = this.state;

    if (password !== checkPassword) {
      alert('Senhas diferentes!')
      return this.setState({ disabled: true })
    }

    if (password) {
      return this.setState({ disabled: false })
    }
  }

  handleInput({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    })
  }

  submitNewUser() {
    const { registerNewUser } = this.props;

    const {
      name,
      email,
      age,
      user,
      password,
    } = this.state;

    const newUser = {
      name,
      email,
      age,
      user,
      password,
    }

    registerNewUser(newUser);

    this.setState({
      name: '',
      email: '',
      age: '',
      user: '',
      password: '',
      checkPassword: '',
      disabled: true,
      redirect: true,
    })
  }

  render() {
    const {
      name,
      email,
      age,
      user,
      password,
      checkPassword,
      disabled,
      redirect,
    } = this.state;

    if(redirect) {
      return <Redirect to="/" />
    }

    return (
      <div>
        <div>
          Registro de usuário.
        </div>
        <form>
          <fieldset>
            <label>
              Nome:
              <input
                type="text"
                name="name"
                value={ name }
                onChange={ this.handleInput }
                required
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={ email }
                onChange={ this.handleInput }
                required
              />
            </label>
            <label>
              Idade:
              <input
                type="number"
                name="age"
                value={ age }
                max="118"
                min="18"
                onChange={ this.handleInput }
                required
              />
            </label>
            <label>
              Usuário:
              <input
                type="text"
                name="user"
                value={ user }
                onChange={ this.handleInput }
                required
              />
            </label>
            <label>
              Senha:
              <input
                type="password"
                name="password"
                value={ password }
                onChange={ this.handleInput }
                required
              />
            </label>
            <label>
              Repetir Senha:
              <input
                type="password"
                name="checkPassword"
                value={ checkPassword }
                onChange={ this.handleInput }
                onMouseLeave={ () => this.checkPassword() }
                required
              />
            </label>
            <button type="button" disabled={ disabled } onClick={ this.submitNewUser }>Cadastrar</button>
          </fieldset>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  registerNewUser: (newUser) => dispatch(registerNewUser(newUser)),
});

export default connect(null, mapDispatchToProps)(RegisterUser);
