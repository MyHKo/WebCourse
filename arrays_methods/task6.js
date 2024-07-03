'use strict';

function Calculator(){
    this.operations = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
    }

    this.calculate = function (string){
        let expression = string.split(' ');
        for(let operation in this.operations){
            if(operation === expression[1]){
                return this.operations[operation](+expression[0], +expression[2]);
            }
        }
        return undefined;
    }

    this.addMethod = function (operation, func){
        this.operations[operation] = func;
    }
}


let calculator = new Calculator();
calculator.addMethod("*", (a,b) => a * b);

console.log(calculator.calculate("2 * 3"));