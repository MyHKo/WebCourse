'use strict';

let n = prompt('Give your n');

outer: for(let i = 1; i < Number(n); i++){
    for(let j = i-1; j > 1; j--){
        if(i % j == 0){
            continue outer;
        }
    }
    alert(i);
}