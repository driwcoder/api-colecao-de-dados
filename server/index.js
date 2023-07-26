const express = require("express");
const app = express();
const service = require("./services/service");
const colecao = require('./data/colecao')

app.get("/ufs", (req, res) => {
  let uf = req.query.uf;
  if (typeof uf == "undefined") {
    let colecaoCompleta = colecao.colecaoUf
    let jsonMsg = { ufs: colecaoCompleta};
    res.json(jsonMsg);
  } else {
    
    ufSelecionado = service.retornaUF(uf);
    let jsonMsg = { ufs: ufSelecionado };
    res.json(jsonMsg);
  }
});

const port = 8000;
app.listen(port, () => {
  console.log("Servidor aberto!");
});

let pesquisa;

console.log(pesquisa);
