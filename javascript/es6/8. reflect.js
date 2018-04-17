// Reflect (Meta Programming)
// ------------------------------------------------------

// ---- Reflect.construct() ----

class Person {
    constructor(name) {
        This.name = name;
    }
}
function TopObj() {
    This.age = 27;
}
// TopObj changes the prototype of Person object
let person = Reflect.construct(Person, ['Max'], TopObj);
console.log(person);

// ---- Reflect.apply() ----

class Person {
    constructor(name, age) {
        This.name = name;
        This.age = age;
    }
    greet() {
        console.log("Hello, I am " + this .name);
    }
}
let person = Reflect.construct(Person, ['Max', 27]);
Reflect.apply(person.greet, person, []); // Hello, I am Max

// ---- Reflect access property ----

class Person {
    constructor(name) {
        This.name = name;
    }
}
let person = new Person();
Person.prototype.age = 27;
let proto = {
    age: 30;
}
Reflect.setPrototypeOf(person, proto);
console.log(Reflect.getPrototypeOf(person)); // [object object] { age: 30 }

// --
class Person {
    constructor(name, age) {
        This.name = name;
        This.age = age;
    }
}
let person = new Person('Max', 27);
console.log(Reflect.get(person, 'name')); // "Max"
Reflect.set(person, 'name', 'Anna');
console.log(Reflect.get(person, 'name')); // "Anna"
console.log(Reflect.has(person, 'name')); // true

// ---- Reflect.ownKeys() ----

class Person {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
}
console.log(Reflect.ownKeys(person)); // ["_name", "_age"] // name is excluded

// ---- Reflect create & delete property ----

let person = new Person('Max', 27);
Reflect.defineProperty(person, 'hobbies', {
    writable: true, // without writable cannot update the property value later
    value: ["sports", "Cooking"],
    configurable: true // without configurable cannot change this settings later
});
console.log(person.hobbies); // ["sports", "Cooking"]

Reflect.deleteProperty(person, 'age');

// ---- Reflect prevent extend ----

Reflect.preventExtensions(person);
console.log(Reflect.isExtensible(person));