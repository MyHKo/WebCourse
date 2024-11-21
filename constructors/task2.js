'use strict'

function makeCalculator() {
    this.read = function() {
        this.a = +prompt("Enter a: ");
        this.b = +prompt("Enter b: ");
    };

    this.sum = function () {
        console.log(this.a + this.b);ввввввввввввв
    };

    this.mul = function () {
        console.log(this.a * this.b);
    }
}