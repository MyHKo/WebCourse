'use strict';

let input = prompt('Give a number');

while(Number(input) <= 100 && input != null) {
    input = prompt('Give another number');
}