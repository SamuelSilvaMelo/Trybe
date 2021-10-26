const UserService = require('../services/users');
const createToken = require('../utils/createToken');

module.exports = async (req, res, next) => {
  const { username, password } = req.body;
  const newUser = await UserService.createUser({ username, password });

  if (newUser.error) {
    newUser.statusCode = 409;
    return next(newUser);
  }

  const token = createToken(username, newUser.newUser.admin);

  res.status(200).json({ token });
};
