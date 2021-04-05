// 6- Faça um programa que diz se um número definido numa variável é primo ou não.

// Um número primo é um número que só é divisível por 1 e por ele mesmo, ou seja, a divisão dele com quaisquer outros números dá resto diferente de zero.
// Dica: você vai precisar de fazer um loop que vá de 0 ao número definido; Além disso, vai precisar de fazer uma checagem a cada iteração e armazenar os resultados em algum lugar.

let numero = 751;

let resultado = '';

for (let index = 2; index < numero; index += 1) {

  if (numero % 2 === 0) {
    resultado = 'Não é um número primo';
  } else if (numero % index === 0) {
    resultado = 'Não é um número primo';
  } else {
    resultado = 'É um número primo';
  }
}

console.log(resultado);