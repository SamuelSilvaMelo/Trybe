import React from 'react';
import { connect } from 'react-redux';
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

  render() {
    const { loginUser } = this.props;

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
                <button type="button" onClick={ () => loginUser(false) }>Login</button>
            </fieldset>
          </form>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  loginUser: (input) => dispatch(loginUser(input)),
});

export default connect(null, mapDispatchToProps)(FormLogin);
