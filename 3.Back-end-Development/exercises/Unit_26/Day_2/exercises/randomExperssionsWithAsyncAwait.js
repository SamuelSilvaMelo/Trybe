const arithmeticExpression = require('./arithmeticExpression');

const geneateRandomNumber = () => Math.floor(Math.random() * 100 + 1);
const numbers = [
  geneateRandomNumber(),
  geneateRandomNumber(),
  geneateRandomNumber()
];

const doMatch = async () => {
  try {
    const result = await arithmeticExpression(...numbers);
    console.log(result)
  } catch (err) {
    console.log(err)
  }
}

doMatch();
