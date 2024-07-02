'use strict';

function ucFirst(string) {
    return string[0].toUpperCase() + string.slice(1);
}

let string = "hello";
console.log(string);
console.log(ucFirst(string));