/*
  REGEX VALIDATION REFERENCES
  https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
  https://pt.stackoverflow.com/questions/1386/express%C3%A3o-regular-para-valida%C3%A7%C3%A3o-de-e-mail
  https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address
*/

const validateEmail = (req, res, next) => {
  const { email } = req.body;

  const emailRegex = /[a-z0-9._-]+@[a-z0-9]+\.[a-z]+$/i;
  const checkEmail = emailRegex.test(email.toLocaleLowerCase());

  if (!email || !checkEmail) {
    return res.status(400).json({ "message": "invalid email" });
  }

  next();
};

module.exports = validateEmail;
