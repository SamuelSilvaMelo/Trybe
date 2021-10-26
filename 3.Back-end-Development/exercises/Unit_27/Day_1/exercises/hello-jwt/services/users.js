const UserModels = require('../models/users');

const isAdmin = () => {
  const randoNumer = Math.floor(Math.random() * 100);

  if (randoNumer > 50) return true;

  return false;
};

const createUser = async ({ username, password }) => {
  const userAlreadyExists = await UserModels.findUserByUserName(username);

  if (userAlreadyExists) return { error: true, message: 'User already exists' };
  
  const newUser = { username, password, admin: isAdmin() };

  await UserModels.createUser(newUser);

  return { message: 'User Created', newUser };
};

const validateUserLogin = async ({ username, password }) => {
  const user = await UserModels.findUserByUserName(username);

  if (!user || user.password !== password) {
    return { error: true, message: 'Invalid username or password' };
  }

  return { username: user.username, admin: user.admin };
};

module.exports = {
  createUser,
  validateUserLogin,
};
