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