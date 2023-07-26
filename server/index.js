const express = require("express");
const app = express();
const service = require("./services/service");
const colecao = require("./data/colecao");
const jujutsu = require("./data/dados.json")

app.get("/ufs", (req, res) => {
  let uf = req.query.uf;
  if (typeof uf == "undefined") {
    let colecaoCompleta = colecao.colecaoUf;
    let jsonMsg = { ufs: colecaoCompleta };
    res.json(jsonMsg);
  } else {
    ufSelecionado = service.retornaUF(uf);
    let jsonMsg = { ufs: ufSelecionado };
    res.json(jsonMsg);
  }
});

app.get("/ufs/:id", (req, res) => {
  let id = parseInt(req.params.id);

  let idPesquisada;
  if (!isNaN(id)) {
    idPesquisada = service.filtraID(id);
  }
  if (idPesquisada) {
    res.json(idPesquisada);
  } else {
    if (isNaN(id)) {
      let mensagemErro = "Requisição inválida! Apenas numeros são aceitos";
      res.status(404).json({ erro: mensagemErro });
    } else if (id > 27) {
      let mensagemErro = "UF não encontrada";
      res.status(404).json({ erro: mensagemErro })
    }
  }
});


const port = 8000;
app.listen(port, () => {
  console.log("Servidor aberto!");
});
