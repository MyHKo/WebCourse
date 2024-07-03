'use strict';

function groupById(arr) {
    let output = {};
    for(let item of arr) {
        output[item.id] = item;
    }
    return output;
}

let users = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
];

let usersById = groupById(users);

console.log(usersById);