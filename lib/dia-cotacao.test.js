const dia = require('./dia-cotacao');
const moment = require('moment');

test('dia-cotacao: 06-04-2021', () => {
  expect(dia.data(6)).toBe('06-03-2021');
});

test('dia-cotacao: 06-04-2021', () => {
  expect(dia.data(0)).toBe('06-02-2021');
});

test('dia-cotacao: 06-04-2021', () => {
  expect(dia.data(5)).toBe('06-04-2021');
});
