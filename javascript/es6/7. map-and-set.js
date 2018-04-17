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
for (element of set) { // .keys(), .values(), .entries() will also work
    console.log(element); // 1 2 // only unique values are preserved
}

// ---- WeakSet ----

let set = new WeakSet([{a:1}, {b:2}, {b:2}]);
console.log(set.has({b:2})); // false // references are different

let obj1 = {a:1};
let obj2 = {b:2};
let set = new WeakSet([obj1, obj2, obj2]);
console.log(set.has(obj2)); // true

