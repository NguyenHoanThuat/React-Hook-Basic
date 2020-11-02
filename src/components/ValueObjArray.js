// Tham tri

let a = 10;
let b = a;
a = 5;
console.log(b);

//Tham chieu

const a = { name: "Thuat" };
const b = a;
a.name = "Vi";
console.log(b);

// Truyen tham so dang tham tri

const doMagic = (number) => {
  number = 5;
};

const a = 10;
doMagic(a);
console.log(a);

// Truyen tham so dang tham chieu

const doMagic1 = (obj) => {
  obj.name = "Vi";
};

const object1 = { name: "Thuat" };
doMagic1(object1);
console.log(object1);

// Truyen tham so nhung khong muon dinh tham chieu

const doMagic2 = (obj) => {
  obj.name = "Vi";
};

const objectName = { name: "Thuat" };
const newObject = { ...objectName };
doMagic2(newObject);
console.log(objectName);

// Vd

const arr = [1, 2, 3];
const newArr = [...arr];
newArr.push(4);
console.log(arr);

//Bai tap 1 = 1000 + 2500 = 3500

const doSomeThingCome = (number, obj) => {
  number = 1500;
  obj.value = 2500;
};

const a = 1000;
const b = { value: 2000 };
doSomeThingCome(a, b);
console.log(a + b.value);

//Bai tap 2

const doSomeThing2 = (obj, arr) => {
  obj.value = 3500;
  //a = 3500;
  arr.push(obj.value);
  //b = [ 2000, 1000, 3500]
};

const a = { value: 1000 };
const b = [2000];
b.push(a.value);
//b = [ 2000, 1000 ]
doSomeThing2(a, b);
console.log(b);
