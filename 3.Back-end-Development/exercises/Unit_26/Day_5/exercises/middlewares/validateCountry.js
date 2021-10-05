const validateCountry = (req, res, next) => {
  const { country } = req.body;

  if (!country || country.length < 4) {
    return res.status(400).json({ "message": "invalid country" });
  };

  next();
};

module.exports = validateCountry;
