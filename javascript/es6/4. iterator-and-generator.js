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