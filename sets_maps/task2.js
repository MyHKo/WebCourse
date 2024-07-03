'use strict';

function aclean(arr) {
    let set = new Set();
    let result = [];
    let setSize = set.size;

    for(let value of arr) {
        set.add(value.toLowerCase().split("").sort().join());

        if(set.size > setSize){
            result.push(value);
            setSize = set.size;
        }
    }

    return result;
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aclean(arr));
