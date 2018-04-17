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

// ---- String ----

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