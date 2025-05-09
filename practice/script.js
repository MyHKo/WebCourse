'use strict';

let name = "bib"

function makeCounter() {
    let counter = 0
    return function () {
        return counter++
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

async function f(url){
    let response = await fetch(url);
    let data = await response.json();
    return data.name
}

function sayHi() {
    console.log("Hello")
}

function debounceDecorator(func){
    let canRun = true;
    return function (...args) {
        if(canRun){
            func(args)
            canRun = false
            setTimeout(() => {canRun = true}, 1000)
        }
    }
}

let debouncedHi = debounceDecorator(sayHi)
debouncedHi()
debouncedHi()
debouncedHi()
debouncedHi()
setTimeout(() => {debouncedHi()}, 1000)

function deepClone(obj) {
    let copy;
    for (let key in obj) {
        if(typeof obj[key] == 'object'){
            copy[key] = deepClone(obj[key]);
        } else {
            copy[key] = obj[key];
        }
    }
}
