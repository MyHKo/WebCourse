'use strict';

let styles = ["Jazz", "Bloose"];
console.log(styles);
styles.push("Rock-n-roll");
console.log(styles);
styles[styles.length - +(styles.length/2).toFixed(0)] = "Classic";
console.log(styles);
console.log(styles.shift());
console.log(styles);
styles.unshift("Rap", "Raggy");
console.log(styles);
styles[styles.length - +(styles.length/2).toFixed(0)] = "Classic";
console.log(styles);
styles.push("Rock");
console.log(styles);
styles[styles.length - +(styles.length/2).toFixed(0)] = "RIP";
console.log(styles);