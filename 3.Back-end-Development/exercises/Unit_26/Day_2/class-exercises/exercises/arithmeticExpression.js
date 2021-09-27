const arithmeticExpression = (a, b, c) => {
  return new Promise((resolve, reject) => {
    const numbers = [a, b, c];

    numbers.map((number) => {
      if (typeof number !== 'number') {
        reject('Erro: Informe apenas números.');
      }
    });

    const result = (a + b) * c;

    if (result < 50) return reject('Erro: Valor muito baixo.');

    resolve(`O resultado da sua expressão é: ${result}`);
  });
};

arithmeticExpression('50', 7, 10)
  .then(resolve => console.log(resolve))
  .catch(error => console.log(error))

arithmeticExpression(2, 2, 5)
  .then(resolve => console.log(resolve))
  .catch(error => console.log(error))

arithmeticExpression(50, 7, 10)
  .then(resolve => console.log(resolve))
  .catch(error => console.log(error))
