/**
 * Dùng vòng lặp for kiểm tra số nguyên tố.
 * @param {number} x Số cần kiểm tra
 * @return {boolean} Trả về true nếu là số nguyên tố, ngược lại là false.
 */

const CheckPrime = (number) => {
  let dem = 0;
  for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
      dem++;
    }
  }
  if (dem === 2) {
    console.log(number + " la so nguyen to");
  }
};

console.log(CheckPrime(3));

/**
 * Sử dụng vòng lặp for để tính tổng các số có trong mảng:
 */

const TotalArray = (arr) => {
  sum = 0;
  for (let i of arr) {
    sum += i;
  }
  return sum;
};

console.log(TotalArray([1, 2, 3, 4, 5]));

/**
 * Dùng vòng lặp for để hiển thị ra màn hình bảng chữ cái abc.
 * Gợi ý: Dùng String.fromCharCode
 * Ví dụ: String.fromCharCode(97)) sẽ trả về ký tự"a"
 * Tham khảo: http://www.asciitable.com/ để hiểu thêm về mã ascii
 */

const AZ = () => {
  for (let i = 97; i <= 122; i++) {
    console.log(String.fromCharCode(i));
  }
};

AZ();

// tính tổng của tích của các phần tử của array a với các phần tử của array b.
/**
 * var a = [1, 2, 3];
 * var b = [10, 20];
 * Kết quả mong muốn: 180 // (10 + 20 + 30) + (20 + 40 + 60)
 */

const TotalAreaArray = (a, b) => {
  sum = 0;
  for (let i = 0; i < a.length; i++) {
    for (let z = 0; z < b.length; z++) {
      sum += a[i] * b[z];
    }
  }
  return sum;
};

console.log(TotalAreaArray([1, 2, 3], [10, 20]));

/**
 * Viết hàm calculate trả về tích các số từ start đến end, không tính end
 * Ví dụ: calculate(2, 5) trả về kết quả 24 (vì 2 * 3 * 4 = 24)
 */

const calculator = (start, end) => {
  let result = 1;
  for (let i = start; i < end; i++) {
    result *= i;
  }
  return result;
};

console.log(calculator(2, 5));

/**
*  Sử dụng vòng lặp for viết hàm has để kiểm tra xem array có tồn tại 1 giá trị xác định hay không
*  Tham số:
*- array: mảng cần kiểm tra
*- value: giá trị cần kiểm tra xem có tồn tại trong array không
* Return:
*- true nếu có tồn tại
*- false nếu không tồn tại

*/

const CheckArray = (array, value) => {
  for (let i of array) {
    if (i === value) {
      return true;
    }
    return false;
  }
};

console.log(CheckArray([1, 2, 3, 4, 5], 1));

// Tính giai thừa của một số nguyên

const Factorial = (number) => {
  let result = 1;
  for (let i = 1; i <= number; i++) {
    result *= i;
  }
  return result;
};

console.log(Factorial(5));
