const express = require('express');
const validateUsername = require('../middlewares/validateUsername');
const validateEmail = require('../middlewares/validateEmail');
const validatePassword = require('../middlewares/validatePassword');
const generateRandomToken = require('../utils/generateRandomToken');

const router = express.Router();

router.post(
  '/register',
  validateUsername,
  validateEmail,
  validatePassword,
  (_req, res) => {
    res.status(201).json({ "message": "user created" })
  }  
);

router.post(
  '/login',
  validateEmail,
  validatePassword,
  (_req, res) => {
    res.status(200).json({ "token": `${generateRandomToken()}` })
  }
)

module.exports = router;
