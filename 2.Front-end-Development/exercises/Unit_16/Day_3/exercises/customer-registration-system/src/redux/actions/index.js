export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE' ;
export const REGISTER_USER = 'REGISTER_USER';

export const loginUser = (input) => {
  if (input) {
    return ({
      type: LOGIN_SUCCESS,
    })
  }
  
  return ({
    type: LOGIN_FAILURE,
  })
}

export const registerNewUser = (newUser) => ({
  type: REGISTER_USER,
  newUser,
})
