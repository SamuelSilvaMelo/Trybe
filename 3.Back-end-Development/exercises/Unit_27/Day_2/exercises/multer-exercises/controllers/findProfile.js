const UserModels = require('../models/userModels');

module.exports = async (req, res, next) => {
  const { id } = req.params;

  const user = await UserModels.findUserById(id);

  if (!user) return next({ statusCode: 404, message: 'Profile not found' });

  res.status(200).json(user);
};
