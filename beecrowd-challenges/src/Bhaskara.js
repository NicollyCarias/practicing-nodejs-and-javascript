// Leia 3 valores de ponto flutuante e efetue o cálculo das raízes da equação de Bhaskara. Se não for possível calcular as raízes, mostre a mensagem correspondente “Impossivel calcular”, caso haja uma divisão por 0 ou raiz de numero negativo.

// Entrada
// Leia três valores de ponto flutuante (double) A, B e C.

// Saída
// Se não houver possibilidade de calcular as raízes, apresente a mensagem "Impossivel calcular". Caso contrário, imprima o resultado das raízes com 5 dígitos após o ponto, com uma mensagem correspondente conforme exemplo abaixo. Imprima sempre o final de linha após cada mensagem.

function calcularRaizes(valores) {
  // Converte a string de valores em um array de números
  var [A, B, C] = valores.split(' ').map(parseFloat);

  // Calcula o delta
  var delta = Math.pow(B, 2) - 4 * A * C;

  // Verifica se é possível calcular as raízes
  if (A == 0 || delta < 0) {
    return "Impossível calcular";
  } else {
    // Calcula as raízes e as armazena em um objeto
    var R1 = (-B + Math.sqrt(delta)) / (2 * A);
    var R2 = (-B - Math.sqrt(delta)) / (2 * A);
    var raizes = {
      R1: R1.toFixed(5),
      R2: R2.toFixed(5)
    };
    return raizes;
  }
}

module.exports = calcularRaizes;
