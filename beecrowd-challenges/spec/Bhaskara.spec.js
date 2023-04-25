const calcularRaizes = require('../src/Bhaskara');

describe('Testing the calcularRaizes function', () => {
  test('Retorna objeto com as raízes calculadas', () => {
    expect(calcularRaizes('1 5 4')).toEqual({ R1: '-1.00000', R2: '-4.00000' });
  });
  
  test('Retorna objeto com raízes iguais', () => {
    expect(calcularRaizes('1 -6 9')).toEqual({ R1: '3.00000', R2: '3.00000' });
  });
  
  test('Retorna mensagem de erro quando não é possível calcular as raízes', () => {
    expect(calcularRaizes('0 2 3')).toBe('Impossível calcular');
  });
  
});