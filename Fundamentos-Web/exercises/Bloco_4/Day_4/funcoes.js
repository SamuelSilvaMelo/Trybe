// 1. Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas variáveis, a e b , definidas no começo com os valores que serão operados. Faça programas para:
    // Adição
    // Subtração
    // Multiplicação
    // Divisão
    // Módulo

let variavel1 = 55
let variavel2 = 28


function adicao(param1, param2){
  return param1 + param2;
};

console.log(adicao(variavel1, variavel2));

function subtracao(param1, param2){
  return param1 - param2;
};

console.log(subtracao(variavel1, variavel2));

function multiplicacao(param1, param2) {
  return param1 * param2;
};

console.log(multiplicacao(variavel1, variavel2));

function divisao(param1, param2){
  return param1 / param2;
};

console.log(divisao(variavel1, variavel2));

function modulo(param1, param2) {
  return param1 % param2;
};

console.log(modulo(variavel1, variavel2));

// 2. Faça um programa que retorne o maior de dois números. Defina no começo do programa duas variáveis com os valores que serão comparados. 

let numero1 = 100
let numero2 = 35


function higherNumber(param1, param2) {
  if (param1 > param2) {
    return param1;
  } else {
    return param2;
  }
}

console.log(higherNumber(numero1, numero2));

// 3. Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.

let numero4 = 3000
let numero5 = 1250
let numero6 = 1450

function compareHigherNumber(param1, param2, param3) {
  if (numero4 > numero5 && numero4 > numero6) {
    return param1
  } else if (numero5 > numero4 && numero5 > numero6){
    return param2
  } else {
    return param3
  }
}

console.log(compareHigherNumber(numero4, numero5, numero6));

// 4. Faça um programa que, dado um valor definido numa variável, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

let variavel3 = 2

function positiveOrNegative(param1) {
  if (param1 > 0) {
    return 'positive';
  } else if (param1 < 0) {
    return 'negative';
  } else {
    return 'zero';
  }
}

console.log(positiveOrNegative(variavel3));

// 5. Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

let angulo1 = 100
let angulo2 = 20
let angulo3 = 60

function itsATriangle(param1, param2, param3) {

  let somaDosAngulos = param1 + param2 + param3

  if (param1 < 0 || param2 < 0 || param3 < 0){
    return 'Erro! O ângulo do triângulo não pode ser negativo';
  } else if (somaDosAngulos === 180) {
    return 'True - Isso é um triângulo';
  } else {
    return 'False - Isso não é um triângulo';
  }
}

console.log(itsATriangle(angulo1, angulo2, angulo3));


// 6. Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
// Exemplo: bishop -> diagonals

let chessPiece = 'king'

function pieceFunction(param1) {
  param1 = param1.toLowerCase();

  switch (param1) {
    case 'king':
      console.log('King -> Can move to one of the eight squares around it.');
      break;
    case 'queen':
      console.log('Queen -> Can move diagonally, horizontally, or vertically any number of squares. She are unable to jump over pieces.');
      break;
    case 'rooks':
      console.log('Rooks -> Can move horizontally or vertically any number of squares. They are unable to jump over pieces.');
      break
    case 'bishops':
      console.log('Bishops -> Can move diagonally any number of squares. They are unable to jump over pieces.');
      break;
    case 'knights':
      console.log('Knights -> Can move in an ‘L’ shape’: two squares in a horizontal or vertical direction, then move one square horizontally or vertically. They are the only piece able to jump over other pieces.');
      break
    case 'pawns':
      console.log('Pawns -> Can move vertically forward one square, with the option to move two squares if they have not yet moved.  Pawns capture one square diagonally in a forward direction. Pawns are unable to move backward on captures or moves. Upon reaching the other side of the board a pawn promotes into any other piece, except for a king.');
      break;
    default:
      console.log('Error! Invalid word')
  }
}

console.log(pieceFunction(chessPiece));

// 7. Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F
// O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

let nota = 95

function note(param1) {
  if (param1 > 100){
    return 'Erro';
  } else if (param1 >= 90){
    return 'A';
  } else if (param1 >= 80){
    return 'B';
  } else if (param1 >= 70){
    return 'C';
  } else if (param1 >= 60){
    return 'D';
  } else if (param1 >= 50){
    return 'E';
  } else if (param1 < 50 && nota >= 0){
    return 'F';
  } else {
    return 'Error';
  }
}

console.log(note(nota));

