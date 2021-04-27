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


//3. Crie uma página que contenha:
// Um botão ao qual será associado um event listener ;
// Uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão;
// Um campo no HTML que vá atualizando a quantidade de clicks no botão conforme a variável clickCount é atualizada.


const counter = document.getElementById('clickCount');

document.getElementById('clickBtn').addEventListener('click', () => {
  let clickCount = parseInt(counter.innerText);
  clickCount += 1;
  counter.innerText = clickCount;
});

document.getElementById('resetBtn').addEventListener('click', () => {
  counter.innerText = 0;
});

// 4. Crie um código JavaScript com a seguinte especificação:
//    Não se esqueça de usar template literals
//
//    Função 1 : Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e 
//    substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string .
//    Exemplo:
//      String determinada: "Tryber x aqui!"
//      Parâmetro: "Bebeto"
//      Retorno: "Tryber Bebeto aqui!"

const array = ["Unix", "Bash", "HTML", "CSS", "JS"]

const Funcao1 = parametro => `Tryber ${parametro} aqui!`;

const Funcao2 = parametro2 => {
  let sortArray = array.sort();

  let result = `${parametro2} 

  Tudo bem?

  Minhas cinco principais habilidades são:
  
  ${sortArray}.`

  return result
}

console.log(Funcao2(Funcao1('Lucas')))
