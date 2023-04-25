const verificarIntervalo = require('../src/intervalo');

describe('Testando verificarIntervalo', () => {
  test('Deve retornar o intervalo [0,25] quando o valor está entre 0 e 25', () => {
    expect(verificarIntervalo(10)).toBe('Intervalo [0,25]');
  });

  test('Deve retornar o intervalo (25,50] quando o valor está entre 25 e 50', () => {
    expect(verificarIntervalo(30)).toBe('Intervalo (25,50]');
  });

  test('Deve retornar o intervalo (50,75] quando o valor está entre 50 e 75', () => {
    expect(verificarIntervalo(60)).toBe('Intervalo (50,75]');
  });

  test('Deve retornar o intervalo (75,100] quando o valor está entre 75 e 100', () => {
    expect(verificarIntervalo(80)).toBe('Intervalo (75,100]');
  });

  test('Deve retornar "Fora de intervalo" quando o valor está abaixo de 0', () => {
    expect(verificarIntervalo(-5)).toBe('Fora de intervalo');
  });

  test('Deve retornar "Fora de intervalo" quando o valor está acima de 100', () => {
    expect(verificarIntervalo(200)).toBe('Fora de intervalo');
  });
});