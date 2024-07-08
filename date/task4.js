'use strict';

function getDateAgo(date, daysAgo){
    return new Date(date - (daysAgo *  86400000)).toDateString();
}

let date = new Date(2015, 0 ,2);
console.log(getDateAgo(date, 1));
console.log(getDateAgo(date, 2));
console.log(getDateAgo(date, 365));