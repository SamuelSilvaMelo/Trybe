const validateName = (req, res, next) => {
  const { name } = req.body;

  if (!name || name.length < 6) {
    return res.status(400).json({ "message": "invalid name" });
  };

  next();
};

module.exports = validateName;
