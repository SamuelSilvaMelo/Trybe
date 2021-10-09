const express = require('express');
const { validName, validEmail, validPassword, validUniqueEmail } = require('../middlewares/index');
const User = require('../models/user');

const route = express.Router();

route.post(
  '/',
  validName,
  validEmail,
  validUniqueEmail,
  validPassword,
  async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    const createUser = await User.createUser(firstName, lastName, email, password);

    res.status(201).json(createUser);

  } catch ({ errorCode, message }) {
    res.status(401).json({
      errorCode,
      message,
    });

  }
});

module.exports = route;
