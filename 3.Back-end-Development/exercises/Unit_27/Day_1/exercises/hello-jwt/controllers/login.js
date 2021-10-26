const createToken = require('../utils/createToken');
const UserService = require('../services/users');

module.exports = async (req, res, next) => {
  const { username, password } = req.body;

  const user = await UserService.validateUserLogin({ username, password });

  if (user.error) {
    const error = { statusCode: 401, message: user.message };
    return next(error);
  }

  res.status(200).json({ token: createToken(user.username, user.token) });
};
