const Joi = require('joi');

module.exports = (req, _res, next) => {
  const { error } = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().alphanum().required(),
    bio: Joi.string().required(),
  }).validate(req.body);

  if (error) return next(error);

  next();
};
