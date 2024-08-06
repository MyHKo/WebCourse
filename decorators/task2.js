'use strict';

let obj = {
    a: 2,

    b: function (x,y){
        console.log(this.a + " " + y + " " + x);
    }
}

function delayedWrapper(func, delay){
    return function(){
        setTimeout(() => {func.call(this, ...arguments)}, delay);
    }
}

obj.b = delayedWrapper(obj.b, 1000);

obj.b(1,2);