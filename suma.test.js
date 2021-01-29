const sum = require('./suma');

test('1 + 2 = 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('a + 5 = NaN', () => {
  expect(sum('a', 5)).toBe(NaN);
});
