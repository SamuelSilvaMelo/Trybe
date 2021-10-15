const error = (err, _req, res, _next) => {
  if (err.isJoi) {
    return res.status(400)
      .json({ error: { code: 'invalidData', message: err.details[0].message } });
  }

  if (err.error.code === 'alreadyExists') {
    return res.status(409).json(err.error);
  }

  if (err.error.code === 'invalidData') {
    return res.status(400).json(err.error);
  }

  if (err.error.code === 'notFound') {
    return res.status(404).json(err.error);
  }

  res.status(500).json({ message: 'Erro interno, tente novamente, mais tarde.'})
};

module.exports = error;
