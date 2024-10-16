'use strict';
Function.prototype.defer = function (ms) {
    let context = this;
    return function (...args){
        setTimeout(() => {context(...args)}, ms)
    }
}


function f(a,b,c) {
    console.log(a+b+c);
}

f.defer(1000)(1,2,3.2,3)
