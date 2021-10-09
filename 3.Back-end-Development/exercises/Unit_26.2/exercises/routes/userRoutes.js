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
    res.status(400).json({
      errorCode,
      message,
    });
  }
});

route.get(
  '/',
  async (_req, res) => {
    try {
      const allUsers = await User.findAllUsers();
  
      res.status(200).json(allUsers);

    } catch (err) {
      res.status(400).json({ error: true, message: err.message });

    };
});

route.get(
  '/:id',
  async (req, res) => {
    try {
      const { id } = req.params;
  
      const foundUser = await User.findUserById(id);
  
      res.status(200).json(foundUser);
      
    } catch (err) {
      res.status(404).json({
        "error": true,
        "message": "Usuário não encontrado",
        "TypeError": err.message
      });
    };
});

module.exports = route;
