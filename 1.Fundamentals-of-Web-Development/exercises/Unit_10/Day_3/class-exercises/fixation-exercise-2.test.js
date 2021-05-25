// 2. Faça o mock da função multiplicar e implemente como retorno padrão o valor '10'. Teste a chamada e o retorno.

const { somar, subtrair, multiplicar, dividir } = require('./fixation-exercises');


test('Test function multiplicar', () => {
  let multiplicarMock = multiplicar;
  multiplicarMock = jest.fn().mockReturnValue(10);

  multiplicarMock();
  expect(multiplicarMock).toHaveBeenCalled();
  expect(multiplicarMock()).toBe(10);
  expect(multiplicarMock).toHaveBeenCalledTimes(2);
});
