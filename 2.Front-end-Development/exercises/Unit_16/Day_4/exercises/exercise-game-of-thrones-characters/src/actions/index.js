import charAPI from '../services/charAPI';

export const REQUEST_CHARACTER_INFO = 'REQUEST_CHARTER_INFO';
export const RECEIVE_CHARACTER_SUCCESS = 'RECEIVE_CHARACTER_SUCCESS';
export const RECEIVE_CHARACTER_FAILURE = 'RECEIVE_CHARACTER_FAILURE';

const requestCharacterInfo = () => ({
  type: REQUEST_CHARACTER_INFO,
});

const receiveCharacterSuccess = (data) => ({
  type: RECEIVE_CHARACTER_SUCCESS,
  data,
});

const receiveCharacterFailure = (error) => ({
  type: RECEIVE_CHARACTER_FAILURE,
  error,
});

export const requestCharacterData = (characterName) => (dispatch) => {
  dispatch(requestCharacterInfo());
  return (
    charAPI(characterName)
      .then((data) => dispatch(receiveCharacterSuccess(data)))
      .catch((error) => dispatch(receiveCharacterFailure(error)))
  );
};
