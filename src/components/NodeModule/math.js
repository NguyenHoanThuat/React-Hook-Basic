let math = {
  add: function (a, b) {
    return a + b;
  },
  multiply: (a, b) => {
    return a * b;
  },
  sum: (arr) => {
    let sum = 0;
    for (let i of arr) {
      sum += i;
    }
    return sum;
  },
};

module.exports = math;
