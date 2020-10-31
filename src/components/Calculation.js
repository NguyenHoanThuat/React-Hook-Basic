// =========
// Phép Cộng
// =========

//Number + number = number
console.log(1 + 2);

//String + String = String ( Nối chuổi)
console.log("front" + "end");

//Number + String
console.log(100 + "100");

console.log(100 + 100 + "100");

console.log(100 + "100" + 100);

console.log(100 + (100 + "100"));

// =========
// Phép Trừ
// =========

//string - string = NaN
console.log("abc" - "abc");

//number -number = number
console.log(2 - 1);

//number - string = NaN
console.log(100 - "abc");

//number - numberString = number - number = number
console.log(100 - "50");

// =========
// Phép Cộng vaf Phép trừ
// =========

console.log(100 + "100" - 100);

console.log(100 - "100" + 100);

//Bài tập
//A = 100 + 100 + '100' - 100 = 200 + '100' - 100 = 200100 - 100 = 200000
console.log(100 + 100 + "100" - 100);
//B = 100 + '100' - '100' + '100' = 100100 - '100' + '100' = 100000 + '100' = 100000100
console.log(100 + "100" - "100" + "100");
//C = 100 +  (100 + '200') - '300' = 100 + '100200' - '300' = '100100200' - '300'= 100099900
console.log(100 + (100 + "200") - "300");
//D = 100 + 200  - '300sub' = 300 - '300sub' = 300 - NaN = NaN
console.log(100 + 200 - "300sub");
