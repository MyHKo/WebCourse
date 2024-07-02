'use strict';

function checkSpam(string) {
    return string.toLowerCase().includes("viagra") || string.toLowerCase().includes("xxx");
}

console.log(checkSpam('buy ViAgRA now'));
console.log(checkSpam('free xxxxx'));
console.log(checkSpam("innocent rabbit"));