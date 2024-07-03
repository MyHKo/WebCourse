'use strict';

function filterRange(arr, min, max) {
    return arr.filter(function (item) {
        return min <= item && item <= max;
    });
}

let arr = [5, 3, 8, 1];

console.log(filterRange(arr,1,4));
console.log(arr);