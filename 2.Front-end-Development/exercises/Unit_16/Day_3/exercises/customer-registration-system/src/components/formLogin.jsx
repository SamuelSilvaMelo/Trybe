import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginUser } from '../redux/actions';

class FormLogin extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      loginInput: '',
      passwordInput: '',
    }

    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin({ target }) {
    const { name, value } = target;
    
    this.setState({
      [name]: value,
    })
  }

  checkLogin() {
    const { loginInput, passwordInput } = this.state;
    const { users, loginUser } = this.props;

    if (users.some(({ user }) => user === loginInput && users.some(({ password }) => password === passwordInput))) {
      return loginUser(true)
    }
    return loginUser(false)
  }

  render() {
    return (
      <div>
        <div>
          Login
        </div>
        <div>
          <form>
            <fieldset>
              <label>
                Usuário:
                <input
                  type="text"
                  name="loginInput"
                  onChange={ this.handleLogin }
                />
              </label>
              <label>
                Senha:
                <input
                  type="password"
                  name="passwordInput"
                  onChange={ this.handleLogin }
                />
              </label>
                <button type="button" onClick={ () => this.checkLogin() }>Login</button>
                <Link to="/register-user">
                  <button type="button" >Cadastro</button>
                </Link>
            </fieldset>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  users: state.userReducer.users,
});

const mapDispatchToProps = dispatch => ({
  loginUser: (input) => dispatch(loginUser(input)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormLogin);
