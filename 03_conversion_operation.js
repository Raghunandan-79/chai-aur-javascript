let score = "33abc";
console.log(typeof(score));

let valueInNumber = Number(score);
console.log(valueInNumber);
console.log(typeof(valueInNumber));

// "33" => 33
// "33abc" => NaN
// true => 1; fale => 0

let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(typeof(booleanIsLoggedIn));

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33;
let stringNUmber = String(someNumber);
console.log(typeof(stringNUmber));

console.log();
// ************* Operations ******************
console.log("************* Operations ******************")

let value = 3;
let negValue = -value;
console.log(negValue);
console.log(2 + 2);
console.log(2 - 2);
console.log(2 * 2);
console.log(2 ** 2);
console.log(2 / 3);
console.log(2 % 3);

let str1 = "Hello";
let str2 = " hitesh";
let str3 = str1 + str2;
console.log(str3);
console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

console.log(+true); // not recommended
console.log(+""); // not recommended

let gameCounter = 100;
console.log(gameCounter);
gameCounter++;
console.log(gameCounter);
