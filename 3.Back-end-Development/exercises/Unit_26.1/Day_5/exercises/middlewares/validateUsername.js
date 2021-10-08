const validateUsername = (req, res, next) => {
  const { username } = req.body;

  if (!username || username.length < 4) {
    return res.status(400).json({ "message": "invalid username" });
  }

  next();
}

module.exports = validateUsername;
