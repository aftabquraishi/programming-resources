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