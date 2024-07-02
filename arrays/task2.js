'use strict';

let arr = [-1,3,5,-9];

function getMaxSubSum(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        let partialSum = 0;
        for(let j = i; j < arr.length; j++){
            partialSum += arr[j];
            if(partialSum > sum){
                sum = partialSum;
            }
        }
    }
    return sum;
}

console.log(getMaxSubSum([-1, 2, 3, -9, 11]));