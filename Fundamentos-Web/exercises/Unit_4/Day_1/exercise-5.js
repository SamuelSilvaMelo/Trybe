// 5. Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

let angulo1 = 100
let angulo2 = 20
let angulo3 = 60
let somaDosAngulos = angulo1 + angulo2 + angulo3

if (angulo1 < 0 || angulo2 < 0 || angulo3 < 0){
  console.log('Erro! O ângulo do triângulo não pode ser negativo');
} else if (somaDosAngulos === 180) {
  console.log('True - Isso é um triângulo')
} else {
  console.log('False - Isso não é um triângulo')
}
