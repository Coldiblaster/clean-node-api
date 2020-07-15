const config = require('./jest.config')
config.testMatch = ['**/*.test.ts']
module.exports = config

/**
 *  Estamos pegando tudo que tem no jest.config e adicionando uma configuração nova.
 *  Configuramos o Jest para rodar qualquer arquivo com o test.ts na configuração acima
 *  Isso foi feito para configurarmos o script de inicialização para rodar somente os teste de integração
 */
