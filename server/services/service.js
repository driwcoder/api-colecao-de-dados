const colecao = require('../data/colecao')

function retornaUF(uf) {
  return  colecao.colecaoUf.find((ufFiltrada) => ufFiltrada.nome === uf)
}

exports.retornaUF = retornaUF