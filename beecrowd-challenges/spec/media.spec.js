const mediaAluno = require('../src/media');

describe('Teste da função mediaAluno', () => {
  test('calcula média corretamente', () => {
    expect(mediaAluno(5.0, 6.0, 7.0)).toBe('6.3');
  });
  
  test('calcula média com valores iguais a zero', () => {
    expect(mediaAluno(0.0, 0.0, 0.0)).toBe('0.0');
  });
  
  test('calcula média com valores máximos', () => {
    expect(mediaAluno(10.0, 10.0, 10.0)).toBe('10.0');
  });
  
});