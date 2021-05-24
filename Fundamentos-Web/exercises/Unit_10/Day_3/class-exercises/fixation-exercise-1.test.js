// 1. Faça o mock da funcão subtrair e teste sua chamada.

const { somar, subtrair, multiplicar, dividir } = require('./fixation-exercises');


test('Test function subtrair', () => {
  let subtrairMock = subtrair;
  subtrairMock = jest.fn();

  subtrairMock();
  expect(subtrairMock).toHaveBeenCalled();
});