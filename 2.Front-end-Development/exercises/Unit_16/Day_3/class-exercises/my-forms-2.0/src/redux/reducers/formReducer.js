const INITIAL_STATE = {
  name: '',
  email: '',
  cpf: '',
  address: '',
  city: '',
  state: '',
  homeType: '',
  professionalResume: '',
  occupation: '',
  wasAlerted: false,
  jobDescription: '',
  isSend: false,
}

const formReducer = (state = INITIAL_STATE, action) => {
  return state
}

export default formReducer;
