// 1. Crie uma função de primeira classe que retorna um objeto { nomeCompleto, email } de uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respctivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com .

const employeeData = (fullname) =>  console.log({nomeCompleto: fullname, email: `${(fullname.replace(' ', '_')).toLowerCase()}@trybe.com`,});

employeeData('Samuel Silva Melo');

const newEmployees = (block) => {
  const employees = {
    id1: block('Pedro Guerra'),
    id2: block('Luiza Drumond'),
    id3: block('Carla Paiva'),
  }
  return employees;
};

newEmployees(employeeData);

// Referência: .replace() => https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/replace
// Referência: .toLowerCase() => https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase

// 2. Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

const randomNumber = () => Math.floor((Math.random() * 5) + 1);

const drawResult = (number, callback) => {
  let result = 'Tente Novamente';

  if (callback() === number){
    result = 'Parabéns você ganhou';
  }

  return result;
}

console.log(drawResult(2, randomNumber));
