// 9. Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .

let twentyFive = []

for (let i = 1; i <= 25; i += 1){
  twentyFive.push(i)
}

console.log(twentyFive)

let division = []

for (let i = 0; i < twentyFive.length; i += 1){
  division.push(twentyFive[i] / 2)
}

console.log(division)
