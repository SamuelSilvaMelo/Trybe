const { questionInt } = require('readline-sync');

function calculateSpeed() {
  const distance = questionInt('Qual a distância percorrida (em metros)? ');
  const time = questionInt('Quanto tempo você gastou (em segundos)? ');
  const speed = (distance/time).toFixed(2);

  console.log(`A sua velocidade média foi de ${speed} m/s`);
};

module.exports = { calculateSpeed };
