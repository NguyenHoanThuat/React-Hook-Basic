function Mouse(color) {
  this.color = color;
  this.dead = false;
}

Mouse.prototype.die = function () {
  this.dead = true;
};

function Cat() {
  this.stomach = [];
}

Cat.prototype.eat = function (mouse) {
  this.stomach.push(mouse);
  mouse.die();
};

var micky = new Mouse("black");
var jerry = new Mouse("orange");

var tom = new Cat();
tom.eat(jerry);

console.log(tom);

/*
  Viết hàm xây dựng các đối tượng student có các thuộc tính sau:
  - name: String,
  - level: String,
  - school: String

  Trong đó, thuộc tính school là thuộc tính dùng chung, có giá trị là "CodersX".
*/

function Student(name, level) {
  this.name = name;
  this.level = level;
  this.school = "Coder-X";
}

console.log(new Student("nguyen hoan thuat", "10"));

/*
  Viết hàm xây dựng các đối tượng student gồm các thuộc tính:
    diemToan: Number,
    diemLy: Number,
    diemHoa: Number
    average: [function];

    average là hàm tính điểm trung bình 3 môn. 
    average là thuộc tính dùng chung.

  Output: 
    student1.average() = 7
    student2.average() = 8
*/

function student(diemToan, diemLy, diemHoa) {
  this.diemToan = diemToan;
  this.diemLy = diemLy;
  this.diemHoa = diemHoa;
  this.average = Math.round((this.diemToan + this.diemLy + this.diemHoa) / 3);
}

console.log(new student(6, 7, 7));
