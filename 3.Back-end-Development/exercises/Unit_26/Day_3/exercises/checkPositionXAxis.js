function checkPositionXAxis(number) {
  if (number === 0) return 'Neutro'
  if (number > 0) return 'Positivo'
  if (number < 0) return 'Negativo'
};

module.exports = checkPositionXAxis;
