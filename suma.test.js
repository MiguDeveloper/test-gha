// BDD: behavior-driven development (desarrollo guiado por comportamiento)
const { add, substract, isVowel, countVowel } = require('./suma');

describe('Sumar', () => {
  test('1 + 2 = 3', () => {
    expect(add(1, 2)).toBe(3);
  });

  test('a + 5 = NaN', () => {
    expect(add('a', 5)).toBe(NaN);
  });
});

describe('Restar', () => {
  test('5 - 4 = 1', () => {
    expect(substract(5, 4)).toBe(1);
  });

  test('5 - b = NaN', () => {
    expect(substract(5, 'b')).toBe(NaN);
  });
});

describe('isVowel', () => {
  test('isVowel retorna true para input "a"', () => {
    expect(isVowel('a')).toBe(true);
  });

  test('isVowel retorna false para input "c"', () => {
    expect(isVowel('c')).toBe(false);
  });
});

describe('countVowel', () => {
  test('miguel devuelve {"a":0,"e":1,"i":1,"o":0,"u":1}', () => {
    expect(countVowel('miguel')).toEqual({ a: 0, e: 1, i: 1, o: 0, u: 1 });
  });
});
