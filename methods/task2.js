'use strict'
let calculator = {
    sum: function() {
        console.log(this.a + this.b);
    },

    mul: function () {
        console.log(this.a * this.b);
    }
};

calculator.a = 10;
calculator.b = 12;

calculator.mul();
calculator.sum();
