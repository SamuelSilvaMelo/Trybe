const { questionInt } = require('readline-sync');

function factorial() {
  const input = questionInt('Escolha um número positivo para descobrir qual seu fatorial: ');
  let number = input;
  let response = 1;

  if (number < 0 ) {
    response = 'Não existe fatorial de número negativo. Saindo...';
  }

  while (number > 0) {
    response *= number;
    number -= 1;
  };

  console.log(`O fatorial de ${input} e: ${response}.`);
};

module.exports = { factorial };