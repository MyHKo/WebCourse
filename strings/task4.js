'use strict';

function extractCurrencyValue(string) {
    return Number(string.slice(1));
}

console.log(extractCurrencyValue("$120"));