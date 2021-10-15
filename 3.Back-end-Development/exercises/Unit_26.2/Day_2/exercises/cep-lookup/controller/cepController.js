const dataCep = require('../service/cepService');

const findAllCeps = async (_req, res) => {
  const allCeps = await dataCep.findAllCeps();

  res.status(200).json(allCeps);
}

const findCep = async (req, res, next) => {
  const { cep } = req.params;
  
  const { error, searchedCep } = await dataCep.findCep(cep);

  if (error) {
    const {
      error,
      logradouro,
      bairro,
      localidade,
      uf } = await dataCep.searchNewCepData(cep);
    
    if (error) return next({ error })

    const newCep = await dataCep.addNewCep(cep, logradouro, bairro, localidade, uf);

    res.status(201).json(newCep);
  }

  res.status(200).json(searchedCep);
};

const addNewCep = async (req, res, next) => {
  const { cep, logradouro, bairro, localidade, uf } = req.body;

  const { searchedCep } = await dataCep.findCep(cep);

  if (searchedCep) {
    return (
      next({
        error: {
          code: 'alreadyExists',
          message: 'CEP já existente'
        },
      })
    );
  };

  const newCep = await dataCep.addNewCep(cep, logradouro, bairro, localidade, uf);

  res.status(201).json(newCep);
};

module.exports = { findAllCeps, findCep, addNewCep };
