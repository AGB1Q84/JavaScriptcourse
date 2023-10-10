// методы массивов продолжение

// splice
// const arrSplice = ["Bob", "Jeck", "Tom", "Vi", "Kate", "Tom"];
// const del = arrSplice.splice(2);

// console.log(arrSplice);
// console.log(del);

//concat
// const arrConcat1 = ["Hi", "world"];
// const arrConcat2 = ["and", "JS", "!"];
// const conc = arrConcat1.concat(arrConcat2);
// const conc = [...arrConcat1, ...arrConcat2];
// console.log(conc);

//join
// const strJoin = conc.join(" ");
// console.log(strJoin);

// forEach() map()
// const arrNumbers = [1, 2, 3, 4, 5, 6, 7];
// const newNumber = arrNumbers.map((i) => i + 10);
// console.log(newNumber);
// arrNumbers.forEach((i) => console.log(i + 20));

//flat
// const arrFlat = [1, "we", {}, [2, 3, 4, 5, {}], 5];
// [2, 3, 4, 5, [1, 8, 9]];
// const newArrFlat = arrFlat.flat();
// console.log(arrFlat);
// console.log(newArrFlat);

//строки
const a = "Hello";
const b = "World";
const ab = a.concat(b);
// console.log(ab);

const lenght = ab.lenght;
// console.log(lenght);
//удаление пробелов trim
const login = "admin";
const log = login.trim;
// console.log(login.length);
// console.log(login.length);

// toLowerCase
const str = "Холодильник";
const str1 = str.toLowerCase();
const str2 = str.toUpperCase();
// console.log(str1);
// console.log(str2);

// includes
const strIncl = "Привет мир, это мой 8 урок JS";
const isWorld = strIncl.includes("мир");
console.log(isWorld);

const strIncl1 = "Привет Мир, это мой 8 урок JS";
const isWorld1 = strIncl.includes("мир");
console.log(isWorld1);

const strSplit = "Привет Мир, это мой 8 урок JS";
const strToArr = strSplit("мир");
console.log(isWorld2);
