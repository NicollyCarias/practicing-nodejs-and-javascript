const somarValores = require('../src/somarValores');
const readline = require('readline');

describe('somarValores', () => {
  it('deve somar dois valores corretamente', done => {
    const spyCreateInterface = jest.spyOn(readline, 'createInterface').mockReturnValue({
      question: (query, callback) => {
        if (query === '') {
          callback('2');
        } else {
          callback('3');
        }
      },
      close: jest.fn()
    });

    const spyConsoleLog = jest.spyOn(console, 'log').mockImplementation();

    somarValores();

    setTimeout(() => {
      expect(spyCreateInterface).toHaveBeenCalledTimes(1);

      spyCreateInterface.mockRestore();
      spyConsoleLog.mockRestore();
      done();
    }, 100);
  });
});

