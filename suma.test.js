// BDD: behavior-driven development (desarrollo guiado por comportamiento)
const {
  add,
  substract,
  isVowel,
  countVowel,
  countVowelFast,
} = require('./suma');

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
  it('deberia arrojar error cuando se invoca sin string', () => {
    expect(() => isVowel()).toThrow(TypeError);
  });

  it('deberia arrojar error cuando se invoca con un numero', () => {
    expect(() => isVowel(123)).toThrow(Error);
  });

  it('deberia devolver error cuando length de string > 1 : aaa', () => {
    expect(() => isVowel('aaa')).toThrow('Args length must be 1'); //toThrow(Error)
  });

  test('isVowel retorna false para input "ae"', () => {
    expect(() => isVowel('ae')).toThrow(Error);
  });

  test('isVowel retorna true para input "a"', () => {
    expect(isVowel('a')).toBe(true);
  });

  test('isVowel retorna false para input "c"', () => {
    expect(isVowel('c')).toBe(false);
  });
});

describe('countVowel', () => {
  it('miguel devuelve {"a":0,"e":1,"i":1,"o":0,"u":1}', () => {
    expect(countVowel('miguel')).toEqual({ a: 0, e: 1, i: 1, o: 0, u: 1 });
  });

  it('miguel devuelve {"a":0,"e":1,"i":1,"o":0,"u":1}', () => {
    expect(countVowelFast('miguel')).toEqual({ a: 0, e: 1, i: 1, o: 0, u: 1 });
  });
});
