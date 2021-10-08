const validatePassword = (req, res, next) => {
  const { password } = req.body;
  const passwordToString = password.toString();
  const checkPasswordRegex = /^[0-9]*$/i

  if (
    !password ||
    passwordToString.length < 4 ||
    passwordToString.length > 8 ||
    !passwordToString.match(checkPasswordRegex)
  ) {
    return res.status(400).json({ "message": "invalid password" });
  };

  next();
}

module.exports = validatePassword;
