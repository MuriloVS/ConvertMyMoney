const express = require('express');
const app = express();
const path = require('path');
const convert = require('./lib/convert');
const apiBCB = require('./lib/api.bcb');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', async (req, res) => {
  const valor = await apiBCB.getCotacao();
  res.render('home', {
    valor,
  });
});

app.get('/cotacao', (req, res) => {
  const { cotacao, quantidade } = req.query;

  if (!isNaN(cotacao) && !isNaN(quantidade)) {
    const resultado = convert.convertedValue(cotacao, quantidade);

    if (resultado) {
      res.render('cotacao', {
        cotacao: convert.toMoney(cotacao),
        quantidade: convert.toMoney(quantidade),
        resultado: convert.toMoney(resultado),
      });
    }
  }
});

app.listen(3000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Servidor iniciado.');
  }
});
