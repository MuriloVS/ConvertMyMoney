const axios = require('axios');
const moment = require('moment');

const hoje = moment().format('MM-DD-YYYY');
let url = `https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao=%27${hoje}%27&$top=100&$skip=0&$format=json&$select=cotacaoCompra,cotacaoVenda,dataHoraCotacao`;
const getCotacao = () =>
  axios.get(url).then((res, err) => {
    if (res.data.value[0]) {
      console.log(res.data.value[0].cotacaoVenda);
    } else {
      const ontem = moment().subtract(1, 'days').format('MM-DD-YYYY');
      let url = `https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao=%27${ontem}%27&$top=100&$skip=0&$format=json&$select=cotacaoCompra,cotacaoVenda,dataHoraCotacao`;
      axios.get(url).then((res, err) => {
        if (res.data.value[0]) {
          console.log(res.data.value[0].cotacaoVenda);
        } else {
          const anteOntem = moment().subtract(2, 'days').format('MM-DD-YYYY');
          let url = `https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao=%27${anteOntem}%27&$top=100&$skip=0&$format=json&$select=cotacaoCompra,cotacaoVenda,dataHoraCotacao`;
          axios.get(url).then((res, err) => {
            if (res.data.value[0]) {
              console.log(res.data.value[0].cotacaoVenda);
            } else {
              console.log(err);
            }
          });
        }
      });
    }
  });
getCotacao().then((x) => console.log(x));
// const cotacao = (dias) =>
//   new Promise((resolve, reject) => {
//     const cotacaoDia = moment().subtract(dias, 'days').format('MM-DD-YYYY');
//     const url = `https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao=%27${cotacaoDia}%27&$top=100&$skip=0&$format=json&$select=cotacaoCompra,cotacaoVenda,dataHoraCotacao`;
//     axios.get(url).then((res) => {
//       if (res.data.value[0]) {
//         resolve(res.data.value[0].cotacaoVenda);
//       } else {
//         reject('erro');
//       }
//     });
//   });

// for (let i = 0; i < 7; i++) {
//   cotacao(i)
//     .then((i) => console.log(i))
//     .catch((err) => console.log('erro: ', err));
// }
