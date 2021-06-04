const moment = require('moment');

const data = (hoje) => {
  if (hoje === 0) {
    return moment().subtract(2, 'days').format('MM-DD-YYYY');
  } else if (hoje === 6) {
    return moment().subtract(1, 'days').format('MM-DD-YYYY');
  } else {
    return moment().format('MM-DD-YYYY');
  }
};

const hoje = moment().format('d');
const diaCotacao = data(hoje);

module.exports = diaCotacao;
