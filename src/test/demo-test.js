
/**
 *
 * Arquivo: demo-test.js.js
 * Author: Glaucia Lemos
 * Description: arquivo responsável por executar as 4 operações: + - * /
 * Data: 07/03/2018
 *
 */

const assert = require('chai').assert;
const demo = require('../demo_2/demo');

describe('Diferentes Tipos de Testes com Mocha & Chai:', () => {
  
  it('Teste: Deve retornar a frase: "Mocha & Chai são legais!"', () => {
    assert.equal(demo(), 'Mocha & Chai são legais!');
  });

});