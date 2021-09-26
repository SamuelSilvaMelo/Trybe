const { questionInt } = require('readline-sync');

function calcFibonacciNumbers(limit) {
  let fibonacciNumbers = [];

  for(let index = 0; index < limit; index += 1) {
    if (index <= 1) {
      fibonacciNumbers.push(1);
    } else {
      fibonacciNumbers.push(
        fibonacciNumbers[index - 2] + fibonacciNumbers[index - 1]
      );
    };
  };

  console.log(fibonacciNumbers);
}

function showFibonacciNumbers() {
  const limit = questionInt('\nEscolha quantos números de Fibonacci você quer conhecer: ');

  if (limit <= 0) {
    console.log('\nEscolha um número maior que zero!');
    showFibonacciNumbers();
  } else {
    console.log('\nO resultado é:')
    calcFibonacciNumbers(limit);
  };
};

module.exports = { showFibonacciNumbers };
