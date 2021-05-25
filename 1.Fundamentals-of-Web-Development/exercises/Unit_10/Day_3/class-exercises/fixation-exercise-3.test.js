// 3. Faça o mock da função somar e implemente uma função que recebe dois valores e retorna sua soma. Teste a chamada, o retorno e os parâmetros passados.

const { somar, subtrair, multiplicar, dividir } = require('./fixation-exercises');

test('Test function somar', () => {
  let somarMock = somar;
  somarMock = jest.fn().mockImplementation((a, b) => a + b );
  somarMock(5, 10);

  expect(somarMock).toHaveBeenCalled();
  expect(somarMock).toHaveBeenCalledWith(5, 10);
  expect(somarMock(5, 15)).toBe(20);
  expect(somarMock).toHaveBeenCalledTimes(2);
});