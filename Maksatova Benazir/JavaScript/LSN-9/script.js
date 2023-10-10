// 1 experience
const numbers = [1, 2, 3, 4, 5];
console.log(numbers.join());

// 2 experience
const fruits = ["apple", "banana", "cherry", "date", "fig"];
const delFruits = fruits.splice(2, 2);
console.log(fruits);

// 3 experience
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
console.log(array1.concat(array2));

// 4 experience
const words = ["apple", "banana", "cherry"];
console.log(words.map((words) => words.length));

// 5 experience
const inputString = "Hello World";
console.log(inputString.toLowerCase());

// 6 experience
const inputString2 = "Hello World";
console.log(inputString2.toUpperCase());

// 7 experience
const fruits2 = ["apple", "banana", "cherry"];
for (let i = 0; i < fruits.length; i++) {
  const indexFruits2 = fruits2.indexOf(fruits2[i]);
  console.log(`Индекс элемента "${fruits2[i]}" в массиве: ${indexFruits2}`);
}

// 8 experience
const numbers2 = [1, 2, 3, 4, 5];
numbers.forEach((element) => console.log(element));

// 9 experience
const stringWithWhitespace = " Hello, World! ";
console.log(stringWithWhitespace.trim());

// 10 experience
const fruits3 = ["apple", "banana", "cherry"];
for (let i = 0; i < fruits.length; i++) {
  const trueFruits3 = fruits3.includes(fruits3[i]);
  console.log(`Слово "${fruits3[i]}" является: ${trueFruits3}`);
}

// 11 experience
const sentence = "Hello, how are you?";
const separationWords = sentence.split(", ");
console.log(separationWords);

// 12 experience
const nestedArray = [1, [2, 3], [4, [5, 6]]];
console.log(nestedArray.flat(Infinity));

// 13 experience
const string1 = "Hello";
const string2 = "World";
const pluse = string1.concat(string2);
console.log(pluse);

// 14 experience
const numbers3 = [1, 2, 3, 4, 5];
console.log(numbers3.length);

//15 experience
const csvData = "John,Doe,30,Engineer";
const data = csvData.split(",");
console.log(data);

//16 experience
const students = [
  { name: "Alice", subject: "Math" },
  { name: "Bob", subject: "Physics" },
  { name: "Charlie", subject: "Math" },
  { name: "David", subject: "Chemistry" },
];
//        1
const act1 = students.map((students) => students.name);
console.log(act1);
//        2
const act2 = students;
for (let i = 0; i < students.length; i++) {
  students[i].name = students[i].name.toLowerCase();
}
console.log(act2);
//       3
const act3 = students.filter(function (student) {
  return student.subject === "Math";
});
console.log(act3);

//       4
const act4 = act3.map((student) => student.name).join(",");
console.log(act4);
