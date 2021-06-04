const api = require('./api.bcb');
const axios = require('axios');

jest.mock('axios');

test('getCotacaoAPI', () => {
  const res = {
    data: {
      value: [{ cotacaoVenda: 5.06 }],
    },
  };

  axios.get.mockResolvedValue(res);
  api.getCotacaoAPI('06-04-2021').then((resp) => {
    expect(resp).toEqual(res);
  });
});

test('extractCotacao', () => {
  const res = {
    data: {
      value: [{ cotacaoVenda: 5.06 }],
    },
  };

  const cotacao = api.extractCotacao(res);
  expect(cotacao).toBe(5.06);
});
