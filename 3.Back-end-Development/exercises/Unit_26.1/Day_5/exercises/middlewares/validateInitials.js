const validateInitials = (req, res, next) => {
  const { initials } = req.body;
  const initialRegex = /^[A-Z.]*$/

  if (!initials || !initialRegex.test(initials) || initials.length > 3) {
    return res.status(400).json({ "message": "invalid initials" });
  };

  next();
};

module.exports = validateInitials;
