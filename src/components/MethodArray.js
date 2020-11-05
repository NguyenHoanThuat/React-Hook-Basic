/*
	Viết 1 chương trình xóa đi n phần tử cuối cùng của 1 array
*/

const arr = ["a", "b", "c", "d"];
console.log(arr); // => (4) ["a", "b", "c", "d"]

for (var key = 0; key < 3; key++) {
  arr.pop();
}

console.log(arr);

/**
 * Viết function trả về n phần tử đầu tiên có trong mảng.
 */

const arr = ["a", "b", "c", "d"];
let arr1 = [];
let arr2 = [];
for (var key = 0; key < 3; key++) {
  arr2.push(arr.shift());
}

console.log(arr2);

/**
 * 1. Viết hàm double nhận vào 1 số bất kì, trả về  số đó nhân đôi
 *  Vd: double(2) === 4
 * 2. Viết hàm sumAndDo nhận vào 1 array và 1 callback function.
 * Hàm sumAndDo làm nhiệm vụ tính tổng array đó,
 * sau đó gọi callback function với tham số là kết quả tổng vừa tính
 * 3. Nếu mảng trống trả về giá trị 0
 * Vd: sumAndDo([1, 2, 3], double) === 12
 */

const double = (number) => {
  return number * 2;
};

const sumAndDo = (arr, callback) => {
  sum = 0;
  if (arr.length === 0) {
    return 0;
  } else {
    for (let i of arr) {
      sum += i;
    }
  }
  return callback(sum);
};

console.log(sumAndDo([1, 2, 3, 4, 5], double));

/**
 * 1. Viết hàm transform nhận vào 1 array gồm các số và 1 function callback.
 * Nội dung của hàm bao gồm:
 * - Khai báo 1 biến result có giá trị là 1 empty array
 * - Lặp qua từng phần tử trong array, với mỗi phần tử, gọi hàm callback và truyền vào phần tử đó,
 * được kết quả bao nhiêu thì push vào array khai báo ở trên
 * - Trả về result array
 */

const transform = (arr, callback) => {
  let result = [];

  for (let i of arr) {
    result.push(callback(i));
  }
  return result;
};

const double = (number) => {
  return number * 2;
};

console.log(transform([1, 2, 3], double));
