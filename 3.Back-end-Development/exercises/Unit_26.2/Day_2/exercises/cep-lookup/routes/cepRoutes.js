const express = require('express');
const { validateCepFormat, validateCepRequest } = require('../middlewares/validateCep');
const cepController = require('../controller/cepController');

const router = express.Router();

router.get(
  '/',
  cepController.findAllCeps
)

router.get(
  '/:cep',
  validateCepFormat,
  cepController.findCep,
);

router.post(
  '/',
  validateCepRequest,
  cepController.addNewCep,
)

module.exports = router;
