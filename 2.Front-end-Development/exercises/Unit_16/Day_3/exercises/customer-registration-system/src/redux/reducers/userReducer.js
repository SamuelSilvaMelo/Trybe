import { LOGIN_SUCCESS, LOGIN_FAILURE, REGISTER_USER, LOGOUT } from '../actions';

const INITIAL_STATE = {
  isLogged: false,
  users: []
}

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case LOGIN_SUCCESS:
    return { ...state, isLogged: true, }
  case LOGIN_FAILURE:
    alert('Usuário Não Cadastrado')
    return { ...state, isLogged: false, }
  case REGISTER_USER:
    return { ...state, users: [ ...state.users, action.newUser ]}
  case LOGOUT:
    return { ...state, isLogged: false }
  default:
    return state;
  }
}

export default userReducer;
