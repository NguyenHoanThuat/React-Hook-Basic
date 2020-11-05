/**
 * 1. Viết hàm tripple nhận vào 1 số và trả về số đó nhân 3
 * 2. Viết hàm multiply nhận vào một mảng numbers,
 * sử dụng map method và hàm tripple để trả về 1 mảng
 * gồm các phần tử nhân 3 các phần tử trong mảng ban đầu
 */

const tripple = (number) => {
  return number * 3;
};

console.log(tripple(3));

const multiply = (arr) => {
  return arr.map((key) => {
    return key * 3;
  });
};

console.log(multiply([1, 2, 3]));

// Use array map make an array of strings of the names

var users = [
  {
    name: "Angelina Jolie",
    age: 80,
  },
  {
    name: "Eric Jones",
    age: 2,
  },
  {
    name: "Paris Hilton",
    age: 5,
  },
  {
    name: "Kayne West",
    age: 16,
  },
  {
    name: "Bob Ziroll",
    age: 100,
  },
];

const nameOnly = (arr) => {
  return arr.map((key) => {
    return key.name;
  });
};

console.log(nameOnly(users));

// Use array map make an array of the names in <h1></h1>, and the ages in <h2></h2>

const users = [
  {
    name: "Angelina Jolie",
    age: 80,
  },
  {
    name: "Eric Jones",
    age: 2,
  },
  {
    name: "Paris Hilton",
    age: 5,
  },
  {
    name: "Kayne West",
    age: 16,
  },
  {
    name: "Bob Ziroll",
    age: 100,
  },
];

const H1H2 = (arr) => {
  return arr.map((key) => {
    return `<h1>${key.name}</h1><h2>${key.age}</h2>`;
  });
};

console.log(H1H2(users));
