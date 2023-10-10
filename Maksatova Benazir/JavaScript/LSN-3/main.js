// 1 exercise
let cycle = " ";
for (let i = 1; i < 101; i++) {
  cycle = cycle + i + " ";
}
console.log(cycle);

// 2 exercise
let cycle2 = " ";
for (let i = 11; i < 34; i++) {
  cycle2 = cycle2 + i + " ";
}
console.log(cycle2);

// 3 exercise
let cycle3 = " ";
for (let i = 0; i <= 100; i += 2) {
  cycle3 = cycle3 + i + " ";
}
console.log(cycle3);

// 4 exercise
let cycle4 = 0;
for (let i = 1; i <= 100; i++) {
  cycle4 += i;
}
console.log(cycle4);

// 5 exercise
let cycle5 = [1, 2, 3, 4, 5];
for (let i = 0; i < cycle5.length; i++) {
  console.log(cycle5[i]);
}

// 6 exercise
let cycle6 = [1, 2, 3, 4, 5];
let result1 = 0;
for (let i = 0; i < cycle6.length; i++) {
  result1 += cycle6[i];
}
console.log(result);

// 7 exercise
let cycle7 = { green: "зеленый", red: "красный", blue: "голубой" };
for (let key in cycle7) {
  if (cycle7.hasOwnProperty(key)) {
    console.log(`Ключ: ${key}, Элемент: ${cycle7[key]}`);
  }
}

// 8 exercise
let cycle8 = { Коля: "200", Вася: "300", Петя: "400" };
for (let key in cycle8) {
  if (cycle8.hasOwnProperty(key)) {
    console.log(`${key} - зарплата ${cycle8[key]} долларов`);
  }
}

// 9 exercise
let cycle9 = [2, 5, 9, 15, 0, 4];
for (let i = 0; i < cycle9.length; i++) {
  if (cycle9[i] > 3 && cycle9[i] < 10) {
    console.log(cycle9[i]);
  }
}

// 10 exercise
let cycle10 = [2, 5, 9, 15, 0, 4];
for (let i = 0; i < cycle10.length; i++) {
  if (cycle10[i] > 3 && cycle10[i] < 10) {
    console.log(cycle10[i]);
  }
}

// 11 exercise
let cycle11 = [2, -5, 9, -15, 0, 4];
for (let i = 0; i < cycle11.length; i++) {
  if (cycle11[i] > 3 && cycle11[i] < 10) {
    console.log(cycle11[i]);
  }
}

// 12 exercise
let cycle12 = [1, 2, 5, 9, 4, 13, 4, 10];
for (let i = 0; i < cycle12.length; i++) {
  if (cycle12[i] > 3 && cycle12[i] < 10) {
    console.log(cycle12[i]);
  }
}

// 13 exercise
let cycle13 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let result2 = "-";
for (let i = 0; i < cycle13.length; i++) {
  result += cycle13[i] + "-";
}
console.log(result);

// 16 exercise
let n = 1000;
let num = 0;

while (n >= 50) {
  n /= 2;
  num++;
}
console.log("Результат:", n);
console.log("Количество итераций:", num);
