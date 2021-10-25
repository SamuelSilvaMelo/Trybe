const jwt = require('jsonwebtoken');
require('dotenv').config();

const createToken = (username, admin = false) => {
  const payload = {
    username,
    admin,
  };
  const { JWT_SECRET_PASSWORD } = process.env;
  const jwtConfig = {
    expiresIn: '1h',
    algorithm: 'HS256',
  };

  return jwt.sign(payload, JWT_SECRET_PASSWORD, jwtConfig);
};

const login = (req, res, next) => {
  const { username, password } = req.body;
  const { ADMIN_PASSWORD } = process.env;

  if (username === 'admin' && password !== ADMIN_PASSWORD) {
    const err = {
      statusCode: 401,
      message: 'Unauthorized - Username ou Password incorreto',
    };
    return next(err);
  }

  const admin = username === 'admin' && password === ADMIN_PASSWORD;

  res.status(200).json({ token: createToken(username, admin) });
};

module.exports = {
  login,
};
