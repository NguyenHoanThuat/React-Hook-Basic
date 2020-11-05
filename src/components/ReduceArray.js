// Turn an array of voter objects into a count of how many people voted

var voters = [
  { name: "Bob", age: 30, voted: true },
  { name: "Jake", age: 32, voted: true },
  { name: "Kate", age: 25, voted: false },
  { name: "Sam", age: 20, voted: false },
  { name: "Phil", age: 21, voted: true },
  { name: "Ed", age: 55, voted: true },
  { name: "Tami", age: 54, voted: true },
  { name: "Mary", age: 31, voted: false },
  { name: "Becky", age: 43, voted: false },
  { name: "Joey", age: 41, voted: true },
  { name: "Jeff", age: 30, voted: true },
  { name: "Zack", age: 19, voted: false },
];

const VoterPeople = (arr) => {
  return arr.reduce((key1, key2) => {
    return key1 + key2.voted;
  }, 0);
};

console.log(VoterPeople(voters));

// Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once

var wishlist = [
  { title: "Tesla Model S", price: 90000 },
  { title: "4 carat diamond ring", price: 45000 },
  { title: "Fancy hacky Sack", price: 5 },
  { title: "Gold fidgit spinner", price: 2000 },
  { title: "A second Tesla Model S", price: 90000 },
];

const TotalPrice = (arr) => {
  return arr.reduce((key, keyNew) => {
    return key + keyNew.price;
  }, 0);
};

console.log(TotalPrice(wishlist));

// Given an array of all your wishlist items, returns an array of titles

var wishlist = [
  { title: "Tesla Model S", price: 90000 },
  { title: "4 carat diamond ring", price: 45000 },
  { title: "Fancy hacky Sack", price: 5 },
  { title: "Gold fidgit spinner", price: 2000 },
  { title: "A second Tesla Model S", price: 90000 },
];

const nameItemOnly = (arr) => {
  return arr.map((key) => {
    return key.title;
  });
};

console.log(nameItemOnly(wishlist));

// Given an array of arrays, flatten them into a single array

/**
 * Example:
 * var arrays = [
 *    ["1", "2", "3"],
 *    [true],
 *    [4, 5, 6]
 *  ];
 *
 * flatten(arrays) // ["1", "2", "3", true, 4, 5, 6];
 */

const array = [["1", "2", "3"], [true], [4, 5, false]];

const flatten = (arr) => {
  return arr.reduce((key, newKey) => {
    return key.concat(newKey);
  }, []);
};

console.log(flatten(array));

/**
 * Count the occurrences of each element inside an array using reduce
 * @params {array}
 * @return {object}
 * Example: 
 * countOccurrences(['a', 'b', 'c', 'b', 'a']) // { a: 2, b: 2, c: 1 };
 * { a : 1, b : 1, c : 1}
}
*/

const checkName = (name) => {
  const result = [];
  const objName = [...name].reduce((key, newKey) => {
    key[newKey] = key[newKey] + 1 || 1;
    return key;
  }, {});
  // return objName;

  return Object.keys(objName).reduce((a, b) => {
    return objName[a] > objName[b] ? a : b;
  });
};

console.log(checkName("nguenhoanthuat"));
