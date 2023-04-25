const verificarValores = require('../src/selecao');

describe('Testing the verificarValores function', () => {
  test('Valores aceitos', () => {
    expect(verificarValores('2 3 2 6')).toBe('Valores aceitos');
    expect(verificarValores('0 4 5 6')).toBe('Valores nao aceitos');
  });
  
  test('Valores nao aceitos', () => {
    expect(verificarValores('7 7 7 7')).toBe('Valores nao aceitos');
    expect(verificarValores('0 5 3 2')).toBe('Valores nao aceitos');
  });

});