export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE' ;

export const loginUser = (input) => {
  if (input) {
    return ({ type: LOGIN_SUCCESS, })
  }
  
  return ({ type: LOGIN_FAILURE, })
}
