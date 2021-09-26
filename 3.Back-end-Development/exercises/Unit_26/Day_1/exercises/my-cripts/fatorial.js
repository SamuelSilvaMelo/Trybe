const { questionInt } = require('readline-sync');

function factorial() {
  let number = questionInt('Escolha um número positivo para descobrir qual seu fatorial: ');
  let response = 1;

  if (number < 0 ) {
    response = 'Não existe fatorial de número negativo. Saindo...';
  }

  while (number > 0) {
    response *= number;
    number -= 1;
  };

  console.log(response);
};

module.exports = { factorial };