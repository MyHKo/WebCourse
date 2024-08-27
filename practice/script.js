'use strict';


let controller_1 = new AbortController();
let controller_2 = new AbortController();

new Promise((resolve, reject) => {
    setTimeout(resolve, 10000);
    controller_1.signal.addEventListener('abort', resolve);
}).then(() => console.log('Aborted 1'))

new Promise((resolve, reject) => {
    setTimeout(resolve, 10000);
    controller_2.signal.addEventListener('abort', resolve);
}).then(() => console.log('Aborted 2'))

setTimeout(() => {controller_1.abort}, 6000);
setTimeout(() =>{controller_2.abort}, 4000);