'use strict';

function print(x){
    console.log(x);
}

function debounce(func, wait){
    let lastCallTime = 0;
    let lastCallTimeDifference = 0;
    return function (){
        lastCallTimeDifference += new Date().getTime() - lastCallTime
        lastCallTime = new Date().getTime();
        if(lastCallTimeDifference >= wait){
            lastCallTimeDifference = 0
            return func(...arguments);
        }
    }
}

let a = debounce(print, 1000)
let i = 0
let interval = setInterval(() => {
    if(i < 101)
        a(i++)
    else
        clearInterval(interval)
}, 100)