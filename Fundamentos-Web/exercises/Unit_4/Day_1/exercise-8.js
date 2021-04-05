// 8. Escreva um programa que defina três números em variáveis no seu começo e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .
// Bonus: use somente um if .

let numerosAleatorios = [];

numerosAleatorios.push(Math.floor(Math.random() * 100));
numerosAleatorios.push(Math.floor(Math.random() * 100));
numerosAleatorios.push(Math.floor(Math.random() * 100));

console.log(numerosAleatorios);

if (numerosAleatorios[0] % 2 === 0 === true || numerosAleatorios[1] % 2 === 0 === true || numerosAleatorios[2] % 2 === 0 === true){
  console.log('true')
} else {
  console.log('false')
}