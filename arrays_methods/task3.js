'use strict';

function filterRangeInPlace(arr, min, max) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < min || arr[i] > max){
            arr.splice(i, 1);
        }
    }
}



let arr = [5,3,8,1];
filterRangeInPlace(arr, 3, 8);
console.log(arr);