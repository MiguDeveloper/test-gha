const add = (a, b) => {
  return parseInt(a) + parseInt(b);
};

const substract = (minu, sust) => minu - sust;

const isVowel = (character) => {
  if (typeof character !== 'string') {
    throw TypeError('Se espera como argumento un string');
  }
  if (character.length !== 1) {
    throw Error('Args length must be 1');
  }
  return 'aeiou'.includes(character);
};

const countVowel = (string) => {
  const count = { a: 0, e: 0, i: 0, o: 0, u: 0 };
  const arrayLetters = string.split('');
  for (const key in count) {
    if (Object.hasOwnProperty.call(count, key)) {
      arrayLetters.forEach((element) => {
        count[key] = key === element ? count[key] + 1 : count[key];
      });
    }
  }

  return count;
};

const countVowelFast = (str) => {
  return [...str].reduce(
    (acc, curr) =>
      acc.hasOwnProperty(curr) ? { ...acc, [curr]: acc[curr] + 1 } : acc,
    { a: 0, e: 0, i: 0, o: 0, u: 0 }
  );
};

module.exports = { add, substract, isVowel, countVowel, countVowelFast };
