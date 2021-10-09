function checkPositionXAxis(number) {
  if (typeof number !== 'number') return 'O valor deve ser um número'
  if (number === 0) return 'Neutro'
  if (number > 0) return 'Positivo'
  if (number < 0) return 'Negativo'
};

module.exports = checkPositionXAxis;
