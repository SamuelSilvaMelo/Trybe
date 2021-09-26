const { keyInSelect } = require('readline-sync');
const { calcImc } = require('./imc');
const { calculateSpeed } = require('./velocidade');
const { playGame } = require('./sorteio');
const { factorial } = require('./fatorial');

const options = [
  'Calcule seu IMC',
  'Descubra sua valocidade média',
  'Tente acertar o número',
  'Escolha um número para saber qual o seu fatorial'
];

const selectedOption = keyInSelect(options, 'Escolha uma opção');

switch (selectedOption) {
  case 0:
    return calcImc();
  case 1:
    return calculateSpeed();
  case 2:
    return playGame();
  case 3:
    return factorial();
  default:
    console.log('Bye!');
};
