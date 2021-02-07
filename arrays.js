const arr = [25, 10, 26, 10, 11, 14, 15, 40, 9, 2, 3, 26, 70, 16, 17];

const maxNum = (arr) => {
  let maxItem = 0;
  arr.forEach((item) => {
    if (maxItem <= item) {
      maxItem = item;
    }
  });

  return maxItem;
};

const maxNumPro = (arr) => {
  return Math.max(...arr);
};

const minNumPro = (arr) => {
  return Math.min(...arr);
};

const refArray = (arr) => {
  const arrResult = [];
  while (arr.length) {
    arrResult.push(arr.shift());
  }

  return arr;
};

const byValueArrTrick = (arr) => {
  const copy = [...arr];
  const arrResult = [];

  while (copy.length) {
    arrResult.push(copy.shift());
  }

  return arr;
};

module.exports = { maxNum, maxNumPro, minNumPro, refArray, byValueArrTrick };
