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