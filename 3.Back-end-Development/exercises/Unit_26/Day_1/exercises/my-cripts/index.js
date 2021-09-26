const { keyInSelect } = require('readline-sync');
const { calcImc } = require('./imc');
const { calculateSpeed } = require('./velocidade');
const { playGame } = require('./sorteio');

const options = [
  'Calcule seu IMC',
  'Descubra sua valocidade média',
  'Tente acertar o número'
];

const selectedOption = keyInSelect(options, 'Escolha uma opção');

switch (selectedOption) {
  case 0:
    return calcImc();
  case 1:
    return calculateSpeed();
  case 2:
    return playGame();
  default:
    console.log('Bye!');
};
