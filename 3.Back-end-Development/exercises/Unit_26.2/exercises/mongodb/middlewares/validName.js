const validName = (req, res, next) => {
  const { firstName, lastName } = req.body;

  if (!firstName || typeof firstName !== 'string') {
    return res.status(401).json({
      "error": true,
      "message": 'O campo "firstName" é obrigatório e deve ser uma string',
    });
  };

  if (!lastName || typeof lastName !== 'string') {
    return res.status(401).json({
      "error": true,
      "message": 'O campo "lastName" é obrigatório e deve ser uma string',
    });
  };

  next();
}

module.exports = validName;
