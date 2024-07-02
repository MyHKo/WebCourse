'use strict';

function getNUmber() {
    let number = prompt("number?");
    while (!isFinite(number)){
        number = prompt("number?");
    }
    return number;
}
