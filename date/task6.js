'use strict';

function getSecondsToday(){
    let date = new Date();
    return date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds()
}

console.log(getSecondsToday());