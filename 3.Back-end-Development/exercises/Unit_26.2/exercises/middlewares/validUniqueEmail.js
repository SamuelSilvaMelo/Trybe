const User = require('../models/user')

const validUniqueEmail = async (req, res, next) => {
  const { email } = req.body;

  const allEmails = await User.findAllEmails(email);

  const checkUniqueEmail = allEmails.find((user) => user.email === email)

  if (checkUniqueEmail) return res.status(400).json({
    "error": true,
    "message": 'Você já está cadastrado no nosso sistema',
  });

  next();
}

module.exports = validUniqueEmail;
