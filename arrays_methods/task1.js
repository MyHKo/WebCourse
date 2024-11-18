'use strict'

function camelize(string) {
    let arr = string.split("-");
    arr = arr.map(function (item) {
        if(arr.indexOf(item) > 0) {
            return item.slice(0, 1).toUpperCase() + item.slice(1);
        }
        return item;
    })
    return arr.join("");
}

console.log(camelize("-webkit-transition"));