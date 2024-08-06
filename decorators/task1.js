'use strict';

function work(a,b){
    return a + b
}

function spyDecorator(func){
    let calls = []
    let wrapper = function (){
        calls.push(Array.from(arguments));
        return func(...arguments);
    }
    wrapper.calls = calls
    return wrapper
}

let spy1 = spyDecorator(work);
console.log(spy1(1,2));
console.log(spy1.calls[0])