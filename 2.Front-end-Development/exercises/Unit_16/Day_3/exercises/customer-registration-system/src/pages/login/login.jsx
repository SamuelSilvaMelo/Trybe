import FormLogin from '../../components/formLogin';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';

function Login(props) {
  const { isLogged } = props;

  if(isLogged) {
    return <Redirect to="/registered-customers" />
  }

  return (
    <FormLogin />
  );
}

const mapStateToProps = state => ({
  isLogged: state.userReducer.isLogged,
})

export default connect(mapStateToProps, null)(Login);
