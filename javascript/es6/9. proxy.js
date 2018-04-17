// Proxy (Meta Programming)
// ------------------------------------------------------

// ---- Proxy and Trap ----

let person = {
    age: 27,
    name: "Max"
};

let handler = {
    get: function(target, name) { // Trap
      return name in target ? target[name] : 'Non existant';
    },
    set: function(target, property, value) {
        if (value >= 2) {
            Reflect.set(target, property, value);
        }
    }
};

var proxy = new Proxy(person, handler);
console.log(proxy.age); // 27
console.log(proxy.name); // "Non existant"

proxy.name = "M";
console.log(proxy.name); // "Max"

proxy.name = "Maximilian";
console.log(proxy.name); // "Maximilian"

// ---- Proxy as prototype ----

let person = {
    age: 27,
    name: "Max"
};

let handler = {
    get: function(target, name) { // Trap
      return name in target ? target[name] : 'Non existant';
    }
};

let proxy = new Proxy({}, handler);
Reflect.setPrototypeOf(person, proxy);
console.log(person.name); // "Max"
console.log(person.hobbies); // "Non existant"

// ---- Function as proxy ----

function log(message) {
    console.log('Log entry created, message: ' + message);
}

let handler = {
    apply: function(target, thisArg, argumentsList) {
        if (argumentsList.length == 1) {
            return Reflect.apply(target, thisArg, argumentsList);
        }
    }
};
let proxy = new Proxy(log, handler);
proxy('Hello'); // "Log entry created, message: Hello"
proxy('Hello', 10); //  // fails validation

// ---- Revocable proxy ----

let person = {
    name: "Max"
};
let handler = {
    get: function(target, property) {
      return Reflect.get(target, property);
    }
};

let {proxy, revoke} = Proxy.revokable(person, handler);
console.log(proxy.name); // "Max"
revoke();
console.log(proxy.name); // Error: cannot perform 'get' on a proxy that has been revoked