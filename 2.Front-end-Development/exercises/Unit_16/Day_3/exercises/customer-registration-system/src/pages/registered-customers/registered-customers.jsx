import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { logout } from '../../redux/actions/index';

function RegisteredCustomers(props) {
  const { users, isLogged, logout } = props

  if (isLogged && users.length === 0) {
    return (
      <div>
        <div>
          <h3>Nenhum usuário cadastrado</h3>
          <Link to="/">
            <button>Home</button>
          </Link>
          <Link to="/register-user">
            <button>Cadastro</button>
          </Link>
        </div>
      </div>
    )
  }

  if (isLogged) {
    return (
      <div>
        <div>
          <h3>Usuários cadastrados</h3>
          <Link to="/">
            <button>Home</button>
          </Link>
          <Link to="/register-user">
            <button>Cadastro</button>
          </Link>
          <button onClick={ () => logout() }>Logout</button>
        </div>
        <div>
          { users.map((userInfo) => (
            <ul key={ userInfo.user} style={ { listStyle: 'none', textAlign: 'left' } }>
              <strong>Nome:</strong> { userInfo.name }
              <li><strong>Usuário:</strong> { userInfo.user }</li>
              <li><strong>Email:</strong> { userInfo.email }</li>
              <li><strong>Idade:</strong> { userInfo.age }</li>
            </ul>
          ))}
        </div>
      </div>
    )
  }

  return (
    <Redirect to="/" />
  )
}

const mapStateToProps = state => ({
  users: state.userReducer.users,
  isLogged: state.userReducer.isLogged,
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisteredCustomers);
