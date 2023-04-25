const sum = require('../src/sum');

describe('Teste da função sum', () => {
  test('deve somar corretamente dois números positivos', () => {
    expect(sum(2, 3)).toBe(5);
  });

  test('deve somar corretamente dois números negativos', () => {
    expect(sum(-2, -3)).toBe(-5);
  });

  test('deve somar corretamente um número positivo e um número negativo', () => {
    expect(sum(2, -3)).toBe(-1);
  });

  test('deve somar corretamente um número negativo e um número positivo', () => {
    expect(sum(-2, 3)).toBe(1);
  });
});