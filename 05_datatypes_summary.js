/* 
    Primitve datetypes => 7 types
    1. String
    2. Number
    3. Boolean
    4. null
    5. undefined
    6. Symbol
    7. BigInt
*/

const score = 100;
const scoreValue = 100.3;
const isLoggedIn = true;
const outsideTemp = null;
let userEmail;
const id = Symbol('123');
const anotherID = Symbol('123');
const bigNumber = 3455667777142345n;

/* 
    Reference datatypes => Non primitive
    1. Array
    2. Objects
    3. Functions
*/ 

const heroes = ["shaktiman", "naagraj", "doga", "Krish"];

let obj = {
    firstName: "Hitesh",
    age: 22,
}

const myFunction = function() {
    console.log("Hello Word");
}