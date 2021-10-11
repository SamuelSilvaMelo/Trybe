/*
  REGEX VALIDATION REFERENCES
  https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
  https://pt.stackoverflow.com/questions/1386/express%C3%A3o-regular-para-valida%C3%A7%C3%A3o-de-e-mail
  https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address
*/

const validEmail = (req, res, next) => {
  const { email } = req.body;

  if (!email) return res.status(401).json({
    "error": true,
    "message": 'O campo "email" é obrigatório',
  });

  const emailRegex = /[a-z0-9._-]+@[a-z0-9]+\.[a-z]+$/i;
  const checkEmailValidation = emailRegex.test(email.toLowerCase());

  if (!checkEmailValidation) return res.status(401).json({
    "error": true,
    "message": 'O campo "email" não corresponde a um e-mail válido'
  });

  next();
};

module.exports = validEmail;
