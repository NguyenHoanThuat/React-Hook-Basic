// Given an array of numbers, return a new array that has only the numbers that are 5 or greater.
const fiveAndGreaterOnly = (arr) => {
  return arr.filter((key) => {
    return key > 5;
  });
};

console.log(fiveAndGreaterOnly([1, 2, 3, 8, 7, 4, 8]));

// Given an array of numbers, return a new array that only includes the even numbers.

const evensOnly = (arr) => {
  return arr.filter((key) => {
    return key % 2 === 0;
  });
};

console.log(evensOnly([1, 2, 5, 6, 4]));

/**
 * Give a list of students, filter out non-female
 */

var members = [
  { name: "Lan", gender: "female" },
  { name: "Linh", gender: "female" },
  { name: "Trung", gender: "male" },
  { name: "Peter", gender: "gay" },
];

const filterOutFemales = (members) => {
  return members.filter((key) => {
    return key.gender !== "female";
  });
};

console.log(filterOutFemales(members));
