module.exports = (req, res, next) => {
  const { token: { admin } } = req;

  if (!admin) {
    const err = {
      statusCode: 403,
      message: 'Restricted access',
    };
    return next(err);
  }

  res.status(200).json({ secretInfo: 'Peter Parker é o Homem-Arannha' });
};
