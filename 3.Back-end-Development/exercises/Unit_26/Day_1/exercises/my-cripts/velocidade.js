const { questionInt } = require('readline-sync');

function calculateSpeed(distance, time) {
  const speed = (distance/time).toFixed(2);
  console.log(`A sua velocidade média foi de ${speed} m/s`);
};

const distance = questionInt('Qual a distância percorrida (em metros)? ');
const time = questionInt('Quanto tempo você gastou (em segundos)? ');

calculateSpeed(distance, time);
