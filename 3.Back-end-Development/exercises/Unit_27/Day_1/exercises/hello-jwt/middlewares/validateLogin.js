const Joi = require('joi');

const validateLogin = (req, res, next) => {
  const { error } = Joi.object({
    username: Joi
      .string()
      .min(5)
      .alphanum()
      .required(),
    password: Joi
      .string()
      .min(5)
      .required(),
  }).validate(req.body);

  if (error) next(error);

  next();
};

module.exports = {
  validateLogin,
};
