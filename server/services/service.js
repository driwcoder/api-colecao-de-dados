const colecao = require('../data/colecao')

function retornaUF(uf) {
  return  colecao.colecaoUf.filter((ufFiltrada) => ufFiltrada.nome.toLowerCase().includes(uf.toLowerCase())) 
  // encontra resultados que contém o valor da pesquisa
}

function filtraID(id) {
  return colecao.colecaoUf.find(idAchada => idAchada.id === id)
}

exports.retornaUF = retornaUF
exports.filtraID = filtraID