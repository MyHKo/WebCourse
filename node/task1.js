'use strict'

class BaseError extends Error {
    constructor (description, name) {
        super(description)
        this.name = name
    }
}

let error = new BaseError("A big error", "ERROR")
console.log("Beep");
if(typeof error === "object") {
} else {
    console.log(typeof error);
}
console.log("Beep");