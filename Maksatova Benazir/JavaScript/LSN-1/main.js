let str = "Привет мир";
console.log(str);

let str1 = "Привет";
let str2 = "мир";
console.log(str1 + str2);

let name = "Benazir";
console.log("Hi", name);

let age = "25";
console.log("I am", age, "years old");

let name1 = prompt("Введите ваше имя");
console.log(name1);
alert("Benazir"); // error

let number = prompt("Введите число");
alert(number * 2);

let str3 = "abcde";
let firstSymbol = str3[0];
let secondSymbol = str3[2];
let thirdSymbol = str3[4];
console.log(firstSymbol);
console.log(secondSymbol);
console.log(thirdSymbol);

let number1 = "12345";
let product =
  parseInt(number1[0]) *
  parseInt(number1[1]) *
  parseInt(number1[2]) *
  parseInt(number1[3]) *
  parseInt(number1[4]);
console.log("Произведение чисел 12345 " + number1 + "=" + product);

let secondsInHour = 60 * 60;
let secondsInDay = secondsInHour * 24;
let daysInMonth = 31;
let secondsInMonth = secondsInDay * daysInMonth;
console.log("Количество секунд в часе: " + secondsInHour);
console.log("Количество секунд в сутках: " + secondsInDay);
console.log("Количество секунд в месяце: " + secondsInMonth);

let time = new Date();
let hour = time.getHours();
let minute = time.getMinutes();
let second = time.getSeconds();
let formattedTime = hour + ":" + minute + ":" + second;
console.log("Текущее время: " + formattedTime);

let num = 4;
alert(num * 2);

var num2 = 47;
num += 7;
num -= 18;
num *= 10;
num /= 15;
alert(num);

var num3 = 10;
num3++;
num3--;
console.log(num3);
alert(num3);

console.log("Bena");
