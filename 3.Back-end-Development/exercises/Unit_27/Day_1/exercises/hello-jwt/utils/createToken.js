const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = (username, admin = false) => {
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
