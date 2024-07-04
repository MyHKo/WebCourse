'use strict';

function sumSalaries(base) {
    salaries = Object.values(base);
    return salaries.reduce((sum, cur) => sum + cur, 0)
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

console.log(sumSalaries(salaries));