// 8. Escreva um programa que defina três números em variáveis no seu começo e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .
// Bonus: use somente um if .

function checkEvenNumber() {
  
  let randomNumbers = []
  
  randomNumbers.push(Math.floor(Math.random() * 100));
  randomNumbers.push(Math.floor(Math.random() * 100));
  randomNumbers.push(Math.floor(Math.random() * 100));

  console.log(randomNumbers);

  if (randomNumbers[0] % 2 === 0 === true || randomNumbers[1] % 2 === 0 === true || randomNumbers[2] % 2 === 0 === true) {
    return 'true';
  } else {
    return 'false';
  }
}

console.log(checkEvenNumber());

// 9. Escreva um programa que defina três números em variáveis no seu começo e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
// Bonus: use somente um if .

function checkOddNumber() {
  let numerosAleatorios2 = [];

  numerosAleatorios2.push(Math.floor(Math.random() * 100));
  numerosAleatorios2.push(Math.floor(Math.random() * 100));
  numerosAleatorios2.push(Math.floor(Math.random() * 100));

  console.log(numerosAleatorios2);

  if (numerosAleatorios2[0] % 2 === 1 === true || numerosAleatorios2[1] % 2 === 1 === true || numerosAleatorios2[2] % 2 === 1 === true) {
    return 'true';
  } else {
    return 'false';
  }
}

console.log(checkOddNumber());

// 10. Escreva um programa que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.

// Atente que, sobre o custo do produto, incide um imposto de 20%.

// Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.

// O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
//     valorCustoTotal = valorCusto + impostoSobreOCusto
//     lucro = valorVenda - valorCustoTotal (lucro de um produto)

let buyProduct = 100
let sellProduct = 500

function profit(param1, param2) {
  let totalCost = ((param1 * 0.2) + param1)
  let sellProfit = param2 - totalCost

    if (param1 < 0){
        return 'Error - buyProduct < 0';
    } else if (param2 < 0){
        return 'Error - sellProduct < 0';
    } else if (sellProfit < 0){
        return 'Error - sellProfit < 0';
    } else {
        return 'O lucro total foi de R$:' + sellProfit * 1000 + ',00';
    }
}

console.log(profit(buyProduct, sellProduct));

// 11. Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.

// A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:

//   INSS
//     Salário bruto até R$ 1.556,94: alíquota de 8%
//     Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
//     Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
//     Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
//   IR
//     Até R$ 1.903,98: isento de imposto de renda
//     De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
//     De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
//     De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
//     Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.

// Exemplo : Uma pessoa possui o salário bruto de R$ 3.000,00. O cálculo será:

//     O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.
//     Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.
//     Para pegar o valor do IR, temos um salário (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, sendo a alíquota, então, de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, temos:

//       R$ 2.670,00: salário com INSS já deduzido;
//       7.5%: alíquota de imposto de renda;
//       R$ 142,80 parcela a se deduzir do imposto.

//     Fazendo a conta, temos: (7,5% de R$ 2.670,00) - R$ 142,80 = R$ 57,45
//     O último cálculo para conseguir o salário líquido é R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.

// Resultado: R$ 2.612,55.
// Dica: que tal identificar as alíquotas com variáveis de nomes explicativos?

let grossSalary = 6000;

function inssDiscounted(param1) {
  
  let inssDiscounted;

  if (param1 <= 1556.94) {
    inssDiscounted = param1 - (param1 * 0.08);
 } else if (param1 <= 2594.92) {
    inssDiscounted = param1 - (param1 * 0.09);
 } else if (param1 <= 5189.82) {
    inssDiscounted = param1 - (param1 * 0.11);
 } else if (param1 >= 5189.82) {
    inssDiscounted = param1 - 570.88;
 }

 return inssDiscounted;

}

console.log(inssDiscounted(grossSalary))


function netSalary(param1) {
  
  let netSalary;

  if (param1 <= 1903.98){
    netSalary = param1;
} else if (param1 <= 2826.65) {
    netSalary = param1 - ((param1 * 0.075) - 142.80);
} else if (param1 <= 3751.05) {
    netSalary = param1 - ((param1 * 0.15) - 354.80);
} else if (param1 <= 4664.68) {
    netSalary = param1 - ((param1 * 0.225) - 636.13);
} else if (param1 >= 4664.68) {
    netSalary = param1 - ((param1 * 0.275) - 869.36);
}

  return netSalary;

}

console.log(netSalary(inssDiscounted(grossSalary)));



