const { maxNumPro, maxNum, refArray, byValueArrTrick } = require('./arrays');

describe('max Num en array', () => {
  const arr = [25, 10, 26, 10, 11, 14, 15, 40, 9, 2, 3, 26, 70, 16, 17];
  it('maxNumPro: devuelve 70 para [25, 10, 26, 10, 11, 14, 15, 40, 9, 2, 3, 26, 70, 16, 17]', () => {
    expect(maxNumPro(arr)).toBe(70);
  });

  it('manNum: devuelve 70 para [25, 10, 26, 10, 11, 14, 15, 40, 9, 2, 3, 26, 70, 16, 17]', () => {
    expect(maxNum(arr)).toBe(70);
  });
});

describe('Arrays por referencia, trick por valor', () => {
  const arr1 = [1, 2, 3];
  it('arr1 = [1,2,3] param function(arr){deleItemArray(); return arr} se espera arr1 = []', () => {
    expect(refArray(arr1)).toEqual([]);
  });

  const arr2 = [1, 2, 3];
  it('arr2 = [1,2,3] param function(arr){deleItemArray(); return arr} se espera arr2 = [1,2,3]', () => {
    expect(byValueArrTrick(arr2)).toEqual([1, 2, 3]);
  });
});
