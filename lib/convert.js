const convertedValue = (cotacao, quantidade) => cotacao * quantidade;

const toMoney = (valor) => parseFloat(valor).toFixed(2);

module.exports = {
  convertedValue,
  toMoney,
};
