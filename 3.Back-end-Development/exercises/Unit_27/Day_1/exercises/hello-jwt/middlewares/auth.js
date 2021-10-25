const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const { JWT_SECRET_PASSWORD } = process.env;

    if (!token) return new Error('Token not found');
    
    const { username, admin } = jwt.verify(token, JWT_SECRET_PASSWORD);
    
    req.token = { username, admin };
    next();  
  } catch (error) {
    const err = {
      statusCode: 401,
      message: error.message,
    };

    next(err);
  }
};
