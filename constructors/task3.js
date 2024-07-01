'use strict'

function Accumulator(startingValue = 0){
    this.value = startingValue;

    this.read = function (){
        this.value += +prompt("Give a value: ", 0);
    }
}