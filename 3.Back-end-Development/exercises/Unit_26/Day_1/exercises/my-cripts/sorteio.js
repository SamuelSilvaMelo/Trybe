const { questionInt, keyInYN } = require('readline-sync');

function generateRandonNumber() {
  return Math.floor(Math.random() * 11)
}

function raffle() {
  const winnerNumber = generateRandonNumber();
  const chosenNumber = questionInt('Escolha um número de 0 a 10: ');

  if (generateRandonNumber() === chosenNumber) {
    console.log('Parabéns, número correto! \n');
    return;
  };

  console.log(`Opa, não foi dessa vez. O número era ${winnerNumber} \n`);
};

raffle();

let playAgain = true;

while(playAgain) {
  if (keyInYN('Jogar Novamente?')) {
    raffle();
  } else {
    playAgain = false;
  }
}

console.log('Bye! \n');
