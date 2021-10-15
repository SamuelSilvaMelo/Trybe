const dataCep = require('../models/cepModel');

const findAllCeps = async () => dataCep.findAllCeps();

const findCep = async (searchCep) => {
  const cepWithoutHyphen = searchCep.replace('-', '');
  const searchedCep = await dataCep.findCep(cepWithoutHyphen);

  if (searchedCep.length === 0) return ({
    error: {
      code: "notFound",
      message: "CEP não encontrado"
    }
  });

  return { searchedCep }
};

const addNewCep = async (cep, logradouro, bairro, localidade, uf) => {
  const cepWithoutHyphen = cep.replace('-', '');
  const newCep = await dataCep.addNewCep(cepWithoutHyphen, logradouro, bairro, localidade, uf);

  return ({
    cep,
    logradouro,
    bairro,
    localidade,
    uf,
  });
};

const searchNewCepData = async (newCep) => {
  const newCepData = await dataCep.findNewCep(newCep);
  
  if (newCepData.erro) {
    return ({
      error: {
        code: 'notFound',
        message: 'CEP não encontrado'
      },
    });
  };

  return newCepData;
}

module.exports = {
  findAllCeps,
  findCep,
  addNewCep,
  searchNewCepData
};
