const Joi = require('joi');

const validateCepFormat = (req, _res, next) => {
  const { cep } = req.params;

  const validateCepRegex = /^\d{5}-?\d{3}$/;

  if(!validateCepRegex.test(cep)) {
    return (
      next({
        error: {
          code: "invalidData",
          message: "CEP inválido"
        },
      })
    );
  };

  next();
};

const validateCepRequest = (req, _res, next) => {
  const { error } = Joi.object({
    cep: Joi.string().not().empty().required().regex(/^\d{5}-?\d{3}$/),
    logradouro: Joi.string().not().empty().required(),
    bairro: Joi.string().not().empty().required(),
    localidade: Joi.string().not().empty().required(),
    uf: Joi.string().not().empty().length(2).required(),
  }).validate(req.body);

  if (error) return next(error);

  next();
}

module.exports = { 
  validateCepFormat,
  validateCepRequest
};
