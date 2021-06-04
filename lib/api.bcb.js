const axios = require('axios');
const diaCotacao = require('./dia-cotacao');

const getCotacaoAPI = (data) =>
  axios.get(
    `https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao=%27${data}%27&$top=100&$skip=0&$format=json&$select=cotacaoCompra,cotacaoVenda,dataHoraCotacao`
  );

const extractCotacao = (res) => res.data.value[0].cotacaoVenda;

const getCotacao =
  ({ getCotacaoAPI, extractCotacao }) =>
  async () => {
    try {
      const res = await getCotacaoAPI(diaCotacao);
      const cotacao = extractCotacao(res);
      return cotacao;
    } catch (error) {
      return '';
    }
  };

module.exports = {
  getCotacaoAPI,
  extractCotacao,
  getCotacao: getCotacao({ getCotacaoAPI, extractCotacao }),
  pure: { getCotacao },
};
