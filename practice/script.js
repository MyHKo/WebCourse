'use strict';

let name = "bib"

function makeCounter() {
    let name = "bob"
    return function () {
        return name
    }
}

const func = makeCounter();

console.log(func())

function sum(a) {
    return function (b) {
        return a + b
    }
}

console.log(sum(1)(2))

let arr = [1,2,3,4]
console.log(arr.filter((value) => {if(value===1) return true}))

let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
]

function byField(field) {
    return function (a, b) {
        return a[field] > b[field] ? true : false;
    }
}

function makeArmy() {
    let shooters = [];

    let i = 0;
    while (i < 10) {
        let number = i
        let shooter = function() {
            console.log( number );
        };
        shooters.push(shooter);
        i++;
    }

    return shooters;
}

let army = makeArmy();
army[1]()
