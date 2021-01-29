const { add, substract } = require('./suma');

test('1 + 2 = 3', () => {
  expect(add(1, 2)).toBe(3);
});

test('a + 5 = NaN', () => {
  expect(add('a', 5)).toBe(NaN);
});

test('5 - 4 = 1', () => {
  expect(substract(5, 4)).toBe(1);
});

test('5 - b = NaN', () => {
  expect(substract(5, 'b')).toBe(NaN);
});
