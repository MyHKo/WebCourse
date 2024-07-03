'use strict';

function unique(arr){
    let output = [];
    for(let i=0;i<arr.length;i++){
        if(!output.includes(arr[i])){
            output.push(arr[i]);
        }
    }
    return output;
}

let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
];

console.log(unique(strings));