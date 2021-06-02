const convert = require('./convert');

test('convert: cotacao 4, quantidade 4, total 16', () => {
  expect(convert.convert(4, 4)).toBe(16);
});

test('convert: cotacao 0, quantidade 4, total 0', () => {
  expect(convert.convert(0, 4)).toBe(0);
});

test('convert: cotacao 4, quantidade 0, total 0', () => {
  expect(convert.convert(4, 0)).toBe(0);
});

test('convert: cotacao 3.1, quantidade 1, total 3.1', () => {
  expect(convert.convert('3.1', 1)).toBe(3.1);
});

test('toMoney: valor 3, resultado "3.00"', () => {
  expect(convert.toMoney(3)).toBe('3.00');
});

test('toMoney: valor 1.1, resultado "1.10"', () => {
  expect(convert.toMoney(1.1)).toBe('1.10');
});

test('toMoney: valor "1", resultado "1.10"', () => {
  expect(convert.toMoney('1')).toBe('1.00');
});
