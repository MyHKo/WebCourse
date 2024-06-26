'use strict';

function checkAge(Age){
    return Age > 18 ?  true : confirm("did parents allow you?");
}

function checkAge2(age){
    return age > 18 || confirm("did parents allow you?");
}

function min(a, b){
    if(a < b){
        return a;
    }
    return b;
}

function pow(a, b) {
    let output = a;
    for (let i = 0; i < b; i++) {
        output *= output;
    }
    return output;
}

let a = +prompt("a?"), b = +prompt("b?");
alert(min(a, b));
alert(pow(a, b));
