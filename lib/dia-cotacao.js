const moment = require('moment');

const data = () => {
  const hoje = moment().format('d');
  if (hoje === 0) {
    return moment().subtract(2, 'days').format('MM-DD-YYYY');
  } else if (hoje === 6) {
    return moment().subtract(1, 'days').format('MM-DD-YYYY');
  } else {
    return moment().format('MM-DD-YYYY');
  }
};

const diaCotacao = data();

module.exports = diaCotacao;
