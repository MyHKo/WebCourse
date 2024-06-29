'use strict';

function sum(obj) {
    let sum = 0;
    for (let key in obj) {
        sum += obj[key];
    }
    return sum;
}

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

let salaries2 = {};

console.log(sum(salaries));
console.log(sum(salaries2));