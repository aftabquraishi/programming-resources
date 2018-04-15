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


// Module & Class
// ------------------------------------------------------
https://plnkr.co/
https://github.com/google/traceur-compiler
https://github.com/systemjs

<body>
    <script>
        System.import('./script.js');
    </script>
</body>

// ---- modules/import/export ----

// external.js
export let keyValue = 1000;
export function test () {
    keyValue = 2000;
    console.log("tested");
}
// or
export {keyValue, test};

// script.js
import {keyValue, test} from './external.js';
// or
import * as imported from './external.js';

console.log(keyValue); // 1000
// or
console.log(imported.keyValue);
test();
console.log(keyValue); // 2000

// ---- class ----

class Person {
    constructor(name) {
        this.name = name;
    }
    greet()  {
        console.log("Hello, my name is " + this.name);
    }
}
let person = new Person("Max");
person.greet();

// ---- prototype ----

// ---- inheritance ----
class Person {
    constructor(name) {
        this.name = name;
    }
    greet()  {
        console.log("Hello, my name is " + this.name + " and I am " + this.age);
    }
}

class Max extends Person {
    constructor(age) {
        super('Max');
        this.age = age;
    }
    greet()  {
        console.log("Hello");
    }
    greetTwice() {
        this.greet(); // Hello
        this.greet();
    }
    superGreetTwice() {
        super.greet(); // Hello, my name is Max and I am 27
        super.greet();
    }
}

let max = new Max(27);
max.greet();
max.greetTwice();
max.superGreetTwice();

// ---- static method ----

class Helper {
    static log(message) {
        console.log(message);
    }
}
Helper.log('Logged');

// ---- get / set ----

class Person {
    constructor(name) {
        this._name = name;
    }
    get name()  {
        return this._name.toUpperCase();
    }
    set name(value) {
        if (value.length < 5) {
            this._name = name;
        }
    }
}
let person = new Person("Max");
person.name = "Anna Maria"; // won't work
Person._name = "Anna Maria"; // will work, no protection

// ---- extend built in object ----

class convertableArray {
    convert() {
        let returnArray = [];
        this.forEach(value => returnArray.push('Converted!' + value));
    }
}
let numberArray = new convertableArray();
numberArray.push(1);
numberArray.push(2);
numberArray.push(3);
console.log(numberArray.convert()); // ["Converted!1", "Converted!2", "Converted!3"]

// Symbol
// ------------------------------------------------------

// ---- symbol ----

let symbol = Symbol("debug");
let anotherSymbol = Symbol("debug");
console.log(symbol == anotherSymbol); // false

// --
let obj = {
    name: 'max',
    [symbol]: 22
}
console.log(obj); // shows only - name: 'max', symbol is not visible
console.log(obj[symbol]); // 22

// --
let symbol1 = Symbol.for('age');
let symbol2 = Symbol.for('age');
console.log(symbol1 == symbol2); // true

// --
let symbol = Symbol.for('age');
let person = {
    name: "Max",
    age: 30
};

function makeAge() {
    let ageSymbol = Symbol.for('age');
    person[ageSymbol] = 27;
}
makeAge(person[symbol]); // 27
console.log(person["age"]); // 30

// -- well known symbols --
class Person {
}
let person1 = new Person();
console.log(person1); // [object object] { ... }

Person.prototype[Symbol.toStringTag] = 'Person';
let person2 = new Person();
console.log(person2); // [object Person] { ... }

// iterator & generator
// ------------------------------------------------------

// ---- iterator ----

let person = {
    Name: 'Max',
    hobbies: ['Sports', 'Cooking'],
    [Symbol.iterator] = function() {
        let i = 0;
        let hobbies = this.hobbies;
        return {
            next: function() {
                let value = hobbies[i];
                i++;
                return {
                    done: i > hobbies.length ? true : false,
                    value: value
                }
            }
        }
    }
}
for (let hobby of person) {
    console.log(hobby); // "Sports" "Cooking"
}

// ---- generator ----

let obj = {
    [Symbol.iterator]: gen
}
function *gen() {
    yield 1;
    yield 2;
}
for (let element of obj) {
    console.log(element); // 1 2
}

// Promise
// ------------------------------------------------------

// ---- promise ----

let promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        If (true) {
            resolve('Done!');
        } else {
            reject('Failed!');
        }
    }, 1500);
});
promise.then(function(value) {
    console.log(value); // "Done!"
}, function(error) {
    console.log(error); // "Failed!"
});

