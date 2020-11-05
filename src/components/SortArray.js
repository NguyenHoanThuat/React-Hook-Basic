//Sử dụng sort method để sắp xếp lại 1 array các số sau theo thứ tự tăng dần

const sortNumber = (arr) => {
  return arr.sort((a, b) => {
    return b - a;
  });
};

console.log(sortNumber([3, 2, 11, 1]));

// Sắp xếp theo độ dài ký tự

const sortLengthName = (arr) => {
  return arr.sort((sort, name) => {
    return sort.length - name.length;
  });
};

console.log(sortLengthName(["dog", "wolf", "by", "family", "eaten"]));

// Sắp xếp theo abc

const sortName = (arr) => {
  return arr.sort();
};

console.log(sortName(["dog", "wolf", "by", "family", "eaten"]));

// Sắp xếp theo độ tuổi

var arr = [
  {
    name: "Quiet Samurai",
    age: 22,
  },
  {
    name: "Arrogant Ambassador",
    age: 100,
  },
  {
    name: "Misunderstood Observer",
    age: 2,
  },
  {
    name: "Unlucky Swami",
    age: 77,
  },
];

const sortAge = (arr) => {
  return arr.sort((sort, age) => {
    return sort.age - age.age;
  });
};

console.log(sortAge(arr));

/**
 * Dữ liệu sinh viên Coders.Tokyo School là một array các object như sau
 * Viết function trả về 1 array gồm 3 người có điểm cao nhất sắp xếp theo thứ tự điểm giảm dần.
 * Mục đích để hiển thị lên bảng Leaderboard
 * Gợi ý: sử dụng sort và slice
 */

var students = [
  { name: "A", score: 100 },
  { name: "B", score: 10 },
  { name: "C", score: 101 },
  { name: "D", score: 50 },
  { name: "E", score: 75 },
];

const sortScore = (arr) => {
  const sortScore = arr.sort((sort, score) => {
    return score.score - sort.score;
  });
  return sortScore.slide(0, 3);
};

console.log(sortScore(students));
