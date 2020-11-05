// Viết hàm trả về số chẵn đầu tiên trong mảng sử dụng find method
// Nếu không tìm thấy số chẵn nào thì trả về undefined

const firstEven = (arr) => {
  return arr.find((key) => {
    return key % 2 === 0;
  });
};

console.log(firstEven([1, 3, 4, 2, 6]));

/**
 * viết hàm tìm số chia hết cho x đầu tiên có trong mảng
 * @params {array} array - Mảng các chữ số
 * @params {number} x - Số bị chia
 * Nếu không có trả về undefined
 * Example:
 * findDivisibleNum([1, 3, 4], 2) => 4
 */

const firstNumber = (arr, x) => {
  return arr.find((key) => {
    return key % x === 0;
  });
};

console.log(firstNumber([1, 2, , 5, 4, 6], 3));
