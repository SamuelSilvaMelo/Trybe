const { findAllEmails } = require('../models/user')

const validUniqueEmail = async (req, res, next) => {
  const { email } = req.body;

  const allEmails = await findAllEmails(email);

  const checkUniqueEmail = allEmails.find((user) => user.email === email)

  if (checkUniqueEmail) return res.status(401).json({
    "error": true,
    "message": 'Você já está cadastrado no nosso sistema',
  });

  next();
}

module.exports = validUniqueEmail;
