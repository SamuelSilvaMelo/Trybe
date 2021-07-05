import { LOGIN_SUCCESS, LOGIN_FAILURE, REGISTER_USER } from '../actions';

const INITIAL_STATE = {
  isLogged: false,
  users: [
    {
      name: 'Samuel Melo',
      email: 'samuel@betrybe.com',
      age: 22,
      user: 'SamuelMelo',
      password: '123456',
    },
  ]
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
  default:
    return state;
  }
}

export default userReducer;
