// Object
// 1 exercise
let user = {
  a: { b: 3 },
};
console.log(user.a);

// 2 exercise
let user2 = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
};
delete user2.a;
delete user2.b;
console.log(user2);

// 3 exercise
let user3 = {
  key1: 0,
  key2: 1,
  key3: 2,
  key4: 3,
  key5: 4,
  key6: 5,
  key7: 6,
  key8: 7,
  key9: 8,
};
for (let i = 0; i < 10; i++) {
  user3["key" + i] = i;
}
console.log(user3);

// 4 exercise
const result = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
};
const summ = result.a + result.b;
console.log(summ);

// 5 exercise
let obj1 = {
  test: 1,
  test1: 2,
  test3: 3,
};
let obj2 = {
  test4: 4,
  test5: 5,
  test6: 6,
};
let obj3 = {
  test7: 7,
  test8: 8,
  test9: 9,
};
let sum = { ...obj1, ...obj2, ...obj3 };
console.log(sum);

// 6 exercise
let city1 = {
  name: "Город N",
  population: 10000000,
  getName1: function () {
    return this.name;
  },
};
console.log(city1.getName1());

// 7 exercise
let city2 = {
  name: "Город М",
  population: 1e6,
  getName2: function () {
    return this.name;
  },
};
console.log(city2.getName2());

// 8 exercise
// 8 exercise in 6,7 exercises are done

// 9 exercise

let city3 = {
  name: "Vienna",
  population: 2000000,
  exportStr: function () {
    console.log(`name=${this.name}\npopulation=${this.population}\n`);
  },
};
city3.exportStr();

let city4 = {
  name2: "Linz",
  population2: 210165,
  exportStr2: function () {
    console.log(`name=${this.name2}\npopulation2=${this.population2}\n`);
  },
};
city4.exportStr2();

// 10 exercise
function getObj1() {
  return this;
}
let city5 = {
  name: "Город N",
  population: 10000000,
  getCity5: getObj1,
};
console.log(city5.getCity5());

function getObj2() {
  return this;
}
let city6 = {
  name: "Город М",
  population: 1e6,
  getCity6: getObj2,
};
console.log(city6.getCity6());

// 11 exercise
let object = {
  method1: function () {
    console.log("method1");
    return this;
  },
  method2: function () {
    console.log("method2");
    return this;
  },
  method3: function () {
    console.log("метод3");
    return this;
  },
};
object.method1().method2().method3();
// я так и не поняла как сделать последнее задание, старалась, но что-то не работает
