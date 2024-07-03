'use strict';

function copySorted(arr){
    return arr.slice(0, arr.length).sort((a, b) => a.localeCompare(b));
}

let arr = ['Österreich', 'Andorra', 'Vietnam'];
let arrCp = copySorted(arr);
console.log(arrCp);
console.log(arr);