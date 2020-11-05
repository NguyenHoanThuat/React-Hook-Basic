/**
 * Sử dụng vòng lặp for...of để tính tích của các phần tử trong một array gồm các số
 */

const Area = (arr) => {
  let result = 1;
  for (let i of arr) {
    result *= i;
  }
  return result;
};

console.log(Area([1, 2, 3, 4, 5]));

/**
 * Sử dụng vòng lặp for...in để lấy về tất cả các key của object sau,
 * in ra cả các key của các nested object (object con lồng bên trong object lớn)
 * Gợi ý: đây là bài tập khó, bạn nên tìm hiểu về recursive trước
 */

const apartment = {
  bedroom: {
    area: 20,
    bed: {
      type: "twin-bed",
      price: 100,
    },
  },
};

let result = [];

function getObjectKey(obj) {
  // Write code here...
  for (let key in obj) {
    result.push(key);
    if (typeof obj[key] === "object") {
      getObjectKey(obj[key]);
    }
  }

  return result;
}

console.log(getObjectKey(apartment));
