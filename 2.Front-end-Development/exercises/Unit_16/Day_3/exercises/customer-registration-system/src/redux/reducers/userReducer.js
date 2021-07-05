import { LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions';

const INITIAL_STATE = {
  isLogged: false,
  users: [
    {
      nickName: 'SamuelMelo',
      password: '123456',
    },
  ]
}

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case LOGIN_SUCCESS:
    return { ...state, isLogged: true }
  case LOGIN_FAILURE:
    return { ...state, isLogged: false }
  default:
    return state;
  }
}

export default userReducer;
