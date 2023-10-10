let f = 8;
let cubeNum = someFn(f);
function someFn(f) {
  return f ** 3;
}
console.log(cubeNum);

let f2 = 50;
let qNum = someFn2(f2);
function someFn2(f2) {
  return f2 ** 2;
}
console.log(qNum);

let f3 = 70;
let f4 = 50;
let sumNum = someFn3(f3);
function someFn3(f3) {
  return f3 + f4;
}
console.log(sumNum);

let f5 = 45;
let f6 = 5;
let f7 = 8;
let result = someFn4(f5, f6, f7);

function someFn4(f5, f6, f7) {
  return (f5 - f6) / f7;
}
console.log(result);
