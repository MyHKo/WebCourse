'use strict';

let dictionary = Object.create(null, {
    toString: {
        value(){
            return "strung"
        }
    },
    age: {
        value: 2,
        enumerable: true
    }
});


dictionary.apple = "Apple";
dictionary.__proto__ = "test";

for(let key in dictionary) {
    console.log(key);
}

console.log(dictionary.toString());