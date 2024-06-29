'use strict';

function isEmpty(obj){
    let counter = 0;
    for(let key in obj){
        counter++;
    }
    return !Boolean(counter);
}

let schedule = {};

console.log( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

console.log( isEmpty(schedule) );