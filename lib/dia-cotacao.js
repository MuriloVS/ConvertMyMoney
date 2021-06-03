const moment = require('moment');
const feriados = [
  '06-03-2021',
  '12-25-2021',
  '01-01-2022',
  '09-07-2021',
  '08-15-2021',
];
const data = () => {
  const hoje = moment().format('d');
  if (hoje === 0) {
    return moment().subtract(2, 'days').format('MM-DD-YYYY');
  } else if (hoje === 6) {
    return moment().subtract(1, 'days').format('MM-DD-YYYY');
  } else if (!feriados.includes(moment().format('MM-DD-YYYY'))) {
    return moment().format('MM-DD-YYYY');
  } else {
    return moment().subtract(1, 'days').format('MM-DD-YYYY');
  }
};

const diaCotacao = data();

module.exports = diaCotacao;
