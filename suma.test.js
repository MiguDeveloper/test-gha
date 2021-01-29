const sum = require('./suma');

test('sumar 1 + 2 igual 3', () => {
  expect(sum(1, 2)).toBe(3);
});
