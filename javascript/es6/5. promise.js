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