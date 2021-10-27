const UserModels = require('../models/userModels');

module.exports = async (req, res, next) => {
  const { name, email, password, bio } = req.body;
  const { file: { filename } } = req;

  const findUser = await UserModels.findUserById(filename);
  console.log(findUser);

  if (findUser) return next({ statusCode: 400, message: 'User already exists' });
  
    const user = {
    id: filename,
    name,
    email,
    password,
    bio,
  };

  await UserModels.create(user);

  res.status(200).json({ user });
};