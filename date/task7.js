'use strict';

function secondsToTomorrow(){
    let today = new Date();
    let tomorrow = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);
    return Math.floor((tomorrow - today) / 1000);
}

console.log(secondsToTomorrow());