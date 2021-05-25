// 9. Escreva um programa que defina três números em variáveis no seu começo e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
// Bonus: use somente um if .

let numerosAleatorios2 = [];

numerosAleatorios2.push(Math.floor(Math.random() * 100));
numerosAleatorios2.push(Math.floor(Math.random() * 100));
numerosAleatorios2.push(Math.floor(Math.random() * 100));

console.log(numerosAleatorios2);

if (numerosAleatorios2[0] % 2 === 1 === true || numerosAleatorios2[1] % 2 === 1 === true || numerosAleatorios2[2] % 2 === 1 === true){
  console.log('true');
} else {
  console.log('false');
}
