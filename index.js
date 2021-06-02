const express = require('express');
const app = express();
const path = require('path');
const convert = require('./lib/convert');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/cotacao', (req, res) => {
  const { cotacao, quantidade } = req.query;
  const cotacaoFormatada = cotacao.replace(',', '.');
  const quantidadeFormatada = quantidade.replace(',', '.');
  const resultado = convert.convert(cotacaoFormatada, quantidadeFormatada);

  if (resultado) {
    res.render('cotacao', {
      cotacao: convert.toMoney(cotacaoFormatada),
      quantidade: convert.toMoney(quantidadeFormatada),
      resultado: convert.toMoney(resultado),
    });
  }
});

// aplicação ouvindo na porta 3000
app.listen(3000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Servidor iniciado.');
  }
});
