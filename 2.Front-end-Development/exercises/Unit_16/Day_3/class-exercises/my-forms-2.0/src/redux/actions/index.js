export const HANDLE_NAME = 'HANDLE_NAME';
export const CHECK_CITY = 'CHECK_CITY';
export const OCCUPATION_ALERT = 'OCCUPATION_ALERT';
export const SEND_FORMS = 'SEND_FORMS';
export const CLEAN_PAGE = 'CLEAN_PAGE';

export const inputValue = (target) => {
  let { name, value } = target;

  if (name === 'name') {
    value = value.toUpperCase();
    target.value = value;
  };

  if (name === 'address') {
    value = value.replace(/[^\w\s]/gi, '');
  };

  value = target.type === 'radio' ? target.id : target.value;

  return ({
    type: HANDLE_NAME,
    name,
    value,
  });
}

export const checkCityName = (target) => {
  let value = target.value;
  value = target.value.replace(/^\d/, '');

  console.log("CHECK_CITY");

  return ({
    type: CHECK_CITY,
    payload: {
      city: value
    }
  });
};

export const occupationAlert = () => ({
  type: OCCUPATION_ALERT,
});

export const submitBtn = () => ({
  type: SEND_FORMS,
});

export const cleanPage = () => ({
  type: CLEAN_PAGE,
})
