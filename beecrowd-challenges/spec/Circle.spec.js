const calculateArea = require('../src/Circle');

describe('Testing the calcularArea function', () => {
  test('should calculate the area correctly for a radius of 1', () => {
    expect(calculateArea(1)).toBe('3.1416');
  });

  test('should calculate the area correctly for a radius of 2', () => {
    expect(calculateArea(2)).toBe('12.5664');
  });

  test('should calculate the area correctly for a radius of 0', () => {
    expect(calculateArea(0)).toBe('0.0000');
  });

  test('should calculate the area correctly for a negative radius', () => {
    expect(calculateArea(-2)).toBe('12.5664');
  });
});