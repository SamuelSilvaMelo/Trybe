// 1. Crie uma função que receba um número e retorne seu fatorial.
// Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
// Bônus (opcional): tente fazer o mesmo exercício de forma recursiva . Spoiler: É possível resolver com uma linha usando ternary operator .

const factorial = number => {
  let result = number

  for (let index = number - 1; index >= 1; index -= 1) {
    result *= index
  }

  return result
}

console.log(factorial(10));

//2. Crie uma função que receba uma frase e retorne qual a maior palavra.
//longestWord("Antônio foi no banheiro e não sabemos o que aconteceu") // retorna 'aconteceu'

const longestWord = string => {
  let stringArray = string.split(' ');
  let biggerWordSize = 0;
  let biggerWord;

    for (let word of stringArray) {
      if (word.length > biggerWordSize) {
        biggerWordSize = word.length;
        biggerWord = word;
      }
    }

  return biggerWord;
}

console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"));
