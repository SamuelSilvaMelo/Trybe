// Parte II - Funções
// Agora vamos fazer um exercício que vai deixar claro como funções com responsabilidades bem definidas deixam o código mais bem escrito.
// 1. Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
//     Exemplo de palíndromo: arara .
//     verificaPalindrome('arara') ;
//     Retorno esperado: true
//     verificaPalindrome('desenvolvimento') ;
//     Retorno esperado: false

function checkPalindromo(param1){

  let valor = param1;
  let valorToPalindromo = '';

  for (let index = 0; index < param1.length; index += 1) {
    valorToPalindromo += param1[param1.length - (index + 1)];
  }

  if (valor === valorToPalindromo) {
    return 'true';
  } else {
    return 'false';
  }

}

let teste = 'arara'

console.log(checkPalindromo(teste));

// 2. Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
//        Array de teste: [2, 3, 6, 7, 10, 1]; .
//        Valor esperado no retorno da função: 4 .

function checkIndexHigherValue(param1) {

  let valor;
  valor = Math.max(...param1)

  for (let index = 0; index < param1.length; index += 1) {
    if (valor === param1[index]) {
      return index
    }
  }
}

let teste2 = [2, 3, 6, 7, 10, 1];

console.log(checkIndexHigherValue(teste2))

// 3. Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
//        Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
//        Valor esperado no retorno da função: 6 .

function checkIndexLowerValue(param1) {

  let valor;
  valor = Math.min(...param1);

  for (let index = 0; index < param1.length; index += 1) {
    if (valor === param1[index]) {
      return index;
    }
  }
}

let teste3 = [2, 4, 6, 7, 10, 0, -3];

console.log(checkIndexLowerValue(teste3));

// 4. Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
//        Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
//        Valor esperado no retorno da função: Fernanda .

function biggestName(param1) {
  let arrayValueSize = [];
  let higherArrayValueSize;

  for (let index = 0; index < param1.length; index += 1) {
    arrayValueSize.push(param1[index].length);
  }

  higherArrayValueSize = Math.max(...arrayValueSize);

  for (let index = 0; index < param1.length; index += 1) {
    if (higherArrayValueSize === param1[index].length) {
      return param1[index];
  }
}

}

let teste4 = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

console.log(biggestName(teste4));

// 5. Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
//        Array de teste: [2, 3, 2, 5, 8, 2, 3]; .
//        Valor esperado no retorno da função: 2 .





// 6. Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.
//        Valor de teste: N = 5 .
//        Valor esperado no retorno da função: 1+2+3+4+5 = 15 .

function sumToTheValue(param1) {

  let result = 0

  for (index = 1; index <= param1; index += 1) {
    result += index;
  }
  return result;
}

let teste6 = 10

console.log(sumToTheValue(teste6))

// 7. Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .
//        Valor de teste: 'trybe' e 'be'
//        Valor esperado no retorno da função: true
//        verificaFimPalavra('trybe', 'be') ;
//        Retorno esperado: true
//        verificaFimPalavra('joaofernando', 'fernan') ;
//        Retorno esperado: false

function checkEndWord(param1, param2) {
  for (let index = 1; index < param2.length; index += 1) {
    if (param1[param1.length - index] === param2[param2.length - index]) {
      return 'true';
    } else {
      return 'false';
    }
  }
}

let teste7 = 'joaofernando'
let teste8 = 'fernan'

console.log(checkEndWord(teste7, teste8));