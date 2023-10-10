// 1 experience
const arr = ["apple", "banana", "cherry"];
const arrLength = arr.map((arr) => arr.length);
console.log(arrLength);

// 2 experience
const numbers = [1, 2, 3, 4, 5];
const arrNumbers = numbers.filter((number) => number % 2 === 0);
console.log(arrNumbers);

// 3 experience
const words = ["apple", "banana", "cherry"];
const aWords = words.filter((words) => words.includes("a"));
console.log(aWords);

// 4 experience
const numbers2 = [8, 12, 5, 20, 3];
const lookNumbers = numbers2.find((numbers) => numbers > 10);
console.log(lookNumbers);

// 5 experience
const fruits = ["apple", "banana"];
fruits.push("cherry");
console.log(fruits);

// 6 experience
const fruits2 = ["apple", "banana", "cherry"];
fruits2.pop();
console.log(fruits2);

// 7 experience
const fruits3 = ["apple", "banana"];
fruits3.unshift("peach");
console.log(fruits3);

// 8 experience
const fruits4 = ["apple", "banana", "cherry"];
console.log(fruits4.shift());

// 9 experience
const numbers3 = [3, 1, 4, 1, 5, 9, 2];
console.log(numbers3.sort());

// 10 experience
const words2 = ["banana", "cherry", "apple"];
console.log(words2.sort());

// 11 experience
const numbers4 = [1, 2, 3, 4, 5];
console.log(numbers4.reverse());

// 12 experience
const fruits5 = ["apple", "banana", "cherry"];
console.log(fruits5.includes("apple"));
