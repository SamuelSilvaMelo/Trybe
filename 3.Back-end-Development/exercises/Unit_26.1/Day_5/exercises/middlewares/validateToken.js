const validateToken = (req, res, next) => {
  const token = req.headers.authorization;

  const validateTokenRegex = /^[a-z0-9]*$/i;
  const checkToken = token.match(validateTokenRegex);

  if (!checkToken || token.length !== 12) return res.status(401).json({ "message": "invalid token" });

  next();
}

module.exports = validateToken;
