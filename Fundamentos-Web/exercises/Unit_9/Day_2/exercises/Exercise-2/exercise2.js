// FUNÇÃO PARA CRIAR UM ARRAY DE 10 NÚMEROS ALEATÓRIOS ELEVADOS À DOIS;

function createArray () {
  let array = [];

  for (let index = 0; index < 10; index += 1) {
    array.push(Math.pow((Math.floor(Math.random() * 50 + 1)), 2))
  };

  return array;
};

// FUNÇÃO PARA SOMAR NÚMEROS DE UM ARRAY

const sumNumbers = (number) => {
  return number.reduce(((acc, curr) => acc += curr), 0)
};

// FUNÇÃO PARA CHECAR SOMA DO ARRAY;

const checkSum = () => {
  return new Promise((resolve, reject) => {
    const sum = sumNumbers(createArray());

    if (sum < 8000) {
      resolve();
    } else {
      reject();
    }
  })
}

// FUNÇÃO PARA EXECUTAR FUNÇÃO CHECKSUM

const execute = () => {
  sum()
    .then(() => console.log('Promise resolvida'))
    .catch(() => console.log('Promise rejeitada'));
}

execute();









