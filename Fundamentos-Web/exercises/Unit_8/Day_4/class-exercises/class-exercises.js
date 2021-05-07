const numbers = [50, 85, -30, 3, 15];

// Encontrar o valor maior do array utilizando o for

let result;

for (let index = 0; index < numbers.length; index += 1) {
  if(result === undefined) {
    result = numbers[index];
  }
  if (numbers[index] > result) {
    result = numbers[index];
  }
}

console.log(result);

// Encontrar o maior valor do array utilizando o reduce

const findBigger = (find, bigger) => ((bigger > find ? bigger : find));

console.log(numbers.reduce(findBigger));

console.log(numbers.reduce(findBigger, 100));

// Somar todos os números pares do array

const newNumbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

// reduce e filter

const filterNumbers = (array) => {
  return array.filter((number) => number % 2 === 0).reduce((number, acc) => acc + number)
}

console.log(filterNumbers(newNumbers))

// usando apenas o reduce

const filterNumbersWithReduce = (array) => {
  return array.reduce((currentValue, acc) => (acc % 2 === 0) ? acc + currentValue : currentValue)
}

console.log(filterNumbersWithReduce(newNumbers))

// Faça um relatório melhor matéria do estudante

const estudantes = [
  {
    nome: 'Jorge',
    sobrenome: 'Silva',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 67 },
      { name: 'Português', nota: 79 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 65 },
    ],
  },
  {
    nome: 'Mario',
    sobrenome: 'Ferreira',
    idade: 15,
    turno: 'Tarde',
    materias: [
      { name: 'Matemática', nota: '59' },
      { name: 'Português', nota: '80' },
      { name: 'Química', nota: '78' },
      { name: 'Biologia', nota: '92' },
    ],
  },
  {
    nome: 'Jorge',
    sobrenome: 'Santos',
    idade: 15,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '76' },
      { name: 'Português', nota: '90' },
      { name: 'Química', nota: '70' },
      { name: 'Biologia', nota: '80' },
    ],
  },
  {
    nome: 'Maria',
    sobrenome: 'Silveira',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '91' },
      { name: 'Português', nota: '85' },
      { name: 'Química', nota: '92' },
      { name: 'Biologia', nota: '90' },
    ],
  },
  {
    nome: 'Natalia',
    sobrenome: 'Castro',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '70' },
      { name: 'Português', nota: '70' },
      { name: 'Química', nota: '60' },
      { name: 'Biologia', nota: '50' },
    ],
  },
  {
    nome: 'Wilson',
    sobrenome: 'Martins',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '80' },
      { name: 'Português', nota: '82' },
      { name: 'Química', nota: '79' },
      { name: 'Biologia', nota: '75' },
    ],
  },
];

// Resulado Esperado

[
  { name: 'Jorge', materia: 'Português' },
  { name: 'Mario', materia: 'Biologia' },
  { name: 'Jorge', materia: 'Português' },
  { name: 'Maria', materia: 'Química' },
  { name: 'Natalia', materia: 'Português' },
  { name: 'Wilson', materia: 'Português' },
]

// Solução:

estudantes.forEach((teste) => {
  let array = {name: teste.nome, materias: teste.materias.reduce((acc, currentValue) => (acc.nota > currentValue.nota) ? acc : currentValue)};

  let finishArray = {name: array.name, materia: array.materias.name};

  console.log(finishArray);
})

// Fiz do jeito mais difícil, o mais fácil seria:

const getBestClass = (acc, materia) => {
  if (acc.nota > materia.nota) return acc;
  return materia;
};

const reportBetter = (students) => students.map((student) => ({
      name: student.nome,
      materia: student.materias.reduce(getBestClass).name,
    }));

console.log(reportBetter(estudantes));
