const { expect } = require('chai');

const checkPositionXAxis = require('../checkPositionXAxis');

describe('Verifica a função checkPositionXAxis', () => {
  describe('Retorna "Positivo" quando:', () => {
    it('Recebe um número maior que zero.', () => {
      const result = checkPositionXAxis(5);

      expect(result).to.be.equal('Positivo');
    });
  });

  describe('Retorna "Negativo" quando:', () => {
    it('Recebe um número menor que zero.', () => {
      const result = checkPositionXAxis(-5);

      expect(result).to.be.equal('Negativo')
    });
  });

  describe('Retorna "Neutro" quando:', () => {
    it('Recebe um número igual a zero.', () => {
      const result = checkPositionXAxis(0);

      expect(result).to.be.equal('Neutro');
    });
  });

  describe('Retorna um erro quando:', () => {
    it('Não recebe um número como parâmetro', () => {
      const result = checkPositionXAxis('string');

      expect(result).to.be.equal('O valor deve ser um número');
    });
  });
});
