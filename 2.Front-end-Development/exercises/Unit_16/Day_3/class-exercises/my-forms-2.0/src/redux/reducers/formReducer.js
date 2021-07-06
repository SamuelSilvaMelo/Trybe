import { HANDLE_NAME, CHECK_CITY, OCCUPATION_ALERT, SEND_FORMS, CLEAN_PAGE } from '../actions'

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
  switch (action.type) {
  case HANDLE_NAME:
    return { ...state, [action.name]: action.value };
  case CHECK_CITY:
    return { ...state, city: action.payload.city };
  case OCCUPATION_ALERT:
    const { wasAlerted } = state;

    if (wasAlerted === false) {
      window.alert('Preencha com cuidado esta informação.');
      return { ...state, wasAlerted: true };
    }
    return { ...state, wasAlerted: false };
  case SEND_FORMS:
    const { isSend } = state;
    return({
      ...state,
      isSend: (isSend === false) ? true : false,
    })
  case CLEAN_PAGE:
    return state = INITIAL_STATE;
  default:
    return state;
  }
}

export default formReducer;
