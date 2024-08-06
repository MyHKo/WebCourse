'use strict';

function print(x){
    console.log(x);
}

function debounce(func, wait){
    let lastCallTime = 0;
    return function (){
        if(new Date().getTime() - lastCallTime > wait){
            lastCallTime = new Date().getTime();
            return func(...arguments);
        }
        lastCallTime = new Date().getTime();
    }
}

let a = debounce(print, 1000)

a(2)
a(2)
setTimeout(a, 2000,3)