// --
function waitASecond(seconds) {
    return new Promise(function(resolve, reject) {
        if (seconds > 2) {
            reject('Rejected!');
        } else {
            setTimeout(function() {
                seconds++;
                resolve(seconds);
            }, 1000);
        }
    });
}
waiASecond(0)
    .then(waiASecond)
    .then(function(seconds) {
        console.log(seconds); // 2
    })
    .catch(function(error) {
        console.log(error); // "'Rejected!"
    });

// -- all and race
let promise1 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve('Resolved!');
    }, 1000);
});
let promise2 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve('Rejected!');
    }, 2000);
});
// if all are success then resolve will execute, or if any fails then the reject will execute
Promise.all([promise1, promise2])
    .then(function(success) {
        console.log(success);
    })
    .then(function(error) {
        console.log(error);
    }); // "Rejected!"
// depends on the fastest executed promise
Promise.race([promise1, promise2])
    .then(function(success) {
        console.log(success);
    })
    .then(function(error) {
        console.log(error);
    }); // "Resolved!"

// Built-in object extensions
// ------------------------------------------------------

// ---- Object ----

class Obj1 {
    constructor() {
        this.a = 1;
    }
}
class Obj2 {
    constructor() {
        this.b = 2;
    }
}
let obj1 = new Obj1();
let obj2 = new Obj2();
let obj = Object.assign(obj1, obj2);
console.log(obj);

// --
let person = {
    name: "Max"
};
let boss = {
    name: "Anna"
};
Object.setPrototypeOf(person, boss);

// ---- Math ----

let number = 0.78;
console.log(Math.trunc(number)); // 3

// ---- Sting ----

let name = 'Maximilian';
console.log(name.startsWith("Max")); // true
console.log(name.endsWith("ian")); // true
console.log(name.includes("imi")); // true

// ---- Number ----

let number = 10.1;
console.log(Number.isInteger(number)); // false

// ---- Array ----

let array = Array.of(5, 10, 15);
console.log(array); // [5, 10, 15]

let newArray = Array.from(array, val => val * 2);
console.log(newArray); // [10, 20, 30]

array.fill(100);
console.log(array); // [100, 100, 100]
array.fill(100, 1, 2);
console.log(array); // [5, 100, 15]

let array = Array.of(5, 10, 15);
console.log(array.find(val => val >= 10)); // 12 // only first occurrence

var inventory = [
    {name: "apples", quantity: 2},
    {name: "bananas", quantity: 0},
    {name: "cherries", quantity: 5}
];
function findCherries(fruit) {
    return fruit.name === 'cherries';
}
console.log(inventory.find(findCherries));

let array = [1, 2, 3];
console.log(array.copyWithin(1, 2)); // [1, 3, 3]

let array = [1, 2, 3];
let it = array.entries();
for (let element of it) {
    console.log(element); // [0, 1] [1, 2] [2, 3]
}

// Map & Set
// ------------------------------------------------------

// ---- Map ----

let cardAce = {
    name: "Ace of Spades"
};
let cardKing = {
    name: "King of Clubs"
};
let deck = new Map();
deck.set('as', cardAce);
deck.set('kc', cardKing);
console.log(deck.get('as'));
for (key of deck.keys()) {
    console.log(key);
}
for (entry of deck) {
    console.log(entry);
}
deck.clear();
deck.delete('kc');

// ---- WeakMap ----
// garbage collected, only objects, can't loop, no size property

let key1 = {a:1};
let key2 = {a:2};
let deck = new WeakMap();
console.log(deck.get(key1));

// ---- Set ----

let set = new Set([1, 1, 1]);
set.add(2);
set.add(2);
for (element of set) {
    console.log(element); // 1 2 // only unique values are preserved
}

// ---- WeakSet ----


// Reflect
// ------------------------------------------------------

// ---- Reflect.construct() ----

// ---- Reflect.apply() ----

// ---- Reflect access property ----

// ---- Reflect.ownKeys() ----

// ---- Reflect create & delete property ----

// ---- Reflect prevent extend ----


// Proxy
// ------------------------------------------------------

// ---- Proxy ----

// ---- Trap ----

// ---- revocable proxy ----








// Browser Support
// https://kangax.github.io/compat-table/es6/

