const validateNewProductParams = (req, res, next) => {
  const { name, brand } = req.body;

  if (!name) {
    return res.status(403).json({
      message: 'Ocorreu um erro. O parâmetro "name" é obrigatório'
    })
  }

  if (!brand) {
    return res.status(403).json({
      message: 'Ocorreu um erro. O parâmetro "brand" é obrigatório'
    })
  }

  next();
};

module.exports = { validateNewProductParams };