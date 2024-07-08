'use strict';

function formatDate(date){
    let diff = new Date() - date;
    if(diff < 1000){
        return "Right now";
    } else if(diff < 60000){
        return `${Math.floor(diff / 1000)} seconds ago`;
    } else if(diff < 3600000){
        return `${Math.floor(diff / 60000)} minutes ago`;
    } else {
        return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}`;
    }
}

console.log( formatDate(new Date(new Date - 500)) );

console.log( formatDate(new Date(new Date - 31 * 1000)) );

console.log( formatDate(new Date(new Date - 7 * 60 * 1000)) );

console.log( formatDate(new Date(new Date - 86400 * 1000)) );