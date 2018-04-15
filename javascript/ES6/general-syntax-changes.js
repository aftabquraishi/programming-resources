// General
// ------------------------------------------------------

// ---- let (block scoping) ----

let age = 27;
if (true) {
    let age = 30;
    console.log(age); // 30
}
console.log(age); // 27

// ---- const ----

const age = 27;
console.log(age); // 27

const AGE = 27;
AGE = 29;
console.log(AGE); // error

// but objects and arrays can be changed

// ---- hoisting ----

age = 27; // error
let age;

let age; // let variables should be declared before using it
age = 27; // ok

// ---- (fat) arrow function ----

function fn() {
    console.log("hello");
}

// can be rewritten as
var fn = () => {
    console.log("hello");
}

var fn = () => console.log("hello"); // one line can be written without curlies
var fn = () => "hello"; // if it returns a value in one line, then no need to use the 'return' keyword
console.log(fn());

var fn = (a, b) => a + b; // pass argument
console.log(fn(3, 8));

var fn = a => a + 5; // for one argument parenthesis can be skipped
console.log(fn(3));

setTimeout(() => console.log("Hello"), 1000);

// how 'this' works with arrow function?
function fn() {
    console.log(this); // 'this' is pointing to the button object
}
button.addEventListener('click', fn);

var fn2 = () => console.log(this); // in arrow function 'this' points to the window object
button.addEventListener('click', fn2);

// ---- default parameter ----

function isEqualTo(number, compare = 5) { // default value of compare is 5
    Return number == compare;
}
console.log(isEqualTo(10)); // false

// ---- object literal extension ----

let name = "Anna";
let age = 25;
let ageField = "age";

let obj = {
    "name": "Max",
    [ageField]: 28,
    "greet me"() {
        console.log(this.name + ", " + this.age);
    }
}

console.log(obj[ageField]); // 28
obj["greet me"](); // Max, 28

// ---- rest operator ----

function sumUp(...toAdd) {
    let result = 0;
    for (let i = 0; i < toAdd.length; i++) {
        result += toAdd[i];
    }
    return result;
}

console.log(sumUp(100, 10, 20));

// ---- spread operator ----

let numbers = [1,2,3,4,5];
console.log(Math.max(...numbers));

// ---- for-of loop ----

let numbers = [1,2,3,4,5];
for (number of numbers) {
    console.log(number);
}

// ---- template literal ----

let name = "max";
let description = `
    Hello, I'm ${name + ' !!!'}
`;
console.log(description);

// ---- deconstructing ----

// array
let numbers = [1, 2, 3]
let [a, b] = numbers;

let a = 5;
let b = 10;
[b, a] = [a, b];

// object
let obj = {
    name: "Max",
    age: 27,
    greet: function() {
        console.log("Hello there");
    }
}

let {name, greet} = obj;
greet();