const connection = require('./connection');
const axios = require('axios').default;

const findNewCep = async (findCep) => 
  axios.get(`https://viacep.com.br/ws/${findCep}/json/`)
    .then(({ data: { erro, cep, logradouro, bairro, localidade, uf } }) => ({
      erro,
      cep,
      logradouro,
      bairro,
      localidade,
      uf,
    }))

const findAllCeps = async () => {
  const [allCeps] = await connection.execute('SELECT * FROM ceps');

  return allCeps;
}

const findCep = async (searchCep) => {
  const query = 'SELECT * FROM ceps WHERE cep=?;';

  const [cep] = await connection.execute(query, [searchCep]);
  
  return cep;
};

const addNewCep = async (cep, logradouro, bairro, localidade, uf) => {
  const query = 'INSERT INTO ceps (cep, logradouro, bairro, localidade, uf) VALUES (?, ?, ?, ?, ?);'

  const [insertedCep] = await connection.execute(query, [cep, logradouro, bairro, localidade, uf]);
  
  return insertedCep;
}

module.exports = {
  findNewCep,
  findAllCeps,
  findCep,
  addNewCep
};
