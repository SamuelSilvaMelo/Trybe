const arithmeticExpression = require('./arithmeticExpression');

const geneateRandomNumber = () => Math.floor(Math.random() * 100 + 1);
const numbers = [
  geneateRandomNumber(),
  geneateRandomNumber(),
  geneateRandomNumber()
];

arithmeticExpression(...numbers)
  .then((result) => console.log(result))
  .catch((err) => console.log(err));
