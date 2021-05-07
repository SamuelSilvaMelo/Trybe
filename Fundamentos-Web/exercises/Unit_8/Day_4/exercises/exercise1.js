// 1. Dada uma matriz de matrizes, transforme em uma única matriz.


const assert = require('assert');

const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
];

function flatten() {
  // escreva seu código aqui
  return arrays.reduce((accumulator, currentValue) => accumulator.concat(currentValue))

}

console.log(flatten())

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);

// Não concordo em ter que utiliar uma função que não foi ensinada ou mesmo mencionada.

let finish = [];

for (let index = 0; index < arrays.length; index += 1) {
  for (let index2 = 0; index2 < arrays[index].length; index2 += 1) {
    finish.push(arrays[index][index2])
  }
}

console.log(finish